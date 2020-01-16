// Novo recurso do ES2015

const pessoa = {
  nome: 'Ana',
  idade: 5,
  endereco: {
    logradouro: 'Rua ABC',
    numero: 1000
  }
}


// Tira o nome e a idade do objeto pessoa e armazena em duas novas variáveis
const { nome, idade } = pessoa
console.log(nome, idade)

const { nome: n, idade: i } = pessoa
console.log(n, i)

const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada)

const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep)

// Quando quiser acessar um dado que está dentro de uma estrutura aninhada, 
// tenha certeza de que o caminho até o dado está de fato setado.
//const { conta: { ag, num }} = pessoa
//console.log(ag, num)
