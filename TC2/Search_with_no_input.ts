import { test, expect } from '@playwright/test';

test("Search with no input", async ({ page }) => {
  // Step 1: Navigate to https://www.youtube.com
  // Step 2: Click 'Search' button
  // Step 3: Expect error message 'Please enter a search term' to be visible
  // Step 4: Expect URL remains as 'https://www.youtube.com/'
  // Step 5: Expect search field retains empty state
});
