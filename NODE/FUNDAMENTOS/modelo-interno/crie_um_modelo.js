module.exports = {
    soma(a,b){
       console.log(`${a+b}`)
    },
    aoQuadrado(a){
        console.log(`${a*a}`)
    },
    subtração(a,b){
        console.log(`${a-b}`)
    },
    div(a,b){
        if(b <= 0){
            console.log(`Erro${b}`)
            return
        }
        console.log(`${a/b}`)
    },
    mult(a,b){
        console.log(`${a * b}`)
    }
}