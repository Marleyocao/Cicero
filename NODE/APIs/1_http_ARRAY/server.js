import http from 'node:http'

const PORT = 3333
//Métodos: GET, POST, PUT, PATH, DELETE
/**
 * REQUISIÇÃO
 * 1. corpo da requisição (request.boy) (post)
 * 2.parametro de busca(Search PARAMS, QUERY PARAMS) http://localhost:3333/users/2 (GET)
 * 3. Parâmetros de ROTA (ROUTE PARAM) - http://localhost:3333/users/1 (PUT, PATH, DELETE)
 */
//Códigos: 
const users = [
    {
        nome: "Fulano de Tal",
        idade: 19,
    }
]
const server = http.createServer((request, response) => {
    const { method, url } = request
    if (method === "GET" && url === '/users') {//BUSCAR TODOSOS USUARIOS
        response.setHeader('Content-Type', 'applicationjson')
        response.end(JSON.stringify(users))
    } else if (url.startsWith('/users/') && method === 'GET') {// BUSCAR UM UNICO USUARIO
      const userId = url.split('/')[2]
      const user = users.find((user) => user.id == userId)

      if(user){
        response.setHeader("Content-Type","application/json")
        response.end(JSON.stringify(user))
      }else{
        response.writeHead(404, {"Content-Type":"application/json"})
        response.end(JSON.stringify("Usuário não encontrado"))
      }
      
    } else if (url === '/users' && method === 'POST') {//cadastra um usuario
         let body = ''
        request.on('data', (chunk) => {
            body += chunk.toString()
        })
        request.on('end', () => {
            const novoUsuario = JSON.parse(body)
            novoUsuario.id = users.length + 1
            users.push(novoUsuario)
            response.writeHead(201, { 'Content-Type': 'application/json' })
            response.end(JSON.stringify(novoUsuario))
        })
    } else if (url.startsWith('/users/') && method === "PUT") {// atualizar um usuario
        const userId = url.split('/')[2];

        let body = ''
        request.on('data', (chunk) => {
            body += chunk.toString()
        });
        request.on('end', ()=>{
            const updateUser = JSON.parse(body)
            const index = users.findIndex((user) => user.id == userId)

            if(index !== -1){
                users[index] = {...users[index], updateUser}//caso não queira um historico coloque so o updateUser
                response.setHeader("Content-Type","application/json")
                response.end(JSON.stringify(users[index]))
            }else{
                response.writeHead(404, {"Content-Type":"application/json"});
                response.end(JSON.stringify({message: "Erro ao tentar atualizat"}))
            }
        })


        const user = users.find((user) => user.id == userId)
    } else if (url.startsWith('/users/') && method === "DELETE") {// deletar um usuario

        const userId = url.split('/')[2];
        const index = users.findIndex((user) => user.id == userId)

        if(index !== -1){
            users.splice(index, 1)
            response.setHeader("Content-Type","application/json")
            response.end(JSON.stringify({message: "Usuário removido com sucesso"}))
        }else{
            response.writeHead(404, {"Content-Type":"application/json"});
            response.end(JSON.stringify({message: "Erro ao tentar deletar"}))
        }

    } else {// Recurso não encontrado

        response.writeHead(404, {"Content-Type":"application/json"});
        response.end(JSON.stringify({message: "Erro ao tentar encontrar"}))

    }
})


server.listen(PORT, () => {
    console.log(`Seridor on PORT${PORT}`)
})