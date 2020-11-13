//Simple React Snippets
//imrc
import React, { Component } from "react";
import "./estilo.css";

//cc
class CardNota extends Component {
  state = {};
  render() {
    return (
      <section className="card-nota">
        <header className="card-nota_cabecalho">
          <h3 className="card-nota_titulo">{this.props.titulo}</h3>
        </header>
        <p className="card-nota_texto">{this.props.texto}</p>
      </section>
    );
  }
}

export default CardNota;
