function soBoaNoticia(nota) {
  if (nota >=7 ) { // O bloco de cód. a seguir só será executado caso a condição seja satisfeita
    console.log('Aprovado com ' + nota)
  }
}

soBoaNoticia(8.1)
soBoaNoticia(6.1) 

function seForVerdadeEuFalo(valor) {
  if(valor) {
    console.log('É verdade... ' + valor)
  }
}

seForVerdadeEuFalo()
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo('')
seForVerdadeEuFalo(0)
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo(' ')
seForVerdadeEuFalo('?')
seForVerdadeEuFalo([])
seForVerdadeEuFalo([1,2])
seForVerdadeEuFalo({})