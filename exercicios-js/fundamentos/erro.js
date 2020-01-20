function tratarErroELancar (erro) {
  //throw new Error('...')
  //throw 10
  //throw true
  //throw 'Mensagem'
  throw {
    nome: erro.name,
    msg: erro.message,
    date: new Date
  }
}

function imprimirNomeGritado(obj) {
  try { // Código que será execultado caso não ocorra o erro
    console.log(obj.name.toUpperCase() + '!!!')
  } catch (e) { // Código que será execultado caso ocorra algum erro
    tratarErroELancar(e)
  } finally {  // Código que será execultado com ou sem erro
    console.log('final')
  }
}

const obj = { name: 'Renan' }
imprimirNomeGritado(obj)