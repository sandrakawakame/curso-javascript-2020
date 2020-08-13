const escola = "Cod3r"

console.log(escola.charAt(4))
console.log(escola.charAt(5)) // não da erro, retorna um valor vazio
console.log(escola.charCodeAt(3)) // pega o valor do indice 3 da tabela asc
console.log(escola.indexOf('4')) //traz o indice da posição 4
console.log(escola.substring(1)) // traz as strings a partir do indice 1
console.log(escola.substring(0 ,3))
console.log('Escola '.concat(escola).concat("!"))
//concatenar string pode usar o + também
console.log('Escola ' + escola + ' !')

//altera o valor da string
console.log(escola.replace(3, 'e'))

//quebrar uma string separando os valores por ;
console.log('Ana,Maria,Pedro'.split(';'))