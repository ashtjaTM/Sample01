import { test, expect } from '@playwright/test';

test("TC2", async ({ page }) => {
  // Step 1: Go to testingmavens.com
  await page.goto('https://testingmavens.com');
});
