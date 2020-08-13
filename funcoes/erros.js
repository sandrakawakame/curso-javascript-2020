function tratarErro(erro){
   // throw new Error ('...') //pode passar somente string para identificar erro
   // throw 10 // pode passar só um numero
    // throw true // mostrar um valor boleano
    // throw 'mensagem' // só uma mensagem
    throw{ // ou pode passar um objeto
        nome: erro.name,
        mdg: erro.mensagem,
        date: new Date // data que gerou o erro
    }
}

function imprimirUperCase(obj){
    try {
        console.log(obj.name.toUpperCase()+ '!!!')
    }catch (e){
        tratarErro(e)
    }finally{ //mesmo que ocorra erro ou não, vai chamar esse bloco
        console.log('final')
    }
}

const obj = { nme: 'Roberto'}
imprimirUperCase(obj)