import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.monster.com/jobs');
  await page.getByRole('link', { name: 'Salary Tools', exact: true }).click();
  await page.getByPlaceholder('Job Title').click();
  await page.getByPlaceholder('Job Title').fill('Automation');
  await page.getByRole('option', { name: 'Automation Engineer', exact: true }).click();
  await page.getByPlaceholder('Location').click();
  await page.getByPlaceholder('Location').fill('maryland');
  await page.getByRole('option', { name: 'Maryland, NY' }).click();
  await page.getByRole('button', { name: 'Find Salary' }).click();
});