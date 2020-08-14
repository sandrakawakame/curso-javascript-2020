//criar de forma literal
function fun1() {
}

// guardando uma função anonima em uma variavel
const fun2 = function () { }

//armazenar uma função dentro de um array
const array = [function (a, b) { return a + b }, fun1, fun2]
console.log(array[0](2, 5))

//armazenar função dentro de um atributo de objeto
const obj = {}
obj.falar = function () { return 'Opa!' }
console.log(obj.falar())

//executando uma função dentro de outra função, passando a função como parametro
function run(fun) {
    fun()
}
run(function () { console.log('Executando ...') })

//Uma função pode retornar/conter uma função
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}
//chamda da função
soma(2, 3)(4)
//ou pode ser chamada
const resultado1 = soma(4, 3)
resultado1(4)