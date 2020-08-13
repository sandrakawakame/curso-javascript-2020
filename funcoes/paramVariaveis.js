//Arguments: array interno que quando nenhum parametro é passado o array está vazio
// se na chamada de uma função passar vários parametros independente do tipo, o array arguments vai executar a operação

function soma() {
    let soma = 0
    for (i in arguments) {
        soma += arguments[i]
    }
    return soma
}

//executando
console.log(soma())
console.log(soma(1))
console.log(soma(1.1, 2.3, 4.5))

console.log(soma('a', 'b', 'c'))
console.log(soma(1, 5, 'c'))
