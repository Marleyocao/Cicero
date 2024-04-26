const carros = []

const inModelo = document.getElementById('inModelo')
const inPreco = document.getElementById('inPreco')

const outlista = document.getElementById('outLista')

const btnLista = document.getElementById('btnLista')
const btnFiltrar = document.getElementById('btnFiltrar')

const adicionarCarro = () =>{
    const modelo = inModelo.value
    const preco = Number(inPreco.value)

    if(modelo === '' || precp <= 0 || isNaN(preco)){
        alert('informe os dados corretamente')
        inModelo.focus()
        return
    }

    carros.push({ modelo: modelo, preco:preco})

    inModelo.value = ''
    inPreco.value =''
}
const listarCarros = () => {
    if (carros.length === 0)
}
 