import { test, expect } from '@playwright/test';

test("Validation: Cross-field check \u2014 subject cannot equal message (example of cross-field rule)", async ({ page }) => {
  // Step 1: expect heading "Contact Us" to be visible
  // Step 2: fill "Name" with "CrossField Tester"
  // Step 3: fill "Email" with "user@test.com"
  // Step 4: fill "Subject" with "Same content"
  // Step 5: fill "Message" with "Same content"
  // Step 6: click button with exact text "Send Message"
  // Step 7: expect visible error text exactly "Subject and Message must not be identical" to be visible
  // Step 8: expect successful submission and presence of success message "Thank you — your message has been sent."
  // Step 9: correct "Subject" to "Different subject"
  // Step 10: click "Send Message"
  // Step 11: expect visible text exactly "Thank you — your message has been sent." to be visible
  // Step 12: clear fields
});
