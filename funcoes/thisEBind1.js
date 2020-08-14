//outra forma de acessar o this
//criando uma constante e apartir desta constante acessar o valor do this desejado

console.log("Opção 1: armazenando o this em uma constante")
function Pessoa() {
    this.idade = 0
    const self = this

    setInterval(function () { //setInterval: metodo tenporizador chama a função a cada 1000 milesegundos
        self.idade++
        console.log(self.idade)
    }, 1000)
}
new Pessoa


console.log("Opção 2: usando o BIND para referenciar o this")
function Animal() {
    this.idade = 0

    setInterval(function () {
        this.idade++
        console.log(this.idade)
    }.bind(this), 1000)
}
new Animal