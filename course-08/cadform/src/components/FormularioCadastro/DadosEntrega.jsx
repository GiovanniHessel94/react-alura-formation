import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";

const DadosEntrega = ({ aoEnviar, validacoes }) => {
  const [cep, setCEP] = useState("");
  const [endereco, setEndereco] = useState("");
  const [numero, setNumero] = useState("");
  const [estado, setEstado] = useState("");
  const [cidade, setCidade] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        aoEnviar({ cep, endereco, numero, estado, cidade });
      }}
    >
      <TextField
        value={cep}
        onChange={(e) => {
          setCEP(e.target.value);
        }}
        id="cep"
        label="CEP"
        variant="outlined"
        margin="normal"
        type="number"
        required
      />
      <TextField
        value={endereco}
        onChange={(e) => {
          setEndereco(e.target.value);
        }}
        id="endereco"
        label="Endereço"
        variant="outlined"
        margin="normal"
        type="text"
        required
        fullWidth
      />
      <TextField
        value={numero}
        onChange={(e) => {
          setNumero(e.target.value);
        }}
        id="numero"
        label="Número"
        variant="outlined"
        margin="normal"
        type="number"
      />
      <TextField
        value={estado}
        onChange={(e) => {
          setEstado(e.target.value);
        }}
        id="estado"
        label="Estado"
        variant="outlined"
        margin="normal"
        type="text"
        required
      />
      <TextField
        value={cidade}
        onChange={(e) => {
          setCidade(e.target.value);
        }}
        id="cidade"
        label="Cidade"
        variant="outlined"
        margin="normal"
        type="text"
        required
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        margin="normal"
        fullWidth
      >
        Finalizar Cadastro
      </Button>
    </form>
  );
};

export default DadosEntrega;
