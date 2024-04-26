// const carro = {
//     cor: 'Amarelho',
//     marca: 'Nissao',
//     modelo: 'Kicos',
//     ano: 2024
//
// }
//
// console.log(`Meu carro é ${carro.cor} da marca${carro.marca}`)



const carroDesejado = {
    portas: 4,
    cor: 'prata',
    mecanica: {
        motorizacao: [2.0, 'turbo', '140cv']
    },
    tetoSolar: true
}

const carroAVenda = {
    portas: 4,
    cor: 'preto',
    mecanica: {
        motorizacao: [1.0, 'aspirado', '60cv']
    },
    tetorSolar: false,
    cambio : 'manual',

}

const carroOlx = {
    portas: 4,
    cor:'prata',
    mecanica: {
        motorizacao: [2.0, 'turbo', '140cv'],
        cambio: 'automatico',
        tracap: '4x4'
    },
    tetoSolar: true,
    ano: 2022,
    wifi: true,
    assistenteDeEstacionamento: true,
    centralMultimídia: true,
}

test('Características do carro desejado', () => {
    expect(carroOlx).toMatchObject(carroDesejado)
})
