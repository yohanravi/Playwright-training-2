import { test, expect } from '@playwright/test';

const password = 'admin123';
const username = 'Admin';

test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.locator('span').filter({ hasText: 'Admin' }).first().click();
  await page.locator("//div[@class='oxd-input-group oxd-input-field-bottom-space']//div//input[@class='oxd-input oxd-input--active']").fill('Admin');
  await page.locator('div').filter({ hasText: '-- Select --' }).first().click();
  await page.getByRole('button', { name: 'Search' }).click();
  await expect(page.getByText('(1) Record Found')).toBeVisible();
});