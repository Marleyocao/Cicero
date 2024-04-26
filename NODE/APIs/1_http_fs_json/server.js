
import http from 'node:http'
import fs from 'node:fs'
import { v4 as idGenerator } from 'uuid';
const PORT = 3333
//titulo, autor, genero, anoPublicacao, [personagens]
const server = http.createServer((request, response)=>{
   const {url, method} = request
   
   fs.readFile('livros.json', 'utf8',(err, data)=>{
    if(err){
        response.writeHead(500, {'Content-Type':'application/json'})
        response.end(JSON.stringify({message:'Erro interno do servidor'}))
        return
    }

    let jsonData = []
    try {
        jsonData = JSON.parse(data)
    } catch (err){
        console.log(error)
    }

    if(url === '/livros' && method ==='GET'){
        response.writeHead(200, {'Content-Type':'application/json'})
        response.end(JSON.stringify(jsonData))
    }else if(url === '/livros' && method === 'POST'){
        let body = ''
        request.on('data', (chunk)=>{
            body += chunk.toString()
        })
        request.on('end', ()=>{
            const novoLivro = JSON.parse(body)
            novoLivro.id = idGenerator()
            jsonData.push(novoLivro)
            fs.writeFile("livros.json", JSON.stringify(jsonData, null, 2), (error)=>{
                if(error){
                    response.writeHead(500, {'Content-Type':'application/json'})
                    response.end(JSON.stringify({message: 'Erro interno do servidor'}))
                    return
                }
                response.writeHead(201, {'Content-Type':'application/json'})
                response.end(JSON.stringify(novoLivro))
            })
        })
    }else if(url.startsWith("/livros/") && method === "PUT"){
        const id = url.split('/')[2]
        let body = ''
        request.on('data', (chunk)=>{
            body += chunk.toString()
        })
        request.on('end', ()=>{
            const livroArualiazado =JSON.parse(body)
            const index = jsonData.findIndex(livro => livro.id == id)
            if(index !== -1){
                jsonData[index] = {...jsonData[index], ...livroArualiazado}
                fs.writeFile('livros.json', JSON.stringify(jsonData, null, 2), (error)=>{
                    if(error){
                        response.writeHead(500, {'Content-Type':'application/json'})
                        response.end(JSON.stringify({message: 'Erro interno do servidor'}))
                        return
                    }
                    response.writeHead(201, {'Content-Type':'application/json'})
                    response.end(JSON.stringify(jsonData[index]))
                })
            }
        })

    }else if(url.startsWith("/livros/") && method === "DELETE"){
        const id = url.split('/')[2]
        const index = jsonData.findIndex((livro)=>livro.id == id)
        if(index !== -1){
            jsonData.splice(index, 1)
            fs.writeFile('livros.json', JSON.stringify(jsonData, null, 2),(error)=>{
                if(error){
                    response.writeHead(500, {'Content-Type':'application/json'})
                    response.end(JSON.stringify({message: 'Não possivel remover o livro'}))
                    return
                }
                response.writeHead(200, {'Content-Type':'application/json'})
                response.end(JSON.stringify({message: "livro removido com sucesso"}))
            })
        }else{
            response.writeHead(404, {'Content-Type':'application/json'})
            response.end(JSON.stringify({message: "livro não encontrado"}))
        }
    }else{
        response.writeHead(404, {'Content-Type':'application/json'})
        response.end(JSON.stringify({message: 'Página não encontrada'}))
    }
    

   })

})

server.listen(PORT, ()=>{
    console.log(`Servidor on PORT:${PORT}`)
})