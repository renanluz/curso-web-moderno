function geraInteiroAleatorioEntre( min, max) {
  const valor = Math.random() * (max - min) + min
  return Math.floor(valor)
}

let opcao = 0

/**
 * Do While
 * Muito parecido com While, com a diferença que a expressão está após o bloco de código.
 * Garante que pelo menos uma execução seja garantida.
 */

do {
  opcao = getInteiroAleatorioEntre(-1, 10)
  console.log(`Opção escolhida foi ${opcao}.`)
} while (opcao != -1)

console.log('Até a próxima!')