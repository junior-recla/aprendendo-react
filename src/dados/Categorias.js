export default class Categorias {
  constructor() {
    this.nomes = [];
    this._inscritos = [];
  }

  inscrever(funcao) {
    this._inscritos.push(funcao);
  }

  desinscrever(funcao) {
    this._inscritos = this._inscritos.filter((f) => f !== funcao);
  }

  notificar() {
    this._inscritos.forEach((f) => f(this.nomes));
  }

  adicionarCategoria(novaNomeCategoria) {
    this.nomes.push(novaNomeCategoria);
    this.notificar();
  }
}
