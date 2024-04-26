const data = require('./onibus.json')

// Escreva uma função que aceite o ID da linha como entrada e retorne todas as paradas associadas a essa linha, ordenadas pela ordem de parada.
//professor
const listarParadasPorLinha = (idLinha) =>{
    const linha = data.linhas.find((linha) => linha.id === idLinha)
    console.log(linha)
    if(linha){
        const paradasOrdenadas = linha.paradas.sort((a,b)=>a.ordem - b.ordem)
        return {paradasOrdenadas}
    }else{
        return {message: 'Paradas não encontradas para linhas solicitadas'}
    }
}
const id = 2
const paradasPorLinhas = listarParadasPorLinha(id)
console.log(paradasPorLinhas)