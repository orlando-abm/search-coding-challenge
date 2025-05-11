import { test, expect } from '@playwright/test';

const url = process.env.API_URL || 'http://localhost:5173';

test('Search Café should return 5 results', async ({ page }) => {
  await page.goto(url);

  await page.waitForSelector('#search-input');
  await page.fill('#search-input', 'café');

  await page.click('#search-button');

  await page.waitForSelector('#businesses-list');

  await page.waitForTimeout(2000);

  const businessCount = await page.locator('#businesses-list .business-card').count();
  expect(businessCount).toBe(5);

  const resultsText = await page.textContent('#businesses-list h2');
  expect(resultsText).toContain('Resultados 5 para café');
});
