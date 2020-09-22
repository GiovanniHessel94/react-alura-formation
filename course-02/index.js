import { Cliente } from './Cliente.js'
import { ContaCorrente } from './ContaCorrente.js'
import { ContaPoupanca } from './ContaPoupanca.js'
import { ContaSalario } from './ContaSalario.js'

const clienteRicardo = new Cliente('Ricardo', 56141409059);

const contaCorrente = new ContaCorrente(clienteRicardo, 1001);
contaCorrente.depositar(500);
contaCorrente.sacar(100);

const contaPoupanca = new ContaPoupanca(500, clienteRicardo, 1001);
contaPoupanca.sacar(100);

const contaSalario = new ContaSalario(clienteRicardo);
contaSalario.depositar(500);
contaSalario.sacar(100);

console.log(contaCorrente.cliente, contaCorrente.saldo, contaCorrente.agencia);
console.log(contaPoupanca.cliente, contaPoupanca.saldo, contaPoupanca.agencia);
console.log(contaSalario.cliente, contaSalario.saldo, contaSalario.agencia);