import './form.css'
import Button from "../Button/Button"
import Input from "../Input/Input"

const Form = () =>{
    return(
        <div>
            <messageFree/>
        <>
        <form>
            <Input type='text' placeholder="First Name"/>
            <Input type='text' placeholder="Last Name"/>
            <Input type='email' placeholder="Email Adress"/>
            <Input type='password' placeholder="Password"/>
            <Button buttonName="CLAIM YOUR FREE TRAIL"/>
            <messageTerm></messageTerm>
        </form>
        </>
        </div>
    )
}

export default Form