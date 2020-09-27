const pageURL = new URL(window.location);

const id = pageURL.searchParams.get('id');

const inputCPF = document.querySelector('[data-cpf]');
const inputNome = document.querySelector('[data-nome]');


detalhaCliente(id).then(clientesJson => {
    inputCPF.value = clientesJson[0].cpf;
    inputNome.value = clientesJson[0].nome;
});

const formularioEdicao = document.querySelector('[data-form]');

formularioEdicao.addEventListener('submit', event => {
    event.preventDefault();

    if(!validaCPF(inputCPF.value)){
        alert('Não é permitido alterar o CPF.');
        return
    }

    editarCliente(id, inputCPF.value, inputNome.value).then(value => {
        alert('Cliente alterado com sucesso.');
    });
});