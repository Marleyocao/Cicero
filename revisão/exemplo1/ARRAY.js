// Estrutura de dados -> ARRAY
//Criar um array
const array = []
const vetor = new Array()

console.log(typeof array)
console.log(typeof vetor)

//Referencia aos elementos de uma array
const produtos = ['arroz','feijão','iogurt',]
console.log(produtos[1])

//inclusão e exclusão de elementos/itens
const estados = ['Alagoas']

estados.push('Recife')// Adiciona no final da array 
console.log(estados)
//[0,1,2]
estados.unshift('bahia')//Adiciona no inicio
console.log(estados)

estado.pop()//Excluir no final do array
console.log(estado)

estados.shift() //Excluir no começo do array
console.log(estados)

//Verificar o tamanho/quantidades de itens do array
const numeros = [1,2,3,4,5,6]
console .log(`tamanho do array:${numeros.length}`)

//Apresentar dados de um array
const cidades = ['Maceió', 'Rio Largo', 'Marechal']
console.log(`${cidades}\t${cidades.toString()}\t${cidades.join('::::::')}`)

//todos os elementos do array passam no teste logica da função
const every = numbers.every((num)=> num % 2 === 0 )
consoçe.log(every)

//verifica se pelos menos um elemento no array satisfaz a condição
const some = numbers.every((num)=> num % 2 === 0 )
console.log(some)
