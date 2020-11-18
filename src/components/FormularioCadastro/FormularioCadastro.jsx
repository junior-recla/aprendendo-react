import React, { Component } from "react";
import "./estilo.css";

class FormularioCadastro extends Component {
  constructor(props) {
    super(props);
    this.titulo = "";
    this.texto = "";
    this.categoriaFC = "Sem categoria";
    this.state = { categoriasStateFormulario: [] };

    this._novasCategorias = this._novasCategorias.bind(this)
  }

  componentDidMount() {
    this.props.categoriasFormulario.inscrever(this._novasCategorias);
  }

  componentWillUnmount(){
    this.props.categoriasFormulario.desinscrever(this._novasCategorias);
  }

  _novasCategorias(categoriasParam) {
    this.setState({
      ...this.state,
      categoriasStateFormulario: categoriasParam,
    });
  }

  _genericHandle(evento, campo) {
    evento.stopPropagation();
    this[campo] = evento.target.value;
  }

  _handleMudancaCategoria(evento) {
    this._genericHandle(evento, "categoriaFC");
    // evento.stopPropagation();
    // this.categoriaFC = evento.target.value;
  }

  _handleMudancaTitulo(evento) {
    this._genericHandle(evento, "titulo");
    // evento.stopPropagation();
    // this.titulo = evento.target.value;
  }

  _handleMudancaTexto(evento) {
    this._genericHandle(evento, "texto");
    // evento.stopPropagation();
    // this.texto = evento.target.value;
  }

  _criarNotaFC(evento) {
    evento.preventDefault(); //impede que o evento padrão ocorra (ex.: seguir um link ou atualizar a pagina com o submit);
    evento.stopPropagation(); //impede que o evento seja propagado para os handlers dos elementos DOM pais;
    this.props.propCriarNota(this.titulo, this.texto, this.categoriaFC);
  }

  render() {
    return (
      <form className="form-cadastro" onSubmit={this._criarNotaFC.bind(this)}>
        <select
          onChange={this._handleMudancaCategoria.bind(this)}
          className="form-cadastro_input"
        >
          <option defaultChecked={true}>Sem Categoria</option>
          {this.state.categoriasStateFormulario.map((categoria, index) => (
            <option key={index}>{categoria}</option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Título"
          className="form-cadastro_input"
          onChange={this._handleMudancaTitulo.bind(this)}
        />
        <textarea
          rows={15}
          placeholder="Escreva sua nota..."
          className="form-cadastro_input"
          onChange={this._handleMudancaTexto.bind(this)}
        />
        <button className="form-cadastro_input form-cadastro_submit">
          Cria Nota
        </button>
      </form>
    );
  }
}

export default FormularioCadastro;
