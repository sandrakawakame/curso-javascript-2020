//this pode variar da forma como é chamada

const pessoa = {
    saudacao: 'Olá!! Bom dia',
    falar() {
        console.log(this.saudacao)
    }
}
pessoa.falar()
const falar = pessoa.falar //guardando a função dentro da variavel
falar() //da inconscistencia e da o valor undefined

//para corrigir a inconsistencia usa o bind. Passando o argumento pessoa por paramentro sempre o this será resolvido para pessoa
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()


console.log("Exemplos extras")
const animal = {
    latindo: "au au",
    latir() {
        console.log(this.latindo)
    }
}
const automovel = {
    cor: "Amarele",
    ano: 2018,
    carro() {
        console.log(`Ano: ${this.ano} cor: ${this.cor}`)
    }
}
animal.latir()
automovel.carro()