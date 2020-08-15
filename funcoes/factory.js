// Função factory : é uma função que sempre retorna um objeto
function criarProduto(nome, preco, desconto = 0.1) {

    return {
        nome,
        preco,
        desconto: desconto * preco
    }
}

console.log(criarProduto('Notebook', 2199)) //sempre que chamar essa função vai criar uma nova pessoa
console.log(criarProduto('iPad', 5000))
console.log(criarProduto('Celular', 2900))