import http from 'node:http'

const PORT = 3333

const participants = []

const server = http.createServer((request, response) => {
    const { method, url } = request

    if (method === "GET" && url === '/participants') {
        response.setHeader('Content-Type', 'application/json')
        response.end(JSON.stringify(participants))
    } else if (url.startsWith('/participants/') && method === 'GET') {
        const participantId = url.split('/')[2]
        const findParticipant = participants.find((participant) => {
            return participant.id == participantId
        })

        if (!findParticipant) {
            response.writeHead(404, { 'Content-Type': 'application/json' })
            return response.end(
                JSON.stringify({ message: "participante não encontrado" })
            )
        }else{
            response.setHeader('Content-Type', 'application/json')
            response.end(JSON.stringify(findParticipant))
        }
    } else if (method === "GET" && url === '/participants/count') {
        const quantidadePaticipant = participants.length
        response.setHeader("Content-Type", 'applincation/json')
        response.end(
            JSON.stringify({ 'quantidade de participantes': quantidadePaticipant })
        )
    } else if (method === "GET" && url === '/participants/count/over28') {
        const olderAge = participants.filter((participants) => participant.age >= 18)

        response.setHeader('Content-Type', 'application/json')
        response.end(
            JSON.stringify({ "Quantidade de Paerticipantes Maiores de idade": olderAge })
        )
    } else if (method === "GET" && url === '/participants/city/most') {

        const contantoCidades = participants.reduce((acc, participant) => {
            acc[participant.city] = (acc[participant.city] || 0) + 1
            return acc
        }, {})

        console.log(contantoCidades)

        let quantidadeDeParticipantes = 0
        let cidadeComMaiorNumeroDeParticipantes = ''
        Object.entries(contantoCidades).forEach(([city, count]) => {
            if (count > quantidadeDeParticipantes) {
                quantidadeDeParticipantes = count
                cidadeComMaiorNumeroDeParticipantes = city
            }
        })
        response.setHeader('Content-Type', 'application/json')
        response.end(JSON.stringify({ "quantidade total de participante": quantidadeDeParticipantes, "cidade com o maior numero de participante": cidadeComMaiorNumeroDeParticipantes, }))

    } else if (method === "POST" && url === ('/participants')) {
        let body = ''
        request.on('data', (chunk) => {
            body += chunk
        })
        request.on('end', () => {
            const participant = JSON.parse(body)
            if (participant.idade < 16) {
                response.writeHead(403, { 'Content-Type': 'application/json' })
                return response.end(
                    JSON.stringify({ message: 'Apenas usuários com maiores de 15 podem fazer o cadastro' }))
            }

            if (participant.senha !== participant.confimaSenha) {
                response.writeHead(400, { "Content-Type": "application/json" })
                return response.end(
                    JSON.stringify({ message: "As senhas fornecidas não conrresponde" })
                )
            }
            participant.id = participants.length + 1
            participants.push(participant)
            response.writeHead(201, { 'Content-Type': 'application/json' })
            response.end(JSON.stringify(participant))
        })
    } else if (method === "PUT" && url.startsWith('/participants/')) {
        const participantId = url.split('/')[2]

        let body = ''
        request.on('data', (chunk) => {
            body += chunk
        })
        request.on('end', () => {
            const updatedParticipant = JSON.parse(body)
            const index = participants.findIndex(participant => participant.id == participantId)

            if (index !== -1) {
                participants[index] = { ...participants[index], ...updatedParticipant }
                response.setHeader('Content-Type', 'application/json')
                response.end(JSON.stringify(participants[index]))
            } else {
                response.writeHead(404, { 'Content-Type': 'applincation/json' })
                return response.end(
                    JSON.stringify({ message: 'participante não encontrado' })
                )
            }
        })
    } else if (method === "DELETE" && url === url.startsWith('/participants')) {
        const participantId = url.split('/')[2]
        const index = participants.findIndex(
            (participant) => participant.id == participantId
        )

        if (index !== -1) {
            response.writeHead(404, { 'Content-Type': 'application/json' })
            return response.end(
                JSON.stringify({ message: "participante não encontrado" })
            )
        }

    } else {
        response.writeHead(404, { 'Content-Type': 'application/json' })
        response.end(
            JSON.stringify({ codigo: 404, message: 'Página não encontrada' })
        )
    }

})

server.listen(PORT, () => {
    console.log(`Seridor on PORT${PORT}`)
})