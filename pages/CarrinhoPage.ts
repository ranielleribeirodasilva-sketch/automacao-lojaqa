import { Page, Locator } from '@playwright/test';

export class CarrinhoPage {
  readonly page: Page;
  readonly cartButton: Locator;
  readonly removeButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cartButton = page.locator('.shopping_cart_link');
    this.removeButton = page.locator('[data-test^="remove"]');
  }

  async abrirCarrinho() {
    await this.cartButton.click();
  }

  async removerItem() {
    if (await this.removeButton.isVisible()) {
      await this.removeButton.click();
    }
  }
}