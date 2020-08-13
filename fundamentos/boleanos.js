//caso o valor da variavel não seja válido, use o valor Desconhecido como padrão
let nome = ''
console.log(nome || 'Desconhecido') // se a variavel estiver vazia print Desconhecido
let nome2 = 'Sandra'
console.log(nome2 || 'Desconhecido')


let isAtivo = false;
console.log(isAtivo)
isAtivo = true;
console.log(!!isAtivo)
isAtivo = 1
console.log(!!isAtivo) //força a trazer um valor booleano


console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ') // espaço
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo =  true))


console.log('os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))
