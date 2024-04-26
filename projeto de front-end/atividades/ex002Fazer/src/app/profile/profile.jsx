const Profile =({image, name, location, role}) => {
    return(
        <>
        <img src={image}/>
        <h3>{name}</h3>
        <p>{location}</p>
        <p>{role}</p>
        </>
    )
}

export default Profile;