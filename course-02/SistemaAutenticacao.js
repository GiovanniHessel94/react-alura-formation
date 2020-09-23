import { Funcionario } from './Funcionario/Funcionario.js';

export class SistemaAutenticacao {
    static login(usuario, senha) {
        if (!(usuario.autenticar instanceof Function)) throw Error('Este usuário não possuí o método autenticar.');

        return usuario.autenticar(senha);
    }
}