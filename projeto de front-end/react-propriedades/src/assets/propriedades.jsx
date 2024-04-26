const Titulo = (props) =>{
    return(
        <h1 style={{color: props.cor}}>{props.texto}</h1>
    )
}

const SubTitulo = ({texto,cor}) =>{
    return(
        <p style={{color: cor}}>{texto}</p>
    )
}
const Cabecalho = (props) =>{
    return(
        <h1>{props.children}</h1>
    )
}
const App= () =>{
    return(
        <>
        <Cabecalho>
            <p>Esse é o meu Cabecalho</p>
        </Cabecalho>
        <Titulo cor='blue'texto='Meu titulo'/>
        <SubTitulo cor="purple"texto="Esse é o subtitulo do meu titulo"/>
        <Titulo cor='red'texto='esse é Meu outro titulo'/>
        <Titulo texto='esse é Meu terceiro titulo'/>
        </>
    )
}

 export default App;