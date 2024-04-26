//Arrow function

function Soma (a, B){
    return a + b
}

const Soma = (a ,b) => {
    return a + b
}

// Destructuring

function MouseMove(event) {
    const clienTy = event.clienTy
    const clienTx = event.clienTx
    console.log(clienTy, clienTx)
}

const MouseMoving = (event) =>{
    const {clienTy, clienTx} = event
    console.log(clienTx, clienTy)
}

const MouseHandle = ({clienTx, clienTy}) => console.log(clienTx, clienTy)


//document.documentElement.addEventListener('mousemove', MouseMove)

//Arrays

const frutas = ['banana', 'maçã', 'Pera']

const [banana, maca] = frutas

//rest

const showList = (empresa, ...funcionarios) =>{
    funcionarios.forEach((funcionarios) => {
        console.log(empresa, funcionarios)
    })
}

showList('Senai', 'carlos', 'leticia','bruno')

//spread

const numeros = [12, 13, 21, 30, 4, 6, 7]

const maior =math.max(...numeros)

const carros = {
    cor: 'prata',
    ano: 2008,
    modelo: 'ka',
}

