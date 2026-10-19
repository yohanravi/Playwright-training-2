import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com');
});

test('Verify user login with blank username and password', async ({ page }) => {
  // await page.goto('https://opensource-demo.orangehrmlive.com');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.locator('form')).toContainText('Required');
  await expect(page.locator('form')).toContainText('Required');
});

test('Verify user login with blank username and valid password', async ({ page }) => {
  // await page.goto('https://opensource-demo.orangehrmlive.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.locator('form')).toContainText('Required');

});

test('Verify user login with valid username and blank password', async ({ page }) => {
  // await page.goto('https://opensource-demo.orangehrmlive.com');
  // await page.getByRole('textbox', { name: 'Username' }).click();

  // CSS Path
  await page.locator('input[name="username"]').fill('Admin');

  // ExPath
  // await page.locator('xpath=//input[@name="username"]').fill('Admin');


  
  // await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.locator('form')).toContainText('Required');

});

test('Verify user login by enter with valid username and blank password', async ({ page }) => {
  // await page.goto('https://opensource-demo.orangehrmlive.com');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('button', { name: 'Login' }).press('Enter');
  await expect(page.locator('form')).toContainText('Required');

});