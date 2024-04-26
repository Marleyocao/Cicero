import Container from "../Container/Container";
import "./App.css";
import ContainerModal from "../ContainerModal/ContainerModal";

const App = () =>{

    return(
        <Container>
            <ContainerModal
            textButto={'Voce possui alguma duvida sobre o nosso'}/>
        </Container>
    )
}

export default App;