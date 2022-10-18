import {useState, useEffect } from 'react'
import axios from 'axios'
import "../../styles/home.css"
// import { SaveMeal } from '../../proxies/SaveMeal'
import { VoteMeal } from '../../proxies/VoteMeal'

//www.themealdb.com/api/json/v1/1/random.php

const ImageBox = (props) => {

    const [mealName, setMealName] = useState("")
    // const [mealCategory, setMealCategory] = useState("")
    const [mealImageURL, setMealImageURL] = useState("")
    const [mealID, setMealID] = useState("")

    const [value, setValue] = useState(0);
    // This will launch only if propName value has chaged.
    useEffect(() => { setValue(props.score) }, [props.score]);

    useEffect(() => {
        const fetchData = async () => {

            axios.get('http://localhost:9090/randommeal')
            .then(function (response) {
                
                setMealName(response.data.Meal.Name)
                // setMealCategory(response.data.Meal.Category)
                setMealImageURL(response.data.Meal.Image_url)
                setMealID(response.data.Meal.Meal_id)
                //  SaveMeal(
                //     response.data.Meal.Name, 
                //     response.data.Meal.Category, 
                //     response.data.Meal.Image_url, 
                //     response.data.Meal.Meal_id)
                
            });


            
        }

        fetchData()
        .catch(console.error)



    }, [value]) ;



    
    function handleClick(){
        props.setScore(props.score + 1)
        setValue (value  + 1)
        console.log(`clicked : ${props.boxNum}`)
        VoteMeal(mealID)
    }    
 

  return (
    <>
        <h2 className='nameBox'>{mealName}</h2>
        <br></br>
        <img onClick={() =>handleClick(mealID)} className="foodImage" src={mealImageURL} alt="food pic" />
        <br></br>
    </>
  )
}

export default ImageBox