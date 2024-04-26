const data = require('./onibus.json')

// Crie uma função que aceite o ID da linha como entrada e retorne os horários de partida e chegada para essa linha.

const identidade = 2

const getIdverificar = (id) => {

    let rota = data.linhas.find((linha) => {
        return linha.id === id;
    })


    if(!rota){
        return ('precisamos de um ID para identificar o horario')
    }else{
        const horario = rota.horarios.map((hora) => {
            return `Saida : ${hora.saida} | Chegada : ${hora.chegada}`
        })
        // const saida = horario.map((obj) => {
        //     return obj.saida
        // }).join(' entrada=> ')
        // const chegada = horario.map((obj) => {
        //     return obj.chegada
        // }).join(' saida=> ')
    
        return horario.join('\n')
    }
}
console.log(getIdverificar(identidade))


//professor

// const horarioPorLinha = (idLinha) =>{

//     const linha = data.linhas.find((linha)=> linha.id == idLinha)
//     //console.log(linha)
//     if(linha){
//         const horarios = linha.horarios.map((horario) => {
//             return `Saida: ${horario.saida}, Ghegada: ${horario.chegada}`;
//         });
//         return horarios.join('\n')
//     }else{
//        return {message: 'não foi encontrada uma linha'} 
//     }
// }

// const id = 0
// const horariosLinhas = horarioPorLinha(id)
// console.log(horariosLinhas)