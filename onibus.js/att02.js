const data = require('./onibus.json')

// Implemente uma função que mostre quantos ônibus estão disponíveis para uma determinada linha.
//professor
const contarOnibusDisponivelPorLinha = (idLinha) =>{
    const onibusDaLinha = data.onibus.filter((onibus)=> onibus.linha === idLinha)
    return onibusDaLinha.length != 0 ? {onibusDaLinha} : {message: 'Não tem onibus para essa linha'}
}

const id = 2
const onibusDisponivel = contarOnibusDisponivelPorLinha(id)
console.log(onibusDisponivel)