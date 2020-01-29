const valor = 'Global'

function minhaFuncao() {
  console.log(valor)
}

function exec() {
  const valor = 'Local'
  minhaFuncao()
}

exec()

// A função, carrega consigo o local aonde ela foi definida então ela vai procurar a variável dentro do escopo léxico de onde ela foi definida