import { test, expect } from '@playwright/test';

test.describe('Desafio Externo - SauceDemo E2E', () => {
  test('Deve realizar login, validar detalhes do produto e carrinho', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    await expect(page).toHaveURL(/.*inventory.html/);

    await page.click('text=Sauce Labs Backpack');
    await expect(page.locator('.inventory_details_name')).toHaveText('Sauce Labs Backpack');

    await page.click('[data-test="add-to-cart"]');
    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
  });
});