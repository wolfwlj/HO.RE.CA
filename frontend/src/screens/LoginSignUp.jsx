import React from 'react'
import SignupScreen from '../components/login-signup/Signup'
import LoginScreen from '../components/login-signup/Login'
import '../styles/authStyles.css'
const LoginSignUp = (props) => {
  return (
    <>


        <LoginScreen usernameEmit={props.usernameEmit} setUsernameEmit={props.setUsernameEmit}/>

        <hr></hr>

        <SignupScreen />    
        
            

    </>

    )
}

export default LoginSignUp