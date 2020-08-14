/*Pontos positivos da Arrow Function
 * 1 - forma reduzida de escreve a function
 * 2 - Tem um this associado ao contexto a qual a função foi escrita
 * 3 - A função arrow sempre é uma função anonima, se quiser chamar ela depois, precisa armazenar dentro de uma variável ou constante
 */

//função normal
console.log('Exemplo 1')
let dobro = function (a) {
    return 2 * a
}
//função arrow
dobro = (a) => {
    return 2 * a
}
//função arrow mais reduzida (esse caso é usado para funções de uma única linha)
dobro = a => 2 * a //o return está implicito
console.log(dobro(Math.PI))



console.log('Exemplo 2')
//função normal
let ola = function () {
    return 'Ola!'
}
//arrow function
ola = () => 'Ola'
ola = _ => 'Ola' //função que não precisa de parametro pode usar o _
console.log(ola())