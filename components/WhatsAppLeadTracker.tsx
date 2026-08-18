'use client';
import { useEffect } from 'react';

export default function WhatsAppLeadTracker() {
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const el = (e.target as HTMLElement)?.closest('a[href*="wa.me"]');
      if (el && typeof (window as any).fbq === 'function') {
        (window as any).fbq('track', 'Lead');
      }
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);
  return null;
}
