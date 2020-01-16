const [a] = [10]
console.log(a)


/**
 * n2 e n4 foram pulados
 * n5 será exibido como undefined pois está fora do tamanho do array
 * n6 será exibido pois foi atribuido um o valor padrão
 */
const [ n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6)

const [, [, nota]] = [[, 8, 8], [9, 6, 8]]
console.log(nota)