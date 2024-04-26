
import  Profile from './profile/profile'
import Container  from './container/container'






const App = () =>{
  return(
    <container>
      <Profile
        image={jessicaImage}
        name="jessica Randall"
        location="London, United Kingdom"
        role="Full Stack Developer"
      />
      <button
      link= 'https://www.github.com/GabigoldoSenai'
      name='GitHub'
      />
      <Button
      link='https://www.linkedin.com/igoraoves'
      name='LinkedIn'
      />
    </container>
  )
}

export default App;