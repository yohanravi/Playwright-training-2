import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await expect(page.locator('#app')).toMatchAriaSnapshot(`
    - paragraph: "Username : Admin"
    - paragraph: "Password : admin123"
    `);
  await expect(page.locator('#app')).toMatchAriaSnapshot(`
    - heading "Login" [level=5]
    - paragraph: "Username : Admin"
    - paragraph: "Password : admin123"
    - text:  Username
    - textbox "Username"
    - text:  Password
    - textbox "Password"
    - button "Login"
    - paragraph: Forgot your password?
    - link:
      - /url: https://www.linkedin.com/company/orangehrm/mycompany/
    - link:
      - /url: https://www.facebook.com/OrangeHRM/
    - link:
      - /url: https://twitter.com/orangehrm?lang=en
    - link:
      - /url: https://www.youtube.com/c/OrangeHRMInc
    - paragraph: OrangeHRM OS 5.9
    - paragraph:
      - text: /© \\d+ - \\d+/
      - link "OrangeHRM, Inc":
        - /url: http://www.orangehrm.com
      - text: . All rights reserved.
    `);
});