import {useState, useEffect } from 'react'
import axios from 'axios'
import "../../styles/home.css"


const ImageBox = (props) => {

    const [mealName, setMealName] = useState("")
    const [mealImageURL, setMealImageURL] = useState("")
    const [mealID, setMealID] = useState("")
    const [mealVotes, setMealVotes] = useState(0)
    const [value, setValue] = useState(0);
    const [side, setSide] = useState(false)
    const [sideString, setSideString] = useState("")

    // // This will launch only if propName value has chaged.
    // useEffect(() => { 
    //     setValue(props.score) 

    // }, [props.score]);

    useEffect(() => {



        
        const fetchData = async () => {

            axios.get('http://localhost:9090/randommeal')
            .then(function (response) {
                
                setMealName(response.data.Meal.Name)
                // setMealCategory(response.data.Meal.Category)
                setMealImageURL(response.data.Meal.Image_url)
                setMealID(response.data.Meal.Meal_id)
                setMealVotes(response.data.Meal.Votes)
                //  SaveMeal(
                //     response.data.Meal.Name, 
                //     response.data.Meal.Category, 
                //     response.data.Meal.Image_url, 
                //     response.data.Meal.Meal_id)

                if(props.boxSide === "left"){
                    props.setLeftVotes(response.data.Meal.Votes)
        
        
        
                    setSide(true)
                    setSideString("left")
        
                } else if(props.boxSide === "right"){
        
                    props.setRightVotes(response.data.Meal.Votes)
        
                    
                    setSide(false)
                    setSideString("right")
                }   


                
            });


            
        }

        fetchData()
        .catch(console.error)



    }, [props.score]) ;


    // function sendLeft(leftVotes){
    //     props.setLeftVotes(leftVotes)
    // }
    // function sendRight(rightVotes){
    //     props.setRightVotes(rightVotes)
    // }
    function handleClick(){







        console.log("clicked")
            props.setChoice(sideString)



    }    

  return (
    <>
        <h2 className='nameBox'>{mealName}</h2>
        <br></br>

        <img onClick={() =>handleClick()} className="foodImage" src={mealImageURL} alt="food pic" />
        <br></br>
 
  
    </>
  )
}

export default ImageBox