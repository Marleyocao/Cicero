
const Button = ({link, name}) => {
    return(
        <a href={link} target="_blank">
            <input type="button" value={name} />
        </a>
    )
}

export default Button;