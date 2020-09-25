const corpoTabela = document.querySelector("[data-conteudo-tabela]");

const exibeClientes = (cpf, nome) => {
    const linha = document.createElement('tr');
    const conteudoLinha = `
    <td>${cpf}</td>
    <td>${nome}</td>`;

    linha.innerHTML = conteudoLinha;

    return linha;
}

listarClientes().then(clientesJson => {
    clientesJson.forEach(cliente => {
        corpoTabela.appendChild(exibeClientes(cliente.cpf, cliente.nome));
    });
})