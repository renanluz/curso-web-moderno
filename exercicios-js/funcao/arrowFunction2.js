function Pessoa() {
  this.idade = 0 
  // Na Arrow Function o This não varia
  setInterval(() => {
    this.idade++
    console.log(this.idade)
  }, 1000)
}

new Pessoa