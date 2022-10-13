import { useState } from 'react'
import "../styles/home.css"
import ImageBox from '../components/game/ImageBox.jsx'
const Home = () => {

  const [score, setScore] = useState(0)





  return (
    <>

      <h1 className='text-center'>
        Click the food you'd rather eat.
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

export default Home