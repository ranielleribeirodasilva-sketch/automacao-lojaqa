import { test, expect } from '../fixtures/auth.fixture';
import { LoginPage } from '../pages/LoginPage';

test.describe('Testes da Área Restrita com Fixture de Sessão', () => {
  
  test('Deve iniciar diretamente na área logada utilizando a fixture', async ({ dashboardPage, page }) => {
    const texto = await dashboardPage.obterMensagemBoasVindas();
    expect(texto).not.toBeNull();
  });

  test('Deve realizar o logout com sucesso a partir da área restrita', async ({ dashboardPage, page }) => {
    await dashboardPage.logout();
    const loginPage = new LoginPage(page);
    await expect(page).toHaveURL(/.*login.html/);
  });

});