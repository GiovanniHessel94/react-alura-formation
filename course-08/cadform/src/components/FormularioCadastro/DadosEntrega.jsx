import { Button, TextField } from "@material-ui/core";
import React from "react";

const DadosEntrega = () => {
  return (
    <form>
      <TextField
        id="cep"
        label="CEP"
        variant="outlined"
        margin="normal"
        type="number"
        required
      />
      <TextField
        id="endereco"
        label="Endereço"
        variant="outlined"
        margin="normal"
        type="text"
        required
        fullWidth
      />
      <TextField
        id="numero"
        label="Número"
        variant="outlined"
        margin="normal"
        type="number"
      />
      <TextField
        id="estado"
        label="Estado"
        variant="outlined"
        margin="normal"
        type="text"
        required
      />
      <TextField
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
