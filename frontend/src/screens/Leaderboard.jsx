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
        if(page !== 0 && page * 25 + 25 > count){
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

        <div className='pagination'>
            <div className='pagination-row1'>
                <button className='pagination-button' onClick={handlePrev} disabled={disablePrev}>Prev</button>
                <p>Page {page + 1}</p>

                <button className='pagination-button' onClick={handleNext} disabled={disableNext}>Next</button>

            </div>
            <div className='pagination-row2'>
                <p>Showing {offset + 1} to {offset + 25} of {count} meals</p>
            </div>
            {/* <p>total meals : {count}</p> */}
        </div>



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
                    <LbRow key={meal.Meal_id} rank={index + 1 + offset} votes={meal.Votes} name={meal.Name} image={meal.Image_url}/>
                )}


            </tbody>


        </table>       
        
        <div className='pagination'>
            <div className='pagination-row1'>
                <button className='pagination-button' onClick={handlePrev} disabled={disablePrev}>Prev</button>
                <p>Page {page + 1}</p>

                <button className='pagination-button' onClick={handleNext} disabled={disableNext}>Next</button>

            </div>
            <div className='pagination-row2'>
                <p>Showing {offset + 1} to {offset + 25} of {count} meals</p>
            </div>
            {/* <p>total meals : {count}</p> */}
        </div>
        
    </>
  )
}

export default Leaderboard