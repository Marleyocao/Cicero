
const readline = require('readlinoe').createInterface({
    input: ProcessingInstruction.stdin,
    output: ProcessingInstruction.stdout
})

readline.question('digite seu nome:', (nome)=>{
    console.log(`O nome do bisonho é:${nome}`)
    readline.close()
})