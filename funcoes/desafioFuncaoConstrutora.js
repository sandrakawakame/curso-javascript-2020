class Desafio{
    constructor (desafio){
        this.desafio = desafio;
    }
    executar(){
        console.log(`O desafio executado é ${this.desafio}`)
    }
}
const des1 = new Desafio('Criar classe')
des1.executar()


const desafio2 = desafio => {
    return{
        executar : ()=> console.log(`Desafio é: ${desafio}`)
    }
}
const n2 = desafio2('Criando uma função construtora')
n2.executar()