import React from 'react'
import {useNavigate} from 'react-router-dom'
function Project() {
    let navigate = useNavigate()
    function goToAboutPage(){
        navigate('/about')
    }
    function goToHomePage(){
        navigate('/')
    }
  return (
    <div>
      <h1>This is my project</h1>
      <button onClick={goToAboutPage}>Go To About page</button>
      <button onClick={goToHomePage}>Go To Home page</button>
    </div>
  )
}

export default Project
