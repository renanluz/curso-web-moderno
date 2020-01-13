const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])

// caso você tente acessar uma posição que não exista, o retorno será undefined
console.log(valores[4])

// você pode atribuir novos valores a qualquer momento
valores[4] = 10 
console.log(valores)

// length exibe o tamanho do array
console.log(valores.length)

// push adiciona novos valores ao array
valores.push({id: 3}, false, null, 'teste') // você pode adicionar vários tipos de dados 
console.log(valores)


// pop retira o último valor do array
console.log(valores.pop())

// delete também elimina o valor do array de acordo com o índice que você informar
delete valores[0]
console.log(valores)

console.log(typeof valores)

/**
 * Arrays são objetos semelhantes a listas que vêm com uma série de  métodos embutidos para realizar operações de travessia e mutação. 
 * Nem o tamanho de um array JavaScript nem os tipos de elementos são fixos.
 */