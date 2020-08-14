//function declaration : esse tipo de declaração permite chamar antes da função. Isso pq o interpretados do JS carrega todas as funções do arquivo e depois começa a executar o código
console.log(3, 4)
function soma(x, y) {
    return x + y
}


//function expression
const sub = function (x, y) {
    return x - y
}
console.log(sub(3, 4))

//named function expression
const mult = function mult(x, y) {
    return x * y
}
console.log(mult(3, 4))

