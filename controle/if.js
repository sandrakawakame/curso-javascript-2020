function somenteAprovados(nota){
    if (nota >= 7){
        console.log('Aprovado com a nota: ' + nota)
    }
}
somenteAprovados(8.1)
somenteAprovados(6.4) // não imprime por estar abaixo da media

function seForVerdadeEuFalo(valor){
    if(valor){
        console.log('É verdade ... ' + valor)
    }
}

seForVerdadeEuFalo()
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo('')
seForVerdadeEuFalo(0)
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo(' ')
seForVerdadeEuFalo('?')
seForVerdadeEuFalo([])
seForVerdadeEuFalo([1,2])
seForVerdadeEuFalo({})
