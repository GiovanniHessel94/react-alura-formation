import { Cliente } from '../Cliente.js';

// Classe Abstrata
export class Conta {
    #saldo;
    #cliente;
    #agencia;

    get saldo() {
        return this.#saldo;
    }

    set cliente(valor) {
        if (!(valor instanceof Cliente)) return null;

        this.#cliente = valor;
    }

    get cliente() {
        return this.#cliente;
    }

    get agencia() {
        return this.#agencia;
    }

    // Método abstrato
    sacar(valor) {
        throw Error('O método sacar da Conta é abstrato.')
    }

    _sacar(valor, taxa = 0) {
        if (taxa <= 0) throw Error('A taxa deve ser maior que zero.');

        if (this.#saldo < valor) return 0;

        const valorSacado = valor + (taxa * valor);

        this.#saldo -= valorSacado;
        return valorSacado;
    }

    depositar(valor) {
        if (valor <= 0) return 0;

        this.#saldo += valor;
        return this.#saldo;
    }

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);

        return valorSacado;
    }

    constructor(saldoInicial, cliente, agencia) {
        if (new.target === Conta) {
            throw new Error('Você não deveria instanciar um objeto do tipo Conta diretamente, pois essa é uma classe abstrata.');
        }

        this.#saldo = saldoInicial;
        this.#agencia = agencia;
        this.cliente = cliente;
    }
}