export default class Categorias {
  constructor() {
    this.categorias = [];
    this._inscritos = [];
    this.inscrever.bind(this);
    this.notificar.bind(this);
    this.criarCategoria.bind(this);
  }

  inscrever(func) {
    this._inscritos.push(func);
  }

  desinscrever(func) {
    this._inscritos = this._inscritos.filter((f) => f != func);
  }

  notificar() {
    this._inscritos.forEach((func) => func(this.categorias));
  }

  criarCategoria(novaCategoria) {
    this.categorias.push(novaCategoria);
    this.notificar();
  }
}
