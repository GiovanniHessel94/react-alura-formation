// Classe Abstrata
export class Funcionario {
    #cpf;
    #nome;
    #salario;
    #bonificacao;
    #senha;

    constructor(cpf, nome, salario, bonificacao = 0) {
        if (new.target === Funcionario) {
            throw Error('Você não deveria instanciar um objeto do tipo Funcionario diretamente, pois essa é uma classe abstrata.')
        }

        this.#cpf = cpf;
        this.#nome = nome;
        this.#salario = salario;

        this.#bonificacao = bonificacao;
    }

    cadastrarSenha(senha) {
        this.#senha = senha;
    }

    autenticar(senha) {
        return this.#senha == senha;
    }
}