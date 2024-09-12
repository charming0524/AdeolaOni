import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    // Go to https://www.instagram.com
  await page.goto('https://www.instagram.com/');

  // Click [data-test = "sign-up-button"]
  await page.getByRole('link', { name: 'Sign up' }).click();

  // Click [data-test = "number or email"]
  await page.getByLabel('Mobile Number or Email').click();

  // Fill [data-test = "number or email"]
  await page.getByLabel('Mobile Number or Email').fill('08146161787');

  // Click [data-test = "full-name"]
  await page.getByLabel('Full Name').click();

  // Fill [data-test = "full-name"]
  await page.getByLabel('Full Name').fill('Adeola Oni');

  // Click [data-test = "username"]
  await page.getByLabel('Username').click();

  // Fill [data-test = "username"]
  await page.getByLabel('Username').fill('Charming524@');

  // Click [data-test = "password"]
  await page.getByLabel('Password').click();

  // Fill [data-test = "password"]
  await page.getByLabel('Password').fill('Goodboy13');

  // Click [data-test = "sign-up-button"]
  await page.getByRole('button', { name: 'Sign up' }).click();

});