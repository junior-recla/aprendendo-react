import React, { Component } from "react";
import CardNota from "../CardNota";
import "./estilo.css";

class ListaDeNotas extends Component {
  constructor() {
    super();
    this.state = { notasStateListaDeNotas: [] };
  }

  componentDidMount() {
    this.props.notasList.inscrever(this._novasNotas.bind(this));
  }

  _novasNotas(notasParam) {
    this.setState({ ...this.state, notasStateListaDeNotas: notasParam });
  }

  render() {
    return (
      <ul className="lista-notas">
        {this.state.notasStateListaDeNotas.map((nota, index) => {
          return (
            <li className="lista-notas_item" key={index}>
              <CardNota
                indice={index}
                apagarNotaCardNota={this.props.apagarNotaListaDeNotas}
                titulo={nota.titulo}
                texto={nota.texto}
                categoriaCardNota={nota.categoriaNota}
              />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaDeNotas;
