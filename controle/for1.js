let contador = 1

while (contador <= 10) {
    console.log(`Contador : ${contador}`)   
    contador++
}


for(let i = 1; i<=10; i++){
    console.log(`Contador i: ${i}`)
}

//percorrendo o array com for
const notas = [6.7,7.8,5.1,4.2,3,1.8,8.6,2.4,6,9,7]
for (let i = 0; i < notas.length;i++){
    console.log(`Notas: ${notas[i]}`)
}

//FOR IN
//retorna o indice e tambem o valor
const notas1 = [6.8, 7.5, 9.8, 1.8, 4.3]
for(let i in notas1){
    console.log(i, notas1[i])
}

//percorrendo um objeto
const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 25,
    Peso: 50.4,
}
for(let atributo in pessoa){
    console.log(`${atributo} : ${pessoa[atributo]} `)
}
