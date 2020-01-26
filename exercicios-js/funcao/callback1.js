const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir (nome, indice) {
  console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)
fabricantes.forEach(fabricante => console.log(fabricante))

/**
 * Callback é uma função tipicamente passada como argumento de outra função
 * e chamada quando um evento ocorrer, ou quando uma parte do código receber uma
 * resposta que estava à espera.
 * Nesse caso o evento foi o loop 
 */
 