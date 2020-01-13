/**
 * A linguagem JavaScript é projetada com base em um simples paradigma orientado a objeto. 
 * Um objeto é uma coleção de propriedades, e uma propriedade é uma associação entre um nome (ou chave) e um valor. 
 * Um valor de propriedade pode ser uma função, que é então considerada um método do objeto.
 */

 /**
  * Objetos em JavaScript, assim como em muitas outras linguagens de programação, podem ser comparados com objetos na vida real. 
  * Em JavaScript, um objeto é uma entidade independente, com propriedades e tipos.
  * Uma xícara, por exemplo. 
  * Uma xícara é um objeto, com propriedades. 
  * Uma xícara tem uma cor, uma forma, peso, um material de composição, etc. 
  * Da mesma forma, objetos em JavaScript podem ter propriedades, que definem suas características.
  */

const prod1 = {}
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40 // evitar atributos com espaço

console.log(prod1)

const prod2 = {
  nome: 'Camisa Polo',
  preco: 79.90
}

console.log(prod2)