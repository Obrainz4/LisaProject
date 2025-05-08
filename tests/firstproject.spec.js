import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.rightmove.co.uk/');
  await page.getByRole('button', { name: 'Accept all' }).click();
  await page.getByTestId('typeahead-searchbox').click();
  await page.locator('[data-test="global-header"]').getByRole('link', { name: 'Buy' }).click();
  await page.getByTestId('typeahead-searchbox').click();
  await page.getByTestId('typeahead-searchbox').fill('lon');
  await page.getByRole('button', { name: 'London', exact: true }).click();
  await page.getByTestId('forSaleCta').click();
  await page.getByLabel('Search radius').selectOption('1.0');
  await page.getByTestId('propertyTypes').selectOption('house');
  await page.getByLabel('Added to site').selectOption('7');
  await page.getByTestId('maxPrice').selectOption('2500000');
  await page.getByRole('button', { name: 'Search properties' }).click();
});