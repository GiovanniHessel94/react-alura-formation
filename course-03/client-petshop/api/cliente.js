const listarClientes = () => {
    return fetch('http://localhost:4000/clientes')
        .then(resposta => {
            return resposta.json()
        })
        .then(clientesJson => {
            return clientesJson;
        });
};

const cadastrarClientes = (cpf, nome) => {
    const clienteJson = JSON.stringify({
        nome: nome,
        cpf: cpf
    })
    return fetch('http://localhost:4000/clientes/cliente', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: clienteJson
    }).then(resposta => {
        console.log(resposta.status);
        return resposta.json();
    });
}

const deletaCliente = (id) => {
    return fetch(`http://localhost:4000/clientes/cliente/${id}`, {
        method: 'DELETE',
    }).then(resposta => {
        console.log(resposta.status);
        return resposta.json();
    });
}