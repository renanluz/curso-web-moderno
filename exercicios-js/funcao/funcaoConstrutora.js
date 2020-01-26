function Carro(velocidadeMaxima = 200, delta = 5) {
  // Atributo privado
  let velociadadeAtual = 0

  // método público
  this.acelerar = function() {
    if (velociadadeAtual + delta <= velocidadeMaxima) {
      velociadadeAtual += delta
    } else {
      velociadadeAtual = velocidadeMaxima
    }
  }

  // método público 
  this.getVelocidadeAtual = function () {
    return velociadadeAtual
  }
}

const uno = new Carro

uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())

console.log(typeof Carro)
console.log(typeof ferrari)