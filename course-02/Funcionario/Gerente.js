import { Funcionario } from './Funcionario.js';

export class Gerente extends Funcionario {

    constructor(cpf, nome, salario) {
        super(cpf, nome, salario, 0.10);
    }
}