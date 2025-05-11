import { test, expect } from '@playwright/test';

const url = process.env.API_URL || 'http://localhost:5173';

test('Verify Google Maps markers and InfoWindow', async ({ page }) => {
  await page.goto(url);

  await page.waitForSelector('#search-input');
  await page.fill('#search-input', 'Café Wonderful');
  await page.click('#search-button');

  await page.waitForSelector('.gm-style');
  await page.waitForTimeout(2000);

  const marker = page.locator('div[role="button"]');
  await marker.first().click();

  const infoWindow = page.locator('#info-window-details');
  await expect(infoWindow).toBeVisible();

  await expect(infoWindow.getByText('Café Wonderful')).toBeVisible();

  await expect(infoWindow).toContainText('Av. Providencia 2124, Providencia, Santiago');
});
