let comparaComThis = function (param) {
  console.log(this === param) // Nesse caso, This está apontando para o escopo global
}

comparaComThis(global)

const obj = {}

// Nesse caso o bind, basicamente aplica um dado this à função que a está chamando
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

// O This de uma função arrow é associado ao contexto do qual a função foi escrita
let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)

comparaComThisArrow = comparaComThisArrow.bind(obj)// Ele não muda de contexto mesmo que utilizemos o bind
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)