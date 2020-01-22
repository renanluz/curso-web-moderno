// Função em JS é First-Class ou Object (Citizens)
// Higher-Order function

// Criar de forma literal
function fun1() {}

// Armazenar em um variável
const fun2 = function() { }

// Armazenar em um array
const array = [function (a, b) { return a + b}, fun1, fun2]
console.log(array[0](2, 3))

// Armazenar em um atributo de objeto
const obj = {}
obj.falar = function() { return 'Opa!' }
console.log(obj.falar())

// Passar função como paramêtro
function run (fun) {
  fun()
}

run(function() { console.log('Executando...')})

// Uma função pode retornar/conter uma outra função

function soma(a, b) {
  return function (c) {
    console.log(a + b + c)
  }
}

soma(2, 3)(4) // Primeira forma de invocação 

const cincoMais = soma(2, 3) // Segunda forma de invocação
cincoMais(4)