
const Modal = ({texto, modal}) => {
    if(modal === true)
    return(
        <p>{texto}</p>
    )
    return null
}

export default Modal;