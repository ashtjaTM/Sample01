import { test, expect } from '@playwright/test';

test("Negative: Block submission with invalid email format", async ({ page }) => {
  // Step 1: expect heading "Contact Us" to be visible
  // Step 2: fill "Name" with "Test User"
  // Step 3: fill "Email" with "invalid-email"
  // Step 4: fill "Subject" with "Invalid email test"
  // Step 5: fill "Message" with "Message body"
  // Step 6: click button with exact text "Send Message"
  // Step 7: expect URL to equal "https://testingmavens.com/contact"
  // Step 8: expect visible error text exactly "Please enter a valid email address" to be visible and associated with the "Email" field
  // Step 9: expect the "Name" field to retain value "Test User"
  // Step 10: expect the "Message" field to retain value "Message body"
  // Step 11: expect the "Email" input to have focus after the failed submit
  // Step 12: expect no success message "Thank you — your message has been sent." to be visible
  // Step 13: clear form values
});
