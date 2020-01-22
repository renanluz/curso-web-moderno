function getInteiroAleatorioEntre(min, max){
  const valor = Math.random() * (max - min) + min
  return Math.floor(valor)
}

let opcao = 0
/**
 * While 
 * Estrutura de repetição baseada em uma expressão verdadeiro ou falso.
 * Enquanto for verdadeiro continua e quando for falso sai do laço.
 * Deve-se ser utlizada quando não se tem uma quantidade exata de laços para serem executados.
 */

while (opcao != -1) {
  opcao = getInteiroAleatorioEntre(-1, 10)
  console.log(`Opção escolhida foi ${opcao}.`)
}

console.log('Até a próxima!')