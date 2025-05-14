import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.brother.eu/en/');
  await page.getByRole('button', { name: 'Accept All Cookies' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'UK Flag United Kingdom' }).click();
  const page1 = await page1Promise;
  await page1.getByRole('button', { name: 'Accept All Cookies' }).click();
  await expect(page1.getByRole('link', { name: 'Brother', exact: true })).toBeVisible();
});