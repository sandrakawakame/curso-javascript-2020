//class
class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}
const p1 = new Pessoa('Joao')
p1.falar()


//função Factory
//essa função é mais indicada para esse contexto
//porque ao chamar essa função pelo codigo abaixo essa fução identifaca a variavel criada dentro desse contexto e retorna o nome, na class acima não consegue acessar a variavel e o nome fica undefined
//document.getElementByTagName('body)[0].onclick = p2.falar
const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}
const p2 = criarPessoa('Maria')
p2.falar()