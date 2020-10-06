import React, { Component } from "react";
import "./assets/App.css";
import "./assets/index.css";
import FormularioCadastro from "./components/FormularioCadastro";
import ListaDeCategorias from "./components/ListaDeCategorias/ListaDeCategorias";
import ListaDeNotas from "./components/ListaDeNotas";
import Categorias from "./dados/Categorias";
import ArrayDeNotas from "./dados/Notas";

class App extends Component {
  constructor() {
    super();
    this.categorias = new Categorias();
    this.notas = new ArrayDeNotas();
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro categorias={this.categorias} notas={this.notas} />
        <main className="conteudo-principal">
          <ListaDeCategorias categorias={this.categorias} />
          <ListaDeNotas
            deletarNotas={this.notas.deletarNotas.bind(this.notas)}
            notas={this.notas}
          />
        </main>
      </section>
    );
  }
}

//new ListaDeNotas({notas:this.notas})
export default App;
