//chaves é objeto
//colchetes é array
const prod1 = {}
//definindo os valores do objeto dinamicamente
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4999.90
console.log(prod1)

const prod2 = {
    nome : 'Camisa Polo',
    preco: 70.90,
    obj:{ //posso ter outro objeto dentro de outro objeto
        valor: 1,
        obj:{//posso ter outro objeto
            valor2: 2,
        }
    }
}
console.log(prod2)

//transformando essa expressão em json
//site para validar o json https://jsonlint.com/
'{ "nome": "Camisa Polo", "preco": 79.90}'