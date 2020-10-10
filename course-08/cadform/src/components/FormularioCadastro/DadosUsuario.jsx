import { Button, TextField } from "@material-ui/core";
import React, { useContext, useState } from "react";
import ValidarCadastro from "../../contexts/ValidarCadastro";

const DadosUsuario = ({ aoEnviar }) => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [errors, setErrors] = useState({
    senha: { invalido: false, texto: "" },
  });

  const validacoes = useContext(ValidarCadastro);

  const formValido = () => {
    for (let campo in errors) {
      if (errors[campo].invalido === true) {
        return false;
      }
    }
    return true;
  };

  const validaCampo = (e) => {
    const { name, value } = e.target;

    const novoEstado = { ...errors };
    novoEstado[name] = validacoes[name](value);

    setErrors(novoEstado);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        if (formValido()) {
          aoEnviar({ email, senha });
        }
      }}
    >
      <TextField
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        id="email"
        label="email"
        type="email"
        required
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        value={senha}
        onChange={(e) => {
          setSenha(e.target.value);
        }}
        error={errors.senha.invalido}
        helperText={errors.senha.texto}
        onBlur={validaCampo}
        id="senha"
        name="senha"
        label="Senha"
        type="senha"
        required
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <Button type="submit" variant="contained" color="primary">
        Próximo
      </Button>
    </form>
  );
};

export default DadosUsuario;
