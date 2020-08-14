// cuidado ao usar o this dentro de uma função comum porque está mexendo no escopo global
console.log("Função normal")
let comparaComThis = function (param) {
    console.log(this === param)
}
comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global) //this deixa de ser global por causa do bind


console.log("Arrow Function")
let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)//não aponta para o global
comparaComThisArrow(module.exports) //é um module.exports

console.log("Bind não consegue mudar o apontamento do this para o obj")
comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)
comparaComThisArrow(module.exports) // continua apontando para module.exports
