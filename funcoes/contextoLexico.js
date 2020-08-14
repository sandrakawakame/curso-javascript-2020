// Contexto lexico : Contexo a qual as coisas foram declaradas dentro da linguagem

// Isso faz diferença quando está trbalhando com arrow functions e tbm quando se trabalha com funções de modo geral

const valor = 'Global'

function minhaFuncao() {
    console.log(valor)
}

function exec() {
    const valor = 'Local'
    minhaFuncao()
}

exec()