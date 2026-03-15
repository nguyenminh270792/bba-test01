import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://e-commerce-dev.betterbytesvn.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/E-commerce site for automation testing/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://e-commerce-dev.betterbytesvn.com/');

  // Click the My Account link.
  await page.getByRole('link', { name: 'My Account' }).click();

  // Expects page to have a heading with the name of My Account.
  await expect(page.getByRole('heading', { name: 'My account' })).toBeVisible();
});
