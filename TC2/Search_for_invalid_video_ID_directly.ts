import { test, expect } from '@playwright/test';

test("Search for invalid video ID directly", async ({ page }) => {
  // Step 1: Navigate to https://www.youtube.com
  // Step 2: Directly enter URL 'https://www.youtube.com/watch?v=invalidID'
  // Step 3: Expect 'Video unavailable' message to be visible
  // Step 4: Expect URL to remain as entered
});
