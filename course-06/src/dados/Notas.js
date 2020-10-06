export default class ArrayDeNotas {
  constructor() {
    this.notas = [];
    this._inscritos = [];
    this.inscrever.bind(this);
    this.notificar.bind(this);
    this.criarNota.bind(this);
  }

  inscrever(func) {
    this._inscritos.push(func);
  }

  desinscrever(func) {
    this._inscritos = this._inscritos.filter((f) => f !== func);
  }

  notificar() {
    this._inscritos.forEach((func) => func(this.notas));
  }

  criarNota(titulo, texto, categoria) {
    this.notas.push(new Notas(titulo, texto, categoria));
    this.notificar();
  }

  deletarNotas(indice) {
    this.notas.splice(indice, 1);
    this.notificar();
  }
}

class Notas {
  constructor(titulo, texto, categoria) {
    this.titulo = titulo;
    this.texto = texto;
    this.categoria = categoria;
  }
}
