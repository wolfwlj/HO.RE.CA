import {useState, useEffect } from 'react'
import axios from 'axios'
import "../../styles/home.css"
//www.themealdb.com/api/json/v1/1/random.php

const ImageBox = (props) => {

    const [mealName, setMealName] = useState("")
    const [mealImage, setMealImage] = useState("")
    const [value, setValue] = useState(0);
    // This will launch only if propName value has chaged.
    useEffect(() => { setValue(props.score) }, [props.score]);

    useEffect(() => {
        axios.get('http://www.themealdb.com/api/json/v1/1/random.php')
        .then(function (response) {
            console.log(response.data);
            
            setMealName(response.data.meals[0].strMeal)
            setMealImage(response.data.meals[0].strMealThumb)

        });
    }, [value]) ;

   

    
    function handleClick(){
        props.setScore(props.score + 1)
        setValue (value  + 1)
        console.log(`clicked : ${props.boxNum}`)

    }    
 

  return (
    <>
        <h2 className='nameBox'>{mealName}</h2>
        <br></br>
        <img onClick={handleClick} className="foodImage" src={mealImage} alt="food pic" />
        <br></br>
    </>
  )
}

export default ImageBox