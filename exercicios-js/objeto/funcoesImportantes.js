const pessoa = {
  nome: 'Rebeca',
  idade: 2,
  peso: 13
}

console.log(Object.keys(pessoa)) // Retorna os atributos do objeto
console.log(Object.values(pessoa)) // Retorna valores dos atributos do objeto
console.log(Object.entries(pessoa)) // Retorna um array com vários arrays dentro, contendo os atributos e valores do objeto

Object.entries(pessoa).forEach(([chave, valor]) => {
  console.log(`${chave}: ${valor}`)
});

Object.defineProperty(pessoa, 'dataNascimento', {
  enumerable: true, // Seta se o atributo aparecerá ou não no objeto
  writable: false, // Bloqueia a escrita de novos conteúdos
  value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017' // Não vai ser possível a alteração pois a propriedade está bloqueada
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// Object.assign (ECMAScript 2015)
const dest = { a: 1 }  
const o1 = { b: 2 }
const o2 = { c: 3,  a: 4 }

const obj = Object.assign(dest, o1, o2)

Object.freeze(obj)
obj.c = 1234
console.log(obj) 