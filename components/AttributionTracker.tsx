'use client';

import { useEffect } from 'react';
import { captureFirstTouch } from '@/lib/attribution';

export default function AttributionTracker() {
  useEffect(() => {
    captureFirstTouch();
  }, []);
  return null;
}
