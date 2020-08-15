class Desafio {
    constructor(desafio) {
        this.desafio = desafio;
    }
    executar() {
        console.log(`O desafio executado é ${this.desafio}`)
    }
}
const des = new Desafio('Criar classe')
des.executar()


//função construtora
function Desafio1(desafio) {
    this.desafio = desafio;

    this.executar = function () {
        console.log(`O desafio executado é ${this.desafio}`)
    }
}
const des1 = new Desafio1('Criar classe construtora')
des1.executar()