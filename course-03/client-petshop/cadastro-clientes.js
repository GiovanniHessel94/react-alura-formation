const formularioCadastro = document.querySelector('[data-form]');

formularioCadastro.addEventListener('submit', event => {
    event.preventDefault();

    const nome = event.target.querySelector('[data-nome]');
    const cpf = event.target.querySelector('[data-cpf]');

    if (validaCPF(cpf.value)) {
        cadastrarClientes(cpf.value, nome.value).then(value => {
            alert('Cliente cadastrado com sucesso.');
        });
    } else {
        alert('O CPF não é valido.')
    }
});