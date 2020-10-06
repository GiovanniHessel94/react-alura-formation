import React, { useState } from "react";
import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core";

function FormularioCadastro({ aoEnviar, validarCPF }) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCPF] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);
  const [errors, setErrors] = useState({
    cpf: { invalido: false, texto: "" },
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        aoEnviar({ nome, sobrenome, cpf, promocoes, novidades });
      }}
    >
      <TextField
        id="nome"
        label="Nome"
        variant="outlined"
        fullWidth
        margin="normal"
        value={nome}
        onChange={(e) => {
          setNome(e.target.value);
        }}
      />

      <TextField
        id="sobrenome"
        label="Sobrenome"
        variant="outlined"
        fullWidth
        margin="normal"
        value={sobrenome}
        onChange={(e) => {
          setSobrenome(e.target.value);
        }}
      />

      <TextField
        id="cpf"
        label="CPF"
        variant="outlined"
        fullWidth
        margin="normal"
        error={errors.cpf.invalido}
        helperText={errors.cpf.texto}
        value={cpf}
        onChange={(e) => {
          setCPF(e.target.value);
        }}
        onBlur={(e) => {
          const cpfMap = validarCPF(cpf);

          setErrors({
            cpf: cpfMap,
          });
        }}
      />

      <FormControlLabel
        label="Promoções"
        control={
          <Switch
            name="promocoes"
            defaultChecked
            color="primary"
            value={promocoes}
            onChange={(e) => {
              setPromocoes(e.target.checked);
            }}
          />
        }
      />

      <FormControlLabel
        label="Novidades"
        control={
          <Switch
            name="novidades"
            defaultChecked
            color="primary"
            value={novidades}
            onChange={(e) => {
              setNovidades(e.target.checked);
            }}
          />
        }
      />

      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
}

export default FormularioCadastro;
