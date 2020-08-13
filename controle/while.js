function getInteiroAleatorioEntre(min, max) {
    //randon gera um valor entre 0 e 1 e multiplicando pelo valor max e min vai gerar um valor maior de numeros dentro desse intervalo . Se der 0 vai dar o valor de min pois soma 0 + min
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor)
}

let opcao = 0

while (opcao != -1){
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`O valor gerado: ${opcao}`)
}