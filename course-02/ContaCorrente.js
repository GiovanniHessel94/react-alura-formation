import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {
    static numeroDeContas = 0;

    constructor(cliente, agencia) {
        super(0, cliente, agencia);

        ContaCorrente.numeroDeContas++;
    }

    sacar(valor) {
        return super.sacar(valor, 0.1);
    }
}