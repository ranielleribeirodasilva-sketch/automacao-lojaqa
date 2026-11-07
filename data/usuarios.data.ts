export interface UsuarioData {
  descricao: string;
  usuario: string;
  senha: string;
  sucesso: boolean;
  mensagemEsperada?: string;
}

export const listaUsuarios: UsuarioData[] = [
  {
    descricao: "Cliente Válido",
    usuario: "user@system.com",
    senha: "UserPassword123",
    sucesso: true
  },
  {
    descricao: "Usuário Bloqueado",
    usuario: "blocked@system.com",
    senha: "Blocked123",
    sucesso: false,
    mensagemEsperada: ""
  },
  {
    descricao: "Senha Incorreta",
    usuario: "user@system.com",
    senha: "senhaerrada",
    sucesso: false,
    mensagemEsperada: ""
  }
];