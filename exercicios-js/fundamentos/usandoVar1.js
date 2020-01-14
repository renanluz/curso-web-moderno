{
  {
    {
      {
        var sera = 'Será???'
      }
    }
  }
}

/**
 * Variáveis do tipo var só possuem dois escopos
 * Escopo global - Que pode ser acessando em qualquer lugar do programa
 * Escopo da função - Acessado apenas dentro do escopo da função
 */

console.log(sera)

function teste() {
  var local = 123
  console.log(local)
}

teste()
//console.log(local) 
