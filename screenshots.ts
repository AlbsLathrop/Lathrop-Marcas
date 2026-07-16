import { chromium } from '@playwright/test';
import { mkdir } from 'fs/promises';
import { existsSync } from 'fs';

const BASE_URL = 'http://localhost:3000';
const VIEWPORTS = [
  { name: '1440px', width: 1440, height: 900 },
  { name: '375px', width: 375, height: 667 },
];
const SECTIONS = [
  { name: 'Hero', selector: 'section:nth-of-type(1)' },
  { name: 'Pricing', selector: '#pricing' },
  { name: 'AboutFirm', selector: 'section:nth-of-type(2)' },
];

async function takeScreenshots() {
  const browser = await chromium.launch();

  // Create screenshots directory
  if (!existsSync('screenshots')) {
    await mkdir('screenshots', { recursive: true });
  }

  for (const viewport of VIEWPORTS) {
    const context = await browser.newContext({
      viewport: { width: viewport.width, height: viewport.height },
    });
    const page = await context.newPage();

    try {
      await page.goto(BASE_URL, { waitUntil: 'networkidle' });

      for (const section of SECTIONS) {
        const element = await page.$(section.selector);
        if (element) {
          const box = await element.boundingBox();
          if (box) {
            await page.screenshot({
              path: `screenshots/${section.name}-${viewport.name}.png`,
              clip: {
                x: box.x,
                y: box.y,
                width: box.width,
                height: box.height,
              },
            });
            console.log(`✅ Capturado: ${section.name} (${viewport.name})`);
          }
        }
      }
    } catch (error) {
      console.error(`Error en viewport ${viewport.name}:`, error);
    } finally {
      await context.close();
    }
  }

  await browser.close();
  console.log('✅ Screenshots completados');
}

takeScreenshots().catch(console.error);
