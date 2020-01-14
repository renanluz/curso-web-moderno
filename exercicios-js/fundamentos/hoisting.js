// Hoisting em javascript é o comportamento padrão de mover a declaração para o topo
console.log('a = ', a)
var a = 2
console.log('a = ', a)

// O comportamento não se repete com let
//console.log('b = ', b) 
let b = 2
console.log('b = ', b)