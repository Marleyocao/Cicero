//sincrona - statica
//File System
const fs = require('fs')

console.log('inicio')

fs.writeFileSync('Arquivo1.txt','Olá')

console.log('End')