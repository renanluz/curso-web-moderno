let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!isAtivo)
console.log(!!isAtivo)

console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!! Infinity)
console.log(!!(isAtivo = true))

console.log('os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('para finalizar...')
console.log(!!('' || null || 0 || ' '))

/*
  Essa estrutura simplesmente análisa se nome é verdadeiro ou falso
  caso seja falso, exibirá "Desconhecido", caso contrário exibirá o conteúdo
*/
let nome = ''
console.log(nome || 'Desconhecido')

nome = 'Renan'
console.log(nome || 'Desconhecido')