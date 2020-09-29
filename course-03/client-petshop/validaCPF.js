const cpfInvalidos = [
    '11111111111',
    '22222222222',
    '33333333333',
    '44444444444',
    '55555555555',
    '66666666666',
    '77777777777',
    '88888888888',
    '99999999999',
    '00000000000'
]


function validaCPF(cpf) {
    if (cpfInvalidos.indexOf(cpf) !== -1) {
        return false;
    }

    return verificaPrimeiroDigito(cpf) && verificaSegundopDigito(cpf);
}

function somaNumerosCPF(cpf, totalDeDigitos, peso) {
    let soma = 0;
    for (let indice = 1; indice <= totalDeDigitos; indice++) {
        soma += parseInt(cpf.substring(indice - 1, indice)) * (peso - indice);
    }
    return soma;
}

function verificaDigito(cpf, totalDeDigitos, peso, digito) {
    const soma = somaNumerosCPF(cpf, totalDeDigitos, peso);
    const resto = (soma * 10) % 11;
    return resto === digito;
}

function verificaPrimeiroDigito(cpf) {
    const peso = 11
    const totalDeDigitos = 9
    const digito = parseInt(cpf.substring(9, 10));

    return verificaDigito(cpf, totalDeDigitos, peso, digito);
}

function verificaSegundopDigito(cpf) {
    const peso = 12
    const totalDeDigitos = 10
    const digito = parseInt(cpf.substring(10, 11));

    return verificaDigito(cpf, totalDeDigitos, peso, digito);
}