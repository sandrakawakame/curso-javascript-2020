const nome = 'Rebeca'

//concatenação pelo método comum
const concatenacao = 'Olá' + nome + '!'

//concatenação por template
const template = `
    Olá
    ${nome} !`
console.log(concatenacao, template)

//expressões
console.log(`1 + 1 = ${1 + 1}`)

//transformar em upcase
const up = texto => texto.toUpperCase()
console.log(`Ei ... ${up('cuidado')} !`)