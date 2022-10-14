import React from 'react'
import "../styles/header.css"
const Header = () => {
  return (
    <div className='header'>
        
            <h1> 
              <a className='style-none'>
                  HO . RE . CA
              </a>
            </h1>
            <div className='header-flex'>


                <h3>
                    <a className='style-none'  href='/'>Vote on food</a>
                </h3>
                {/* <h3>
                  &#x2022;
                  </h3> */}
                <h3> 
                    <a className='style-none' href='/leaderboard'>Food Leaderboard</a> 
                </h3>  
            </div>
    </div>
  )
}

export default Header