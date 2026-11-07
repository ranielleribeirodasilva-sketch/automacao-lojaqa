import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
import { listaUsuarios } from '../data/usuarios.data';

test.describe('Testes Data-Driven de Login - LojaQA', () => {

  for (const cenario of listaUsuarios) {
    test(`CT - Login: ${cenario.descricao}`, async ({ page }) => {
      const loginPage = new LoginPage(page);
      const dashboardPage = new DashboardPage(page);

      await loginPage.navegar();
      await loginPage.logar(cenario.usuario, cenario.senha);

      if (cenario.sucesso) {
        // Valida que após o login bem-sucedido, entramos na área restrita/painel
        const texto = await dashboardPage.obterMensagemBoasVindas();
        expect(texto.length).toBeGreaterThan(0);
      } else {
        const erro = await loginPage.obterMensagemErro();
        expect(erro.toLowerCase()).toContain((cenario.mensagemEsperada || '').toLowerCase());
      }
    });
  }

});