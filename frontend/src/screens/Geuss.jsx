import { useState, useEffect } from 'react'
import "../styles/home.css"
import GeussBox from '../components/game/GeussBox.jsx'
const Geuss = () => {

  const [score, setScore] = useState(0)
  const [leftVotes, setLeftVotes] = useState(0)
  const [rightVotes, setRightVotes] = useState(0)
  const [choice, setChoice] = useState("")
  const[highscore, setHighscore] = useState(0)
  const[statusG, setStatusG] = useState("")

  const[gewonnen ,setGewonnen] = useState("")
  const[verloren, setVerloren] = useState("")


  useEffect(() => {


    if(choice === "left"){

      if(leftVotes >= rightVotes){
          setScore(score + 1)
          console.log("win")
          setStatusG("win")
          setVerloren("")
          setGewonnen("Correct choice ! +1 score.")
          
        
      } else {
          if (score > highscore) {
            setHighscore(score)
          }
          setScore(0)
          console.log("lose")
          setStatusG("lose")

      }
      setChoice("")
      setStatusG("")

    } 
    
    else if(choice === "right"){

      if(rightVotes >= leftVotes){
          setScore(score + 1)
          console.log("win")
          setStatusG("win")
          setVerloren("")

          setGewonnen("Correct choice ! +1 score.")
      }
      else {
          if (score > highscore) {
            setHighscore(score)
          }

          setScore(0)
          console.log("lose")
          setStatusG("lose")
          setGewonnen("")
          setVerloren("Wrong choice, you lost. Try again!")

      } 
      setChoice("")
      setStatusG("")
    }  

  }, [choice])
  
  
  return (
    <>

      <h1 className='text-center'>
        Which food do people like more?
      </h1>



      <div className='game-container'>

        <div className='box-container'>

            <GeussBox boxSide={"left"} setScore={setScore} score={score}  setLeftVotes={setLeftVotes} setChoice={setChoice}/>

        </div>
        <div className='box-container scores'>
          <h3 className='text-center'>
              {gewonnen}
              {verloren}
          </h3>
          <br></br>
          <h1 className='text-center'> Score : {score} </h1>

          <h1 className='text-center'> HighScore : {highscore} </h1>
        </div>
        <div className='box-container'>

            <GeussBox boxSide={"right"} setScore={setScore} score={score}  setRightVotes={setRightVotes} setChoice={setChoice}/>
        </div>

      </div>


    </>
  )
}

export default Geuss