import { test, expect } from '@playwright/test';

const password = 'admin123';
const username = 'Admin';

test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill(username);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(password);
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'PIM' }).click();
  await page.getByRole('button', { name: /Add/ }).click();
  await page.getByRole('textbox', { name: 'First Name' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill('Marco1');
  await page.getByRole('textbox', { name: 'Last Name' }).click();
  await page.getByRole('textbox', { name: 'Last Name' }).fill('Polo');
  await page.locator('div.oxd-input-group').filter({ hasText: 'Employee Id' }).locator('input').fill('0431198434');
  await page.getByRole('button', { name: 'Save' }).click();

  // Xpath locator for the success message
  await expect(page.locator("//div[@class='oxd-toast-content oxd-toast-content--success']/p[2]")).toHaveText('Successfully Saved');
});