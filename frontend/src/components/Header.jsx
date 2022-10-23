import React from 'react'
import "../styles/header.css"
import { useLocation } from 'react-router-dom'


const Header = () => {

  const location = useLocation()
  console.log(location.pathname)


  var SELECTED = {
    home: false,
    leaderboard: false,
    game: false
  }

  if (location.pathname === "/"){
    SELECTED.home = true
    SELECTED.leaderboard = false
    SELECTED.game = false

  } else if (location.pathname === "/leaderboard"){
    SELECTED.leaderboard = true
    SELECTED.home = false
    SELECTED.game = false
  } else if (location.pathname === "/geuss"){
    SELECTED.geuss = true
    SELECTED.leaderboard = false
    SELECTED.home = false
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
                      SELECTED.leaderboard ? SELECTED_STYLE : null
                    } 
                      className='style-none' href='/leaderboard'>Player Leaderboard</a> 
                </h3>  
                <h3> 
                    <a 
                    style={
                      SELECTED.geuss ? SELECTED_STYLE : null
                    } 
                    className='style-none' href='/vote'>Vote on food</a> 
                </h3>  
            </div>
    </div>
  )
}

export default Header