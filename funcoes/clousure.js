//Clousure é o escopo que envolve a função quando é declarada
//Esse scopo permite a função acessar e manipular variaveis externas à função

//Contexto lexico em ação

const x = 'Global'

function fora(){
    const x = 'Local'
    function dentro(){
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())