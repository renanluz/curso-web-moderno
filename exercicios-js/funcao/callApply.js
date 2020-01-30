function getPreco(imposto = 0, moeda = 'R$') {
  return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
  nome: 'Notebook',
  preco: 4589,
  desc: 0.15,
  getPreco
}

global.preco = 20
global.desc = 0.1
console.log(getPreco)
console.log(produto.getPreco()) //Chamando a função a partir do objeto

const carro = { preco: 49990, desc: 0.20 }

console.log(getPreco.call(carro)) //Chamando a função a partir do Call
console.log(getPreco.apply(carro)) //Chamando a função a partir do Apply

console.log(getPreco.call(carro, 0.17, 'U$'))
console.log(getPreco.apply(carro, [0.17, 'R$'])) // Os parametros precisam estar dentro de um array [] 