import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  console.log('I am in the beforeEach');
});

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  console.log('I am in the test 1');
});

test.only('has title2', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  console.log('I am in the test 1');
});