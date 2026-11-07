import { Page, Locator } from '@playwright/test';

export class DashboardPage {
  private readonly welcomeMessage: Locator;
  private readonly logoutButton: Locator;

  constructor(private page: Page) {
    // Mensagem de boas-vindas e botão de logout comuns na LojaQA
    this.welcomeMessage = page.locator('h1, h2, #mensagem, .welcome, div');
    this.logoutButton = page.locator('button, a:has-text("Sair"), a:has-text("Logout"), #sair');
  }

  async obterMensagemBoasVindas(): Promise<string> {
    return await this.welcomeMessage.first().textContent() || '';
  }

  async logout() {
    await this.logoutButton.first().click();
  }
}