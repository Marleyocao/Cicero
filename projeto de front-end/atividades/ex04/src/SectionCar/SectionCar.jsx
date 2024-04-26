import Button from "../Button/Button"
import './SectionCar.css'

const SectionCar = ({titulo, texto, image,color, borda}) => {
    return(
        
        <article style={{backgroundColor: color, borderRadius: borda}}>
        <img src={image} alt="" />
        <h1>{titulo}</h1>
        <p>{texto}</p>
        <Button nome='Learn More'></Button>
        </article>
    )
}

export default SectionCar