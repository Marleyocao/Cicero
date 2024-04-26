import SectionCar from '../SectionCar/SectionCar';
import './App.css'


const App = () => {
    <section>
        <Selection
            titulo= 'SEDANS'
            texto= "choose a sedan for its affordability and escellent fuel ec"
            image= {icorSedan}
            classe="sedan"

        />
        <SectionCar
            titulo="SUVS"
            texto="choose a sedan for its affordability and escellent fuel ec"
            image={iconSuv}
            classe="suv"
        />
        <SectionCar
            titulo="LUXURY"
            texto="choose a sedan for its affordability and escellent fuel ec"
            image={iconLux}
            classe="lux"
        />
    </section>
}

export default App