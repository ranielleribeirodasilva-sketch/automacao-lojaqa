import { Page, Locator } from '@playwright/test';

export class LoginPage {
  private readonly usernameInput: Locator;
  private readonly passwordInput: Locator;
  private readonly loginButton: Locator;
  private readonly errorMessage: Locator;

  constructor(private page: Page) {
    // Aponta para qualquer input de texto ou de password visível na página
    this.usernameInput = page.locator('input').locator('visible=true').first();
    this.passwordInput = page.locator('input[type="password"]').locator('visible=true').first();
    this.loginButton = page.locator('button, input[type="submit"]').locator('visible=true').first();
    this.errorMessage = page.locator('.error, #erro, .alert, div');
  }

  async navegar() {
    await this.page.goto('https://alisonmelo.github.io/tioalison-pe-t4-fap26/projetos-base/01-sistema-login/login.html');
  }

  async preencherLogin(usuario: string, senha: string) {
    // Garante uma espera explícita curta antes de preencher
    await this.usernameInput.waitFor({ state: 'visible', timeout: 10000 });
    await this.usernameInput.fill(usuario);
    await this.passwordInput.fill(senha);
  }

  async clicarSubmit() {
    await this.loginButton.click();
  }

  async logar(usuario: string, senha: string) {
    await this.preencherLogin(usuario, senha);
    await this.clicarSubmit();
  }

  async obterMensagemErro(): Promise<string> {
    return await this.errorMessage.first().textContent() || '';
  }
}