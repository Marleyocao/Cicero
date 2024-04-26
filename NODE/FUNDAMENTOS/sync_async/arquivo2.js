//Arquivo async
const fs = require('fs')

console.log('inicio')

fs.writeFile('Arquivo2.txt','Olá',()=>{
    setTimeout(()=>{
        console.log('Arquivo Criado')
    },3000)
})

console.log('End')