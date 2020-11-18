//Simple React Snippets
//imrc
import React, { Component } from "react";
import "./estilo.css";
import { ReactComponent as CloseSVG } from "../../assets/img/close.svg";

//cc
class CardNota extends Component {
  apagar() {
    const indice = this.props.indice;
    this.props.apagarNotaCardNota(indice);
  }

  render() {
    return (
      <section className="card-nota">
        <header className="card-nota_cabecalho">
          <h3 className="card-nota_titulo">{this.props.titulo}</h3>
          <CloseSVG onClick={this.apagar.bind(this)} />
          <h4>{this.props.categoriaCardNota}</h4>
        </header>
        <p className="card-nota_texto">{this.props.texto}</p>
      </section>
    );
  }
}

export default CardNota;
