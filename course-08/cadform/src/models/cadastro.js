const validarCPF = (cpf) => {
  if (cpf.length !== 11) {
    return { invalido: true, texto: "O CPF deve conter 11 dígitos" };
  } else {
    return { invalido: false, texto: "" };
  }
};

const validarSenha = (senha) => {
  if (senha.length <= 4 || senha.length > 20) {
    return { invalido: true, texto: "A senha deve conter de 5 a 20 dígitos" };
  } else {
    return { invalido: false, texto: "" };
  }
};

const validarNome = (nome) => {
  if (nome.length <= 1 || nome.length > 80) {
    return { invalido: true, texto: "O nome deve conter de 2 a 80 dígitos" };
  } else {
    return { invalido: false, texto: "" };
  }
};

export { validarCPF, validarSenha, validarNome };
