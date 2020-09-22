export class Conta {
    #saldo;
    #cliente;
    #agencia;

    get saldo() {
        return this.#saldo;
    }

    get cliente() {
        return this.#cliente;
    }

    get agencia() {
        return this.#agencia;
    }

    sacar(valor) {
        if (this.#saldo < valor) return 0;

        taxa = 0.1 * valor;
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

    constructor(saldoInicial, cliente, agencia) {
        this.#saldo = saldoInicial;
        this.#cliente = cliente;
        this.#agencia = agencia;
    }
}