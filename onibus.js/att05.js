//Crie uma função que aceite o ID de um ónibus como entrada e retorne todas as informações sobre esse ónibus

const data = require('./onibus.json')

// const dadosOnibus =(id) => {
//     const encontraOnibus = data.onibus.filter((onibus) => onibus.id === id)
//     return encontraOnibus != 0 ? {encontraOnibus}:{message: 'não existe esse onibus na base de dados'}
// }

// const onibusID = 'A1010'
// const onibusInfo = dadosOnibus(onibusID)
// console.log(onibusInfo)

//professor

const dadosOnibus =(dados) =>{
    const encontradaOnibus = data.onibus.find((onibus)=> onibus.dados === onibusID)
    
    return encontradaOnibus != undefined ? encontradaOnibus :
    {message: 'Mensagem'}
}

const onibusID = 'A102'
const onibusInfo = dadosOnibus(onibusID)
console.log(onibusInfo)