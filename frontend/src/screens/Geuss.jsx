import { useState, useEffect } from 'react'
import "../styles/home.css"
import GeussBox from '../components/game/GeussBox.jsx'
// import Swal from 'sweetalert2'
// import withReactContent from 'sweetalert2-react-content'
import { SwalLoseComponentLeft, SwalWinComponentLeft, SwalLoseComponentRight, SwalWinComponentRight } from '../components/game/SwalComponents'
// import img from '../styles/source-1.gif'
import FadeInOut from "../components/game/FadeInFadeOut";
import { SendHighscore } from '../proxies/SendHighscore.jsx'
import { SendGamesPlayed } from '../proxies/SendGamesPlayed.jsx'
import { GetHighscore } from '../proxies/GetHighscore.jsx'






const Geuss = (props) => {
  // const MySwal = withReactContent(Swal)
  console.log(props.userHighScore)
  const [score, setScore] = useState(0)
  const [leftVotes, setLeftVotes] = useState(0)
  const [rightVotes, setRightVotes] = useState(0)
  const [choice, setChoice] = useState("")
  const [highscore, setHighscore] = useState(0)
  const [won, setWon] = useState(false)
  const [swalLeftState, setSwalLeftState] = useState(false)
  const [swalRightState, setSwalRightState] = useState(false)
  
  const [finished, setFinished] = useState(false)
  const [leftWon, setLeftWon] = useState(false)
  const [rightWon, setRightWon] = useState(false)

  const [lostGame, setLostGame] = useState(false)


  const extraStyles = {
    position: "absolute",
    top: "-25%",
    left: "85%",
    color: "#24fc03",
    fontSize: "1.4rem",
    fontWeight: "bold",
  };
  const extraStylesLost = {
    position: "absolute",
    top: "-25%",
    left: "85%",
    color: "#fc0303",
    fontSize: "1.4rem",
    fontWeight: "bold",

  };






  useEffect(() => {


    if(choice === "left"){

      if(leftVotes >= rightVotes){

        setSwalLeftState(true)
        setWon(true)
        setFinished(true)
        setLeftWon(true)
          setTimeout(() => {

            setScore(score + 1)
            console.log("win")


            setFinished(false)
            setSwalLeftState(false)
            setWon(false)
            setLeftWon(false)
            setChoice("")

          }, 2100);

          
        
      } else {


          setSwalLeftState(true)
          setWon(false)
          setFinished(true)
          setRightWon(true)
          setLostGame(true)
          setTimeout(() => {

            setScore(0)
            console.log("lose")
            if (score > highscore) {
              setHighscore(score)

              if(props.userId != null){
                SendHighscore(score, props.userId)
                .then(() => {
                  setHighscore(score)
                })
                SendGamesPlayed(props.userId)
              }
            }

            setFinished(false)
            SendGamesPlayed(props.userId)

            setSwalLeftState(false)
            setWon(false)
            setRightWon(false)
            setLostGame(false)

            setChoice("")
          }, 2100);


      }
      setChoice("")

    } 
    
    else if(choice === "right"){

      if(rightVotes >= leftVotes){

        setSwalRightState(true)
        setWon(true)
        setFinished(true)
        setRightWon(true)

          setTimeout(() => {

            setScore(score + 1)
            console.log("win")

            setFinished(false)
            setSwalRightState(false)
            setWon(false)
            setRightWon(false)

            setChoice("")
          }, 2100);

          
        
      }
      else {


        setSwalRightState(true)
        setWon(false)
        setFinished(true)
        setLeftWon(true)
        setLostGame(true)

        setTimeout(() => {

          setScore(0)
          console.log("lose")



          if (score > highscore) {
            setHighscore(score)
            if(props.userId != 0){
              SendHighscore(score, props.userId)
              .then(() => {
                setHighscore(score)
              })

              SendGamesPlayed(props.userId)
            }
          }
          SendGamesPlayed(props.userId)
          setFinished(false)
          setSwalRightState(false)
          setWon(false)
          setLeftWon(false)
          setLostGame(false)

          setChoice("")
        }, 2100);


      } 
      setChoice("")
    }  

  }, [choice])

  

  useEffect(() => {
    if(props.userId != 0){
      console.log("send highscore")
      GetHighscore(props.userId)

        .then((data) => {
          console.log(data)
          if(data.Highscore != null){
            setHighscore(data.Highscore)
          }
      })
    }
  }, [props.userId])




  return (
    <>

      <h1 className='text-center'>
        Guess Which food has more votes
      </h1>

    {/* <img src={img} alt="" /> */}
      {finished ? (
              <div className="transparent-overlay">
              </div>
      ) : null}        
        

      <div className='game-container'>

        <div className='box-container'>


            <GeussBox boxSide={"left"} setScore={setScore} score={score}  setLeftVotes={setLeftVotes} setChoice={setChoice}/>
            
            {finished  ? leftWon ? <h2 className='wonVotes'>Votes : {leftVotes} </h2> : <h2 className='lostVotes'>Votes : {leftVotes}</h2> : <h2>Votes : {leftVotes}</h2>}
            
            {swalLeftState ? won ? <SwalWinComponentLeft />: <SwalLoseComponentLeft />  : null}
            
            <div id='swalBoxleft'>

            </div>
        </div>
        <div className='scores'>


            <h1 className='text-center'> High Score : {highscore} 
            
            {props.userId == 0 ? <p className='small-text'> (log in to save highscore)</p> : null}
            
            </h1>
            
             
           
            <div className='score-container'>
              <h1 className='text-center'> Score : {score}</h1>
              <FadeInOut show={won} duration={500} style={extraStyles}> + 1 </FadeInOut>
              <FadeInOut show={lostGame} duration={500} style={extraStylesLost}> - {score} </FadeInOut>
            </div>


        </div>

        <div className='box-container'>

            <GeussBox boxSide={"right"} setScore={setScore} score={score}  setRightVotes={setRightVotes} setChoice={setChoice}/>

            {finished  ? rightWon ? <h2 className='wonVotes'>Votes : {rightVotes} </h2> : <h2 className='lostVotes'>Votes : {rightVotes}</h2> : <h2>Votes : ???</h2> }

            {swalRightState ? won ? <SwalWinComponentRight />: <SwalLoseComponentRight />  : null}
           
            <div id='swalBoxright'>

            </div>
        </div>

      </div>

    </>
  )
}

export default Geuss