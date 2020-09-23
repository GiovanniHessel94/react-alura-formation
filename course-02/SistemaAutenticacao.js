import { Funcionario } from './Funcionario/Funcionario.js';

export class SistemaAutenticacao {
    static login(usuario, senha) {
        if (typeof usuario.autenticar === "undefined") throw Error('Este usuário não possuí o método para checar a senha.');

        return usuario.autenticar(senha);
    }
}