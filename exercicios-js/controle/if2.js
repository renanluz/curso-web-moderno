function teste1(num) {
  if (num > 7)
    console.log(num)

  console.log('Final') // Será execultado independentemente da condição  
}

teste1(6)
teste1(8)

function teste2(num) {
  if(num > 7); { // Cuidado com o ';', não utilizar em estruturas de controle
    console.log(num)
  }
}

teste2(6)
teste2(8)