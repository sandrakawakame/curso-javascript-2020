//quando trabalha com funções normais pode:
// 1 - nomear funçõe
// 2 - criar uma função anonima e passar para ser executada por outra função
// 3 - Pode armazenar uma função anonima dentro de uma variável

const soma = function (x, y) {
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}

imprimirResultado(3, 4)
imprimirResultado(3, 4, soma)
imprimirResultado(3, 4, function (x, y) {//executa a função desse parametro
    return x - y
})
imprimirResultado(3, 4, (x, y) => x * y)//passando por parametro uma arrow function

const pessoa = {
    falar: function(){//criando uma função dentro de objeto
        console.log('Opa')
    }
}
pessoa.falar()