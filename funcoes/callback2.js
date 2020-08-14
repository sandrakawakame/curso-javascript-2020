//Callback com a função Filter
//gerar um novo array com notas menor que 7

const notas = [4.7, 5.8, 9.9, 7.8, 5.5, 6, 9.8]


//Exemplo 1
console.log("Sem usar callback")
const notasBaixas1 = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas1.push(notas[i])
    }
}
console.log(notasBaixas1)

//Exemplo 2
console.log("Usando Callback")
const notasBaixas2 = notas.filter(function (nota) {
    return nota < 7
})//retorna valor boolean true/false
console.log(notasBaixas2)

//Exemplo 3
console.log("Usando callback na Arrow Function")
const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3)

//Exemplo 4
console.log("Atribuindo a função em uma constante para usar em outros locais")
const notasMenorQue7 = nota => nota < 7
const notasBaixas4 = notas.filter(notasMenorQue7)
console.log(notasBaixas4)