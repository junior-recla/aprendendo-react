import React, { Component } from "react";
import "./estilo.css";

class ListaDeCategorias extends Component {
  constructor() {
    super();
    this.state = { categoriasStateListaDeCategorias: [] };

    this._novasCategorias = this._novasCategorias.bind(this);
  }

  componentDidMount() {
    this.props.listaCategorias.inscrever(this._novasCategorias);
  }

  componentWillUnmount() {
    this.props.listaCategorias.desinscrever(this._novasCategorias);
  }

  _novasCategorias(categoriasParam) {
    this.setState({
      ...this.state,
      categoriasStateListaDeCategorias: categoriasParam,
    });
  }

  _handleEventoInput({ key, target }) {
    if (key === "Enter") {
      const valorCategoria = target.value; /////////////////////////////////let
      this.props.adicionarCategoria(valorCategoria);
    }
  }

  render() {
    return (
      <section className="lista-categorias">
        <ul className="lista-categorias_lista">
          {this.state.categoriasStateListaDeCategorias.map(
            (categoria, index) => (
              <li key={index} className="lista-categorias_item">
                {categoria}
              </li>
            )
          )}
        </ul>
        <input
          type="text"
          className="lista-categorias_input"
          placeholder="Adicionar categoria"
          onKeyUp={this._handleEventoInput.bind(this)}
        />
      </section>
    );
  }
}

export default ListaDeCategorias;
