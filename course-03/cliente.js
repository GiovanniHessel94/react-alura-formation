const informacoesClientes = [
    {
        cpf: '00765343088',
        nome: "Ronaldo"
    },
    {
        cpf: '17118026034',
        nome: "Patricia"
    },
    {
        cpf: '18875539081',
        nome: "Elena"
    }
]

const corpoTabela = document.querySelector("[data-conteudo-tabela]");

const exibeClientes = (cpf, nome) => {
    const linha = document.createElement('tr');
    const conteudoLinha = `
    <td>${cpf}</td>
    <td>${nome}</td>`;

    linha.innerHTML = conteudoLinha;

    return linha;
}

informacoesClientes.forEach(cliente => {
    corpoTabela.appendChild(exibeClientes(cliente.cpf, cliente.nome));
})