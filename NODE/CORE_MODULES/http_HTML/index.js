const http = require('node:http')
const PORT = 3333

const server = http.createServer((request, response)=>{
    // response.statusCode = 200
    // response.setHeader('Content-Type', 'text/html')
    // response.end('<h1>Olá, Primeiro</h1>')
    if(request.url === '/'){
        response.writeHead(200, {'Content-Type': 'text/html'})
        response.write('<meta charset=utf8>')
        response.write('<h1>Home Page</h1>')
        response.write('<p>Bem vindo a página inicial</p>')
        response.end()
    }else if(request.url === '/sobre'){
        response.writeHead(200, {'Content-Type': 'text/html'})
        response.write('<meta charset=utf8>')
        response.write('<h1>Page about</h1>')
        response.write('<p>Bem vindo a página inicial</p>')
        response.end()
    }else{
        response.writeHead(200, {'Content-Type': 'text/html'})
        response.write('<meta charset=utf8>')
        response.write('<h1>Page não encontrada</h1>')
        response.end()
    }
})

server.listen(PORT, ()=>{
    console.log(`Servidor on ${PORT}`)
})