const pacientes = []
//Referencia para entrada de dados
const inPaciente = document.getElementById('inPaciente')

//Saida de dados
const outAtendimento = document.getElementById('outAtendimento')
const outLista = document.getElementById('outlista')

//botoes
const btnAdicionar = document.getElementById('btnAdicionar')
const btnUrgencia = document.getElementById('btnUrgencia')
const btnAtender = document.getElementById('btnAtender')

const adicionarPaciente = () => {
    
}

btnAdicionar.addEventListener('click', () => {
    let nome = inPaciente.value
    if(nome === ''){
        alert('Informe o nome do paciente')
        return
    }
    pacientes.push(nome)
    
    let lista = ''
    pacientes.map((paciente, index)=>{
        return lista += `${index+1} - ${paciente}\n`
    });

    outLista.innerHTML = lista
    inPaciente.value = ''
})

const adicionarUrgencia = () => {
    let nome = inPaciente.value
    if(nome === ''){
        alert('Informe o nome do paciente')
        return
    }
    pacientes.unshift(nome)
    
    let lista = ''
    pacientes.map((paciente, index)=>{
        return lista += `${index+1} - ${paciente}\n`
    });

    outLista.innerHTML = lista
    inPaciente.value = ''
}
btnUrgencia.addEventListener('click', adicionarUrgencia)

const atenderPaciente = () =>{
    if(pacientes.length === 0){
        alert('Não Existe paciente na fila de espera')
        return
    }
    let atender = pacientes.shift()
    outAtendimento.textContent = atender

    let lista = ''
    pacientes.map((paciente, index)=>{
        return lista += `${index+1} - ${paciente}\n`
    });

    outLista.innerHTML = lista
}
btnAtender.addEventListener('click', atenderPaciente)