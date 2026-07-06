import { test, expect } from '@playwright/test';

test("Edge: Prevent duplicate submissions on rapid double-click of \"Send Message\" (idempotency/race)", async ({ page }) => {
  // Step 1: navigate to https://testingmavens.com/contact
  // Step 2: expect heading "Contact Us" to be visible
  // Step 3: fill "Name" with "Idempotent Tester"
  // Step 4: fill "Email" with "user@test.com"
  // Step 5: fill "Subject" with "Double click test"
  // Step 6: fill "Message" with "Please ensure this message is only submitted once."
  // Step 7: start network request capture and filter by regexp "/api/contact"
  // Step 8: perform 3 clicks on button with exact text "Send Message" within 500ms total
  // Step 9: wait up to 10s for network activity to finish
  // Step 10: expect exactly 1 POST request to a URL matching /api/contact
  // Step 11: expect visible text exactly "Thank you — your message has been sent." to be visible once
  // Step 12: if there is an orders/submissions counter visible, expect it to increase by exactly 1
});
