import { Cliente } from './Cliente.js'

export class ContaCorrente {
    static numeroDeContas = 0;
    #saldo;
    #cliente;

    set cliente(valor) {
        if (!(valor instanceof Cliente)) return null

        this.#cliente = valor;
    }

    get cliente() {
        return this.#cliente;
    }

    get saldo() {
        return this.#saldo;
    }

    sacar(valor) {
        if (this.#saldo < valor) return 0;

        this.#saldo -= valor;
        return valor;
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

    constructor(agencia, cliente) {
        this.agencia = agencia;
        this.#cliente = cliente;
        this.#saldo = 0;

        ContaCorrente.numeroDeContas++;
    }
}