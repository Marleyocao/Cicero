const http = require('node:http')
console.log(http)

const server = http.createServer((request, response)=>{
    response.write('OLÁ, meu primeiro servidor HTTP!!!!')
    response.end()
})

server.listen(3333, ()=>{
    console.log('Servidor on PORT: 3333')
})