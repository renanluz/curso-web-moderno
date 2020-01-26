let dobro = function (a) {
  return 2 * a
}


// Arrow Function com bloco e retorno definido
dobro = (a) => {
  return 2 * a 
}

// Arrow Function sem bloco definido e com retorno implícito
dobro = a => 2 * a

console.log(dobro(Math.PI))

let ola = function () {
  return 'Olá'
}

ola = () => 'Olá' // Arrow sem paramêtros

ola = _ => 'Olá' // Arrow com paramêtro que pode ser ignorado

console.log(ola())