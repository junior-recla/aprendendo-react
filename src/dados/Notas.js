export default class ArrayDeNotas {
  constructor() {
    this.notas = [];
    this._inscritos = [];
  }

  adicionarNota(tituloParam, textoParam, categoriaParam) {
    const novaNota = new Nota(tituloParam, textoParam, categoriaParam);
    this.notas.push(novaNota);
    this.notificar();
  }

  apagarNotas(indice) {
    this.notas.splice(indice, 1);
    this.notificar();
  }

  inscrever(funcao) {
    this._inscritos.push(funcao);
  }

  desinscrever(funcao) {
    this._inscritos = this._inscritos.filter((f) => f !== funcao);
  }

  notificar() {
    this._inscritos.forEach((f) => f(this.notas));
  }
}

class Nota {
  constructor(tituloParam, textoParam, categoriaParam) {
    this.titulo = tituloParam;
    this.texto = textoParam;
    this.categoriaNota = categoriaParam;
  }
}
