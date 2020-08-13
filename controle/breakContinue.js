const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//break: interrompe o laço e vai para a próxima sentença fora do laço corrente
console.log('Break')
for(x in nums){
    if(x == 5) {
        break 
        // break age somente no bloco if/while/switch
        //esta dentro de if mas não age sobre o if e sim no bloco mais proximo que é o for
    }
    console.log(`${x} =  ${nums[x]}`)
}

//continue: interrompe a repetição atual e vai para a proxima repetição dentro do proprio laço
console.log('Continue')
for(y in nums){
    if(y == 5){
        continue
    }
    console.log(`${y} : ${nums[y]}`)
}

//pouco usado, prefira criar funções
//para mais de um for é necessário criar um rotulo para chamar o for que queira usar
externo: for(a in nums){
    for (b in nums){
        if ( a == 2 && b == 3)
            break externo // o break agira sobre o for externo
            console.log(`Par = ${a}, ${b}`)
    }
}
console.log('Fim')