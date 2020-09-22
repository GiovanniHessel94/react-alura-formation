import { Cliente } from './Cliente.js'
import { ContaCorrente } from './ContaCorrente.js'
import { ContaPoupanca } from './ContaPoupanca.js'

const clienteRicardo = new Cliente('Ricardo', 56141409059);

const contaCorrenteRicardo = new ContaCorrente(clienteRicardo, 1001);
contaCorrenteRicardo.depositar(500);
contaCorrenteRicardo.sacar(100);

const contaPoupanca = new ContaPoupanca(100, clienteRicardo, 1001);
contaPoupanca.sacar(10);

console.log(contaCorrenteRicardo.cliente, contaCorrenteRicardo.saldo, contaCorrenteRicardo.agencia);
console.log(contaPoupanca.cliente, contaPoupanca.saldo, contaPoupanca.agencia);