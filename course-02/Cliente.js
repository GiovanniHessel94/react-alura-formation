export class Cliente {
    #cpf;
    #senha;

    get cpf() {
        return this.#cpf;
    }

    constructor(nome, cpf, senha) {
        this.nome = nome;
        this.#cpf = cpf;
        this.#senha = senha;
    }

    autenticar(senha) {
        return this.#senha == senha;
    }
}