import { test, expect } from '@playwright/test';

test("Search with leading and trailing spaces", async ({ page }) => {
  // Step 1: Navigate to https://www.youtube.com
  // Step 2: Fill the search field with '  test video  '
  // Step 3: Click 'Search'
  // Step 4: Expect results to be displayed as if searching for 'test video'
  // Step 5: Expect URL to contain 'search'
});
