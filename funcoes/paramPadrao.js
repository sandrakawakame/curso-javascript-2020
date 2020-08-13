//Estrategia 1 para gerar valor padrão
console.log('Estrategia 1')
function soma1(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}
console.log(soma1(), soma1(3), soma1(1, 2, 3))
console.log(soma1(0, 0, 0)) // não funciona porque o valor zero vai retornar true/false então os valores vão assumir o valor 1


//Estrategia 2 para gerar valor padrão caso o valor do parametro não for informado
console.log('Estrategia 2')
function soma2(a, b, c) {
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1 // o segundo argumento (b) foi passado? Existe um indice 1? Se existe pega o valor de B senão pegue 1
    c = isNaN(c) ? 1 : c
    return a + b + c
}
console.log(soma2(), soma2(3), soma2(2, 3), soma2(1, 2, 5))
console.log(soma2(0, 0, 0)) // agr retorna o valor 0 corretamente


//Valor padrão do Ecma2015
console.log('Padrão ECMA 2015')
function soma3(a = 1, b = 1, c = 1) {
    return a + b + c
}
console.log(soma3(), soma3(3), soma3(1, 2, 3))
console.log(soma3(0, 0, 0))