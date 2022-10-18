import { useState, useEffect} from 'react'
import "../styles/app.css"
import "../styles/leaderboard.css"
import LbRow from '../components/leaderboard/LbRow'
import { GetMeals } from '../proxies/GetMeals'

const Leaderboard = () => {

    const [orderedMeals, setOrderedMeals] = useState([])
    const [count, setCount] = useState(0)
    const [page, setPage] = useState(0)
    const [offset, setOffset] = useState(0)
 
    const [disableNext, setDisableNext] = useState(false)
    const [disablePrev, setDisablePrev] = useState(true)


    const fetchOrderedMeals = () => {
        console.log(page)
        if(page === 0){
            setDisablePrev(true)
        }
        if(page != 0 && page * 25 + 25 > count){
            setDisableNext(true)
        }   



        let offset = page * 25

        GetMeals(offset)
        .then((data) => {
            setOrderedMeals(data.Meal)
            setCount(data.count)
            setOffset(offset)
        })
    }

    useEffect(() => {
        fetchOrderedMeals()
      }, [page]);

    const handleNext = () => {
        setPage(page + 1)


        setDisablePrev(false)



    }
    const handlePrev = () => {
        if(page > 0){

            setPage(page -1 )
 
        }

        setDisableNext(false)


    }
    // const test = ()     => {
    //     console.log(page)

    // }
    
    console.log(count)
  return (
    <>
        <h1 className='text-center'>
            Leaderboard
        </h1>
        {/* TODO : pagination */}
        <table className='lb-table'>
            <thead>
                <tr>
                    <th> <p className='lb-text text-center'>Rank</p></th>
                    <th> <p className='lb-text text-center'>Votes</p></th>
                    <th> <p className='lb-text text-center'>Food Name</p></th>
                    <th> <p className='lb-text text-center'>Food image</p></th>
                </tr>
            </thead>
            <tbody>
                {orderedMeals.map((meal, index) => 
                    <LbRow key={meal.Meal_id} rank={index+ 1 + offset} votes={meal.Votes} name={meal.Name} image={meal.Image_url}/>
                )}


            </tbody>


        </table>       
        
        <div className='pagination'>
            <button disabled={disablePrev} className='btn btn-primary' onClick={handlePrev}>Prev</button>
            <button disabled={disableNext} className='btn btn-primary' onClick={handleNext}>Next</button>
            <p>current page : {page + 1}</p>
            <p>current meal rank range : {offset} - {offset + 25}</p>
            <p>total meals : {count}</p>
        </div>
        
    </>
  )
}

export default Leaderboard