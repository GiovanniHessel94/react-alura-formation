const confirmaEDeletaCliente = (id) => {
    if(confirm('Deseja realmente excluir o cliente?')){
        deletaCliente(id).then(value => {
            alert('Cliente excluido com sucesso');
            document.location.reload();
        });
    }
}

const corpoTabela = document.querySelector("[data-conteudo-tabela]");

const exibeClientes = (id, cpf, nome) => {
    const linha = document.createElement('tr');
    const conteudoLinha = `
    <td>${cpf}</td>
    <td>${nome}</td>
    <button type="button" class="btn btn-danger" onclick=confirmaEDeletaCliente(${id})>Excluir</button>
    <a href="edita-clientes.html?id=${id}"><button type="Button" class="btn btn-info">Editar</button></a>`;

    linha.innerHTML = conteudoLinha;

    return linha;
}

listarClientes().then(clientesJson => {
    clientesJson.forEach(cliente => {
        corpoTabela.appendChild(exibeClientes(cliente.id, cliente.cpf, cliente.nome));
    });
})