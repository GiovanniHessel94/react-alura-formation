import { Cliente } from './Cliente.js';
import { SistemaAutenticacao } from './SistemaAutenticacao.js';
import { Gerente } from './Funcionario/Gerente.js';
import { Diretor } from './Funcionario/Diretor.js';

const gerente = new Gerente(12345678910, 'Marcelo', 5000);
gerente.cadastrarSenha('123');

const diretor = new Diretor(54321678910, 'Bosscelo', 10000);
diretor.cadastrarSenha('123456');

const cliente = new Cliente('Zézim', 98745632100, 'zémonstrão')

const gerenteEstaLogado = SistemaAutenticacao.login(gerente, '123');
const diretorEstaLogado = SistemaAutenticacao.login(diretor, '123456');
const clienteEstaLogado = SistemaAutenticacao.login(cliente, 'zémonstrão');

console.log(gerenteEstaLogado, diretorEstaLogado, clienteEstaLogado);