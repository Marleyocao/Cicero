console.log(process.argv)

const args = process.argvslice(2)

console.log(args)

const nome = args[0].split('=')[1] //'nome=Carlos
console.log(nome)

const idade = args[1].split('=')[1] //'nome=Carlos
console.log(idade)
console.log(`o nome ${nome} e a idade ${idade} anos`)