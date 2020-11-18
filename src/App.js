import React, { Component } from "react";
import FormularioCadastro from "./components/FormularioCadastro";
import ListaDeNotas from "./components/ListaDeNotas";
import ListaDeCategorias from "./components/ListaDeCategorias";
import "./assets/App.css";
import "./assets/index.css";
import Categorias from "./dados/Categorias";
import ArrayDeNotas from "./dados/Notas";

class App extends Component {
  constructor() {
    super();
    this.categoriasApp = new Categorias();
    this.notasApp = new ArrayDeNotas();
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro
          categoriasFormulario={this.categoriasApp}
          propCriarNota={this.notasApp.adicionarNota.bind(this.notasApp)}
        />
        <main className="conteudo-principal">
          <ListaDeCategorias
            adicionarCategoria={this.categoriasApp.adicionarCategoria.bind(
              this.categoriasApp
            )}
            listaCategorias={this.categoriasApp}
          />
          <ListaDeNotas
            apagarNotaListaDeNotas={this.notasApp.apagarNotas.bind(
              this.notasApp
            )}
            notasList={this.notasApp}
          />
        </main>
      </section>
    );
  }
}

export default App;
