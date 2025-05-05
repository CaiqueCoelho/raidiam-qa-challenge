const { test } = require('@playwright/test');

test('sign up and purchase product', async ({ page }) => {
  await page.goto('https://www.demoblaze.com');
  await page.waitForTimeout(10000);
  await page.click('#signin2');
  await page.fill('#sign-username', 'user123');
  await page.fill('#sign-password', 'pass123');
  await page.click('.modal-footer > .btn-primary');
  await page.waitForTimeout(5000);
  await page.click('#login2');
  await page.fill('#loginusername', 'user123');
  await page.fill('#loginpassword', 'pass123');
  await page.click('button[onclick="logIn()"]');
  await page.waitForTimeout(8000);
  await page.click('text=Samsung galaxy s6');
  await page.click('text=Add to cart');
  await page.waitForTimeout(3000);
  await page.click('#cartural');
  await page.click('text=Place Order');
  await page.click('.modal-footer > .btn-primary');
});

test.describe.skip('Demoblaze API Test', () => {
  test('logs in, adds product to cart and views cart', async () => {
    const username = 'user123';
    const password = 'pass123';

    const requestContext = await request.newContext();

    // Login request
    const loginResponse = await requestContext.post('https://api.demoblaze.com/login', {
      data: {
        username,
        password,
      },
    });
  });
});