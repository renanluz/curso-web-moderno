const escola = "Cod3r"


// charAt retorna o caractere da posição indicada
console.log(escola.charAt(4))

// Retorna um valor vazio se o caractere indicado for maior do que a string
console.log(escola.charAt(5))

// charCodeAt retorna a posição do caractere na tabela Unicode
console.log(escola.charCodeAt(3))

// indexOf retorna a posição do caractere dentro da String
console.log(escola.indexOf('3'))

// substring retorna a string a partir da posição indicada
console.log(escola.substring(1))
console.log(escola.substring(0, 3))

// concat concatena as strings
console.log('Escola '.concat(escola).concat("!"))
console.log('Escola ' + escola + "!")

// replace substitui um caractere por outro 
console.log(escola.replace(3, 'e'))

// split divide a string nos caracteres informados e gera um Array
console.log('Ana,Maria,Pedro'.split(','))
