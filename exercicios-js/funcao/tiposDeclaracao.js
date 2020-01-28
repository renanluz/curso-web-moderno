// Function Declaration podem ser chamadas antes mesmo da declaração
console.log(soma(3, 4)) 

// Function Declaration
function soma(x, y) {
  return x + y
}

// Function Expression
const sub = function (x ,y) {
  return x - y 
} 

console.log(sub(3, 4))

// Named Function Expression - uso bem reduzido
const mult = function mult(x, y) {
  return x * y
}

console.log(mult(3, 4))

  


