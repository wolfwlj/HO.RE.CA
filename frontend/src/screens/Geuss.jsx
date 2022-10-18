import { useState } from 'react'
import "../styles/home.css"
import ImageBox from '../components/game/ImageBox.jsx'
const Geuss = () => {

  const [score, setScore] = useState(0)


  return (
    <>

      <h1 className='text-center'>
        Which food do people like more?
      </h1>

      
      <div className='game-container'>

        <div className='box-container'>

            <ImageBox boxNum={"box1"} setScore={setScore} score={score}/>
        </div>

        <div className='box-container'>

            <ImageBox boxNum={"box2"} setScore={setScore} score={score}/>
        </div>

      </div>
      <h1 className='text-center'> Score : {score} </h1>

    </>
  )
}

export default Geuss