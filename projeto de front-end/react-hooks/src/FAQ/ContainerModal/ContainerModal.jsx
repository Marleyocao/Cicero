import React from "react"
import ButtonModal from "../ButtonModal/ButtonModal"
import Modal from "../modal/modal"

const ContainerModal = () => {
    
    const[modal, setModal] = React.useState(false)

    return(
        <>
        <ButtonModal text={"Botão"}
            setModal={setModal}
            modal={modal}/>
        <Modal
             modal={modal}
            texto={textModal}/>
        </> 
    )
}

export default ContainerModal