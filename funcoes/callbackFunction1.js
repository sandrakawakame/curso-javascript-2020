//Ideia do callback: passar uma função para outra função e quando determinado evento acontecer a função vai ser chamada de volta

//a função callback pode ser chamada 1 ou várias vezes, dependendo do contexto
//nesse cenário o evento foi o looping e quando encontra um novo elemento chama novamente
const fabricante = ['Mercedes', 'Aud', 'BMW']

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}


//exemplo 1 de chamada
console.log('exemplo chamada 1')
fabricante.forEach(imprimir)//foreach para percorrer o array

//exemplo 2 de chamada
console.log('exemplo chamada 2')
fabricante.forEach(function (fabricante) {
    console.log(fabricante)
})
console.log('exemplo chamada 3')
//transformando a função acima em arrow function
fabricante.forEach(fabricante => console.log(fabricante))


