
// Estados
// O estado de uma aplicação representa as caracteristicas dela naquele momento
/*
const App = () => {

  const ativo = false

  return(
    <button disabled={!ativo}>{ativo ? 'Botão ativo' : 'Botão inativo'}</button>
  )
}

export default App
*/

// Hooks
// Os Hooks são funções do React que permitem controlar o estado e o ciclo de vida de coponentes funcionais.

//React.useState - É uma função que retorna uma Array com 2 valoress. O primeiro valor guarda o dado do estado atual, que pode ser qualquer tipo de dado como strings, arrays, numeros, boolean, null, undefined ou objetos. O segundo valor é uma função que pode ser utilizada para modificarmos o estado do primeiro valor.

//Quando a função de modificação do estado é ativada, todos os componentes que dependerem do estado, serão  renderizados e os seus filhos também. É isso que garante a reatividade de componentes funcionais no React.


import React from "react"
const App = () => {

  const [ativo, setAtivo] = React.useState(true)
  const [contar, setContar] = React.useState(0)

  return(
    <>
    <button onClick={()=>setAtivo(!ativo)}>
      {ativo ? 'Botão Ativo': 'Botão inativo'}
    </button>

    <button onClick={()=> setContar(contar + 1)}>{contar}</button>
    </>
  )

}

export default App