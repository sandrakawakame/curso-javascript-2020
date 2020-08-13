const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

//mostrando apenas 2 casas decimais
console.log(media.toFixed(2))

//transformar um numero em valor binário
console.log(media.toString(2))

//mostrando o tipo da variavel
console.log(typeof media)
console.log(typeof Number)