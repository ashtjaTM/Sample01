import { test, expect } from '@playwright/test';

test("Negative: Required fields missing show field-level errors and prevent submission", async ({ page }) => {
  // Step 1: expect heading "Contact Us" to be visible
  // Step 2: Ensure "Name" is empty
  // Step 3: Ensure "Email" is empty
  // Step 4: Ensure "Message" is empty
  // Step 5: click button with exact text "Send Message"
  // Step 6: expect URL to equal "https://testingmavens.com/contact"
  // Step 7: expect visible error text exactly "Name is required" associated with the "Name" field
  // Step 8: expect visible error text exactly "Email is required" associated with the "Email" field
  // Step 9: expect visible error text exactly "Message is required" associated with the "Message" field
  // Step 10: expect focus to move to the first invalid field with label "Name"
  // Step 11: expect aria-invalid="true" on each invalid input element
  // Step 12: expect no network POST to /api/contact (if monitoring network) or no success message displayed
  // Step 13: fill fields with placeholder values and clear
});
