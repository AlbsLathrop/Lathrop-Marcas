const KEY = 'lm_first_touch';
const TRACKING = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'ad_id'] as const;
const ALLOWED = [...TRACKING, 'referrer', 'landing_url'] as const;

export type FirstTouch = Partial<Record<(typeof ALLOWED)[number], string>>;

const stripWww = (host: string): string => host.replace(/^www\./i, '');
const hasTracking = (t: FirstTouch): boolean => TRACKING.some((k) => Boolean(t[k]));

function sanitize(raw: unknown): FirstTouch {
  const out: FirstTouch = {};
  if (typeof raw !== 'object' || raw === null) return out;
  const src = raw as Record<string, unknown>;
  for (const k of ALLOWED) {
    const v = src[k];
    if (typeof v === 'string' || typeof v === 'number') {
      const s = String(v).trim();
      if (s) out[k] = s;
    }
  }
  return out;
}

function readStored(): FirstTouch {
  try {
    return sanitize(JSON.parse(localStorage.getItem(KEY) ?? '{}'));
  } catch {
    return {};
  }
}

export function captureFirstTouch(): void {
  try {
    const stored = readStored();
    const q = new URLSearchParams(window.location.search);
    const touch: FirstTouch = {};
    for (const p of TRACKING) {
      const v = q.get(p)?.trim();
      if (v) touch[p] = v;
    }
    const visitHasTracking = hasTracking(touch);
    // Primer toque se conserva; solo se reemplaza si no trae utm_*/ad_id y la visita nueva sí.
    if (Object.keys(stored).length > 0 && (hasTracking(stored) || !visitHasTracking)) return;

    if (document.referrer) {
      try {
        const ref = new URL(document.referrer);
        if (stripWww(ref.hostname) !== stripWww(window.location.hostname)) touch.referrer = document.referrer;
      } catch {}
    }
    touch.landing_url = window.location.origin + window.location.pathname;
    localStorage.setItem(KEY, JSON.stringify(touch));
  } catch {}
}

export function getFirstTouch(): FirstTouch {
  return readStored();
}
