// O this na Arrow Function não varia o valor do this
// em funções normais é necessário usar o Bind ou atribuir o this a uma constante, usando o Arrow o this aponta para a função Pessoa porque foi criada dentro da Função Pessoa
function Pessoa() {
    this.idade = 0

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}
new Pessoa()