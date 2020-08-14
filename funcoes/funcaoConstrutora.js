//função construtora
function Carro(velocidadeMaxima = 200, delta = 5) {
    //atributo privado (pertence a somente o scopo dessa função)
    let velocidadeAtual = 0

    //metodo publico
    //a palavra reservada THIS deixa o metodo publico
    this.acelerar = function () { //função responsável por acrescentar a velocidade
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    //metodo publico
    //função que retorna o valor da variavel velocidade atual para que o usuario não tenha acesso direto a valocidade atual e alterar o seu valor
    this.getVelocodadeAtual = function () {
        return velocidadeAtual
    }
}

//Duas chamadas de um mesmo objeto 
const uno = new Carro
uno.acelerar()
console.log(uno.getVelocodadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocodadeAtual())

console.log(typeof Carro)
console.log(typeof ferrari)