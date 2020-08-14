function SigaSeuSonho (meta = 10, passo = 5){
    let objetivo = 0

    this.caminhar = function(){
        if(objetivo + passo <= meta){
            objetivo += passo
            console.log('Continue caminhando')
        }else {
            objetivo = meta
            console.log('Você atingiu seu objetivo, mas não pare de sonhar!')
        }
    }

    this.getObjetivoAtual = function(){
        return objetivo
    }
}

const sonho = new SigaSeuSonho
sonho.caminhar()
sonho.caminhar()
sonho.caminhar()
console.log(sonho.getObjetivoAtual())
