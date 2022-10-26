import React from 'react'
import SignupScreen from '../components/login-signup/Signup'
import LoginScreen from '../components/login-signup/Login'
import '../styles/authStyles.css'
const LoginSignUp = (props) => {
  return (
  <>

        <LoginScreen usernameEmit={props.usernameEmit} setUsernameEmit={props.setUsernameEmit}/>

        <div className='HRdiv-parent'>
            <div className='divHR-child'></div> 
            <div className='HRdivText'> 
              <p className='hr-text'>OR</p>
            </div> 
            <div className='divHR-child'></div> 
        </div>
        
        <SignupScreen usernameEmit={props.usernameEmit} setUsernameEmit={props.setUsernameEmit} />    
                
                    

  </>

    )
}

export default LoginSignUp