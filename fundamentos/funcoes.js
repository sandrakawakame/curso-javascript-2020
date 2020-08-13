//Armazenando uma função em uma variavel
const imprimirSoma = function (a,b){
    console.log(a + b)
}
imprimirSoma(2, 3)


//Armazenando uma função Arrow em uma variável
// a seta => é a palavra function
const soma = (a,b) => {
    return a + b
}
console.log(soma(2, 3))

//função com retorno implicito. Tem o retorno sem precisar escrever a palavra return
//para funções que tem apenas uma linha de execução ele retorna o valor sem precisar do bloco e do return
const subtracao = (a, b) => a - b;
console.log(subtracao(2 , 3))

const imprimir2 = a => console.log(a)
imprimir2('Coooll!!')

//=======================================================

const saudacao = 'Opa!'

function exec(){
    const saudacao = 'Falaaa galera!'
    return saudacao
}

const cliente = {
    nome: 'Pedro',
    idade: 33,
    peso: 50,
    endereco: {
        logradouro: 'Rua Br normal',
        numero: 123
    }
}

//chamdas
console.log(saudacao)
console.log(exec())
console.log(cliente)
