import { Funcionario } from './Funcionario.js';

export class Diretor extends Funcionario {

    constructor(cpf, nome, salario) {
        super(cpf, nome, salario, 1.00);
    }
}