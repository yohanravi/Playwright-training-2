import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  console.log('I am in the beforeEach');
});

test.afterEach(async ({ page }) => {
  console.log('I am in the afterEach');
});

test('test1', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  console.log('I am in the test 1');
});

test('test2', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  console.log('I am in the test 2');
});
test.fixme('test3', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  console.log('I am in the test 3');
});
test.fail('test4', async ({ page }) => {
  await page.goto('https://playwright.dev4/');
  console.log('I am in the test 4');
});
test.skip('test5', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  console.log('I am in the test 5');
});