import React from "react";
import FormularioCadastro from "./components/FormularioCadastro";
import { Container, Typography } from "@material-ui/core";
import "fontsource-roboto";
import "./App.css";

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" component="h1" align="center">
        Formulário de cadastro
      </Typography>
      <FormularioCadastro aoEnviar={aoEnviar} validarCPF={validarCPF} />
    </Container>
  );
}

const aoEnviar = (dados) => {
  console.log(dados);
};

const validarCPF = (cpf) => {
  if (cpf.length !== 11) {
    return { invalido: true, texto: "O CPF deve conter 11 dígitos" };
  } else {
    return { invalido: false, texto: "" };
  }
};

export default App;
