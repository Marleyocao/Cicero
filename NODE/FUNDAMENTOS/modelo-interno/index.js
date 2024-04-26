const meuModulo = require('./crie_um_modelo')
console.log(meuModulo)

const soma = meuModulo.soma
const Quadrado = meuModulo.aoQuadrado
const subtracao = meuModulo.subtração
const div = meuModulo.div
const mult = meuModulo.mult

soma(2,2)
Quadrado(2)
subtracao(2,2)
div(2,2)
mult(2,2)