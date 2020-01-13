let valor // não inicializada
console.log(valor)
//console.log(valor2) //não definida

valor = null // ausência de valor
console.log(valor)

//console.log(valor.toString()) 
// Erro! Você não pode acessar a propriedade de uma variável nula

const produto = {}
console.log(produto)
console.log(produto.preco)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco)
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)
