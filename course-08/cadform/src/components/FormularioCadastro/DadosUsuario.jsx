import { Button, TextField } from "@material-ui/core";
import React from "react";

const DadosUsuario = ({ aoEnviar }) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        aoEnviar();
      }}
    >
      <TextField
        id="email"
        label="email"
        type="email"
        required
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        id="password"
        label="password"
        type="password"
        required
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
};

export default DadosUsuario;
