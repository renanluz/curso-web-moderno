const soma = function (x,y) {
  return x + y
}

const imprimirResultado = function (a, b, operacao = soma) {
  console.log(operacao(a,b))
}

imprimirResultado(3, 4) // Utilizou o terceiro paramêtro padrão (soma)
imprimirResultado(3, 4, soma) // O resultado é o mesmo se passar o paramêtro
// Foi passada uma nova função anonima como terceiro paramêtro
imprimirResultado(3, 4, function (x, y) {
  return x - y
})

// Foi passada uma arrow function como terceiro paramêtro
imprimirResultado(3, 4, (x, y) => x * y )

 
const pessoa = {
  falar: function() {
    console.log('Opa')
  }
}

pessoa.falar()