import { test, expect } from '@playwright/test';

test.describe('Desafio Externo - API Reqres', () => {
  test('Deve consultar usuário com sucesso (Status 200)', async ({ request }) => {
    const response = await request.get('https://reqres.in/api/users/2');
    expect(response.status()).toBe(200);
    
    const body = await response.json();
    console.log('🌐 Resposta API Externa:', JSON.stringify(body, null, 2));
    expect(body.data).toHaveProperty('id', 2);
  });
});