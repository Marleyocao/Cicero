// Atividade 3: Informações de Memória
// Escreva um código que exiba a quantidade total de memória do sistema em bytes.
// Em seguida, converta o valor para uma unidade mais legível, como kilobytes (KB), megabytes (MB) ou gigabytes (GB)

const os = require('node:os')

const memoria = os.totalmem()

const memoriaMb = (memoria/1000000)
const memoriaGb = (memoriaMb/1000)

console.log('MEMORIA NB ==>',memoriaMb.toFixed(3), 'MEMORIA ==>',memoria.toFixed(3), 'MEMORIA GB ==>',memoriaGb.toFixed(3))
