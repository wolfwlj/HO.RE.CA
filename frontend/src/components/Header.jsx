import React from 'react'
import "../styles/header.css"
import { useLocation, useNavigate} from 'react-router-dom'

const Header = (props) => {
  let navigate = useNavigate()

  const logoutHandler = async () => {
    await fetch('http://localhost:9090/logout', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      credentials: 'include',
    })

    props.setUsernameEmit('')
    navigate('/login')
}
  const location = useLocation()
  console.log(location.pathname)


  var SELECTED = {
    home: false,
    leaderboard: false,
    userlb: false,
    vote: false,
    login: false,
  }

  if (location.pathname === "/"){
    SELECTED.home = true
    SELECTED.leaderboard = false
    SELECTED.userlb = false
    SELECTED.vote = false
    SELECTED.login = false
  } else if (location.pathname === "/leaderboard"){
    SELECTED.leaderboard = true
    SELECTED.home = false
    SELECTED.userlb = false
    SELECTED.vote = false
    SELECTED.login = false
  } else if (location.pathname === "/userlb"){
    SELECTED.userlb = true

    SELECTED.leaderboard = false
    SELECTED.home = false
    SELECTED.vote = false
    SELECTED.login = false
  } else if (location.pathname === "/vote"){
    SELECTED.vote = true
    SELECTED.leaderboard = false
    SELECTED.home = false
    SELECTED.userlb = false
    SELECTED.login = false
  } else if (location.pathname === "/login"){
    SELECTED.login = true
    SELECTED.vote = false
    SELECTED.leaderboard = false
    SELECTED.home = false
    SELECTED.userlb = false

  }




  const SELECTED_STYLE = {
    color: "yellow"
}

  return (
    <div className='header'>
        

            <div className='header-flex'>

                <h1> 
                  <a className='style-none'>
                      HO . RE . CA
                  </a>
                </h1>
                <h3>
                    <a style={
                      SELECTED.home ? SELECTED_STYLE : null
                    } 
                    className='style-none'  href='/'>Geuss the preffered food</a>
                </h3>

                <h3> 
                <a style={
                      SELECTED.leaderboard ? SELECTED_STYLE : null
                    } 
                      className='style-none' href='/leaderboard'>Food Leaderboard</a> 
                </h3>  
                <h3> 
                <a style={
                      SELECTED.userlb ? SELECTED_STYLE : null
                    } 
                      className='style-none' href='/userlb'>Player Leaderboard</a> 
                </h3>  
                <h3> 
                    <a 
                    style={
                      SELECTED.vote ? SELECTED_STYLE : null
                    } 
                    className='style-none' href='/vote'>Vote on food</a> 
                </h3>  

                {props.usernameEmit ? (
                  
                  <h3>
                    <a 
                      style={
                        SELECTED.login ? SELECTED_STYLE : null
                      } 
                    
                    className='style-none' onClick={logoutHandler}>Logout {props.usernameEmit}</a>
                  </h3>
                      
                )
                
                : (
                  
                  <h3> 
                      <a 
                      style={
                        SELECTED.login ? SELECTED_STYLE : null
                      } 
                      className='style-none' href='/login'>Login/Sign up</a> 
                  </h3>  
                )}
            </div>
    </div>
  )
}

export default Header