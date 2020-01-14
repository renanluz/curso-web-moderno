// Par nome/valor

const saudacao = 'Olá' // Contexto léxico 1

function exec() {
  const saudacao = 'Falaaaa' // Contexto léxico 2
  return saudacao
}

/**
 * Um objeto é uma coleção de propriedades, e uma propriedade é uma associação entre um nome (ou chave) e um valor. 
 * Um valor de propriedade pode ser uma função, que é então considerada um método do objeto. 
 */

 // Objetos são grupos aninhados de pares nome/valor

 const cliente = {
   nome: 'Pedro',
   idade: 32,
   peso: 90,
   endereco: {
     logradouro: 'Rua Muito Legal',
     numero: 123
   }
 }

 console.log(saudacao)
 console.log(exec())
 console.log(cliente)