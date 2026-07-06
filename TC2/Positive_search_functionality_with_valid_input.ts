import { test, expect } from '@playwright/test';

test("Positive search functionality with valid input", async ({ page }) => {
  // Step 1: Navigate to https://www.youtube.com
  await page.goto('https://www.youtube.com');
  // Step 2: Fill the search field with 'test video'
  await page.getByRole('combobox', { name: 'Search' }).fill('test video');
  // Step 3: Click 'Search'
  await page.getByRole('button', { name: 'Search', exact: true }).click();
});
