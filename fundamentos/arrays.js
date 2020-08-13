const valores = [7.7, 8.9, 7.5, 8.6]
console.log(valores[0], valores[3])
console.log(valores[4]) // retorna undefined porque não existe o indice 4

console.log(valores.length)

//insere valores com push
valores.push({id:3}, false, null, 'teste')
console.log(valores)

//remove o ultimo valor do array
console.log(valores.pop())
console.log(valores)

delete valores[0]
console.log(valores)

console.log(typeof valores)