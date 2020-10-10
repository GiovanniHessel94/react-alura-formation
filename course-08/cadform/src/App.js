import { Container, Typography } from "@material-ui/core";
import "fontsource-roboto";
import React from "react";
import "./App.css";
import FormularioCadastro from "./components/FormularioCadastro";
import ValidarCadastro from "./contexts/ValidarCadastro";
import { validarCPF, validarNome, validarSenha } from "./models/cadastro";

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" component="h1" align="center">
        Formulário de cadastro
      </Typography>
      <ValidarCadastro.Provider
        value={{
          cpf: validarCPF,
          senha: validarSenha,
          nome: validarNome,
        }}
      >
        <FormularioCadastro aoEnviar={aoEnviar} />
      </ValidarCadastro.Provider>
    </Container>
  );
}

const aoEnviar = (dados) => {
  console.log(dados);
};

export default App;
