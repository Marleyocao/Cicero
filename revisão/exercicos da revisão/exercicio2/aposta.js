
// const numeros = [5,1,2,3,4,8,9,10]

// console.log(numeros.indexOf(5))//indice do primeiro elemento
// console.log(numeros.lastIndexOf(5))//começa a partir do ultimo elemento
// console.log(numeros.indexOf(11))

// const sorteado = Math.floor(Math.random()*100)+1


//tentativa1
// const numeros = []

// const aposta = document.getElementById('aposta')
// const reiniciar = document.getElementById('reiiciar')
// const Lista = document.getElementById('lista')


// const adicionarNumero = () =>{

// }

//explicação do professor
const erros = []
const numerosSorteado = Math.floor(Math.random() * 100)+1
const tentativas = 6

const aposta = document.getElementById('aposta')
const reiniciar = document.getElementById('reiniciar')

const apostarNumero = () =>{
    const inNumero = documente.getElementById('inNumero')
    let numero = Number(inNumero.value)

    if(numero <= 0 || isNaN(numero)){
        alert('numero invalido')
        inNumero.focus()
        return
    }
    const outErros = document.getElementById('outErros')
    const outChances = document.getElementById('outChances')
    const outDica = document.getElementById('outDica')

    //logica da aplicação
    if(numero == numerosSorteado){
        alert('voce acertou')
        aposta.Disabled = true
        outDica.textContent = `Parabens! Numero Sorteado${numerosSorteado}`
    }else{
        if(erros.indexOf(numero) >= 0){
            alert(`voce ja apostou o ${numero}... tente outro`)
        }else{
            erros.push(numero)
            let numErros = erros.length
            let numChances = tentativas - numErros

            outErros.textContent = `${numErros} (${erros.join(',')})`
            outChances.textContent = numChances
            if(numChances == 0){
                aposta.Disabled = true
                outDica.textContent = `Fim de jogo! Numero sorteado ${numerosSorteado}`
            }else{
                let dica = numero < numerosSorteado ? "Maior" : "Menos"
                outDica.textContent = `tente um numero ${dica} que ${numero}`
            }
        }
    }
    inNumero.value = ''
    inNumero.focus()
}


aposta.addEventListener('click',()=>{
    window.location.reload()
})