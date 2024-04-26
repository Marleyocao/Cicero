const { bindCallback } = require("rxjs")

function a(){
    console.log('executando a função a()')
}
function b(){
    console.log('executan a função b()')
}
function c(){
    console.log('executando a função c()')
    a()
    b()
}

a()
b()
c()


// JAVASCRIPT
// back - node
// front - react
// mobile - react native