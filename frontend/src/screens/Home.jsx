import { useState, useEffect} from 'react'
import "../styles/home.css"
import ImageBox from '../components/home/ImageBox.jsx'
import ImageComponent from '../components/home/ImgComponent.jsx'

const Home = () => {

  const [score, setScore] = useState(0)
  const [loading, setLoading] = useState(true)
  const [two, setTwo] = useState("")
  const [one, setOne] = useState("")
  const [imgPosition, setImgPosition] = useState("left")
  const [firstLoad, setFirstLoad] = useState(true)


  
  useEffect(() => {

    const timer = setTimeout(() => {

      console.log("first og");
      setTwo("2...")
      setImgPosition("center")
      
      
        setTimeout(() => {

          console.log("inner2");
          setOne("1...")
          setImgPosition("right")

            setTimeout(() => {
              console.log("inner3");
              setLoading(false);

              setOne("")
              setTwo("")
              setImgPosition("left")
            }, 1000);

      }, 1000)

    }, 1000);
    return () => clearTimeout(timer);

  }, [score]);
  

  if (!loading){ 




    return (
      <>

        <h1 className='text-center'>
          Click the food you'd rather eat.
        </h1>
        
        <div className='game-container'>

          <div className='box-container'>

              <ImageBox boxNum={"box1"} setScore={setScore} score={score} setLoading={setLoading}/>
          </div>

          <div className='box-container'>

              <ImageBox boxNum={"box2"} setScore={setScore} score={score} setLoading={setLoading}/>
          </div>

        </div>

      </>
    )
  } else {



    return (
      <>
        <h1 className='text-center bigFont'> Serving food in 3...{two}{one}</h1>
        {/* <h1 className='text-center bigFont'> Serving food in 3...2...1...</h1> */}

        <br></br>
        {/* <h1 className='text-center'>{countdown}</h1> */}
        <br></br> 
   

        <div className='img-box'>
          <ImageComponent imgPosition={imgPosition}/>
        </div>


          
      </>

    )

  }
}

export default Home