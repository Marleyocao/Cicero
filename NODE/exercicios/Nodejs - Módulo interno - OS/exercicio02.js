// Atividade 2: Informações do Processador
// Escreva um código que exiba as informações de cada processador do sistema, incluindo a velocidade, o modelo e o identificador.
// Utilize o método os.cpus() para obter as informações.

const os = require('node:os')
const cpus = os.cpus()

cpus.forEach((cpu)=>{
    console.log(`Modelo: ${cpu.model} ID: ${cpu.times.user} Velocidade: ${cpu.speed}`)
})