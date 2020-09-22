import { Cliente } from './Cliente.js'
import { ContaCorrente } from './ContaCorrente.js'
import { ContaPoupanca } from './ContaPoupanca.js'
import { Conta } from './Conta.js'

const clienteRicardo = new Cliente('Ricardo', 56141409059);

const contaCorrenteRicardo = new Conta(0, clienteRicardo, 1001);
contaCorrenteRicardo.depositar(50);

console.log('Cliente: ', contaCorrenteRicardo.cliente.nome);
console.log('Saldo R$ ', contaCorrenteRicardo.saldo);
console.log(contaCorrenteRicardo.cliente);
console.log(contaCorrenteRicardo, '\n');

const contaPoupanca = new Conta(100, clienteRicardo, 1001);

console.log(contaPoupanca.saldo);