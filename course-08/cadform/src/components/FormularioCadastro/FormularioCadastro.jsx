import React, { useState } from "react";
import DadosEntrega from "./DadosEntrega";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";

function FormularioCadastro({ aoEnviar, validarCPF }) {
  const [etapaAtual, setEtapaAtual] = useState(0);

  const proximaEtapa = () => {
    setEtapaAtual(etapaAtual + 1);
  };

  const formularios = [
    <DadosUsuario aoEnviar={proximaEtapa} />,
    <DadosPessoais aoEnviar={proximaEtapa} validarCPF={validarCPF} />,
    <DadosEntrega />,
  ];

  return formularios[etapaAtual];
}

export default FormularioCadastro;
