import { Button, FormControlLabel, Switch, TextField } from "@material-ui/core";
import React, { useContext, useState } from "react";
import ValidarCadastro from "../../contexts/ValidarCadastro";

function DadosPessoais({ aoEnviar }) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCPF] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);
  const [errors, setErrors] = useState({
    cpf: { invalido: false, texto: "" },
    nome: { invalido: false, texto: "" },
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
          aoEnviar({ nome, sobrenome, cpf, promocoes, novidades });
        }
      }}
    >
      <TextField
        id="nome"
        name="nome"
        label="Nome"
        variant="outlined"
        fullWidth
        margin="normal"
        type="text"
        required
        error={errors.nome.invalido}
        helperText={errors.nome.texto}
        value={nome}
        onChange={(e) => {
          setNome(e.target.value);
        }}
        onBlur={validaCampo}
      />

      <TextField
        id="sobrenome"
        label="Sobrenome"
        variant="outlined"
        fullWidth
        margin="normal"
        type="text"
        required
        value={sobrenome}
        onChange={(e) => {
          setSobrenome(e.target.value);
        }}
      />

      <TextField
        id="cpf"
        name="cpf"
        label="CPF"
        variant="outlined"
        fullWidth
        margin="normal"
        required
        error={errors.cpf.invalido}
        helperText={errors.cpf.texto}
        value={cpf}
        onChange={(e) => {
          setCPF(e.target.value);
        }}
        onBlur={validaCampo}
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
        Próximo
      </Button>
    </form>
  );
}

export default DadosPessoais;
