import { Cliente } from './Cliente.js'
import { ContaCorrente } from './ContaCorrente.js'

const clienteRicardo = new Cliente('Ricardo', 56141409059);
const clienteAlice = new Cliente('Alice', 41358946233);

const contaCorrenteRicardo = new ContaCorrente(1001, clienteRicardo);
contaCorrenteRicardo.depositar(50);

const contaCorrenteAlice = new ContaCorrente(1010, clienteAlice);
contaCorrenteRicardo.transferir(20, contaCorrenteAlice);

console.log('Cliente: ', contaCorrenteRicardo.cliente.nome);
console.log('Saldo R$ ', contaCorrenteRicardo.saldo);
console.log(contaCorrenteRicardo.cliente);
console.log(contaCorrenteRicardo, '\n');

console.log('Cliente: ', contaCorrenteAlice.cliente.nome);
console.log('Saldo R$ ', contaCorrenteAlice.saldo);
console.log(contaCorrenteAlice.cliente);
console.log(contaCorrenteAlice, '\n');

console.log(ContaCorrente.numeroDeContas);