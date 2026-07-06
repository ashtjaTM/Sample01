import { test, expect } from '@playwright/test';

test("Session expiry during search", async ({ page }) => {
  // Step 1: Navigate to https://www.youtube.com
  // Step 2: Fill the search field with 'test'
  // Step 3: Click 'Search'
  // Step 4: Close the tab
  // Step 5: Reopen the tab
  // Step 6: Expect redirect to login page when trying to view results
});
