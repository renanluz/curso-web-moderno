const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'

const template = `
  Olá 
  ${nome}!`

console.log(concatenacao, template)


// O que estiver dentro ${} vai ser interpolado ou interpretado
console.log(`1 + 1 = ${1+1}`)

const up = texto => texto.toUpperCase()

console.log(`Ei... ${up('cuidado')}!`)