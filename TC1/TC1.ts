import { test, expect } from '@playwright/test';

test("TC1", async ({ page }) => {
  // Step 1: Go to saucedemo.com
  await page.goto('https://www.saucedemo.com');
  // Step 2: Fill the username field with standard_user
  await page.locator('[data-test="username"]').fill('standard_user');
  // Step 3: Fill the password field with secret_sauce
  await page.locator('[data-test="password"]').fill('secret_sauce');
  // Step 4: Click the login button
  await page.locator('[data-test="login-button"]').click();
});
