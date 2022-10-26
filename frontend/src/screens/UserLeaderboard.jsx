import { useState, useEffect} from 'react'
import "../styles/app.css"
import "../styles/leaderboard.css"
import UserLbRow from '../components/leaderboard/UserLbRow'
import { GetRankings } from '../proxies/GetUserRanking'

const UserLeaderboard = () => {

    const [orderedUsers, setOrderedUsers] = useState([])
    const [count, setCount] = useState(0)
    const [page, setPage] = useState(0)
    const [offset, setOffset] = useState(0)
    
    const [disableNext, setDisableNext] = useState(false)
    const [disablePrev, setDisablePrev] = useState(true)


    const fetchRankings = () => {
        console.log(page)
        if(page === 0){
            setDisablePrev(true)
        }
        if(page !== 0 && page * 25 + 25 >= count || count < 25) {
            setDisableNext(true)
        }   

        let offset = page * 25

        GetRankings(offset)
        .then((data) => {
            console.log(data)
            setOrderedUsers(data.User)
            setCount(data.count)
            setOffset(offset)
        })
    }

    useEffect(() => {
        fetchRankings()
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

    
    console.log(count)
  return (
    <>
    
        <h1 className='text-center'>
        Player Leaderboard
        </h1>

        <div className='pagination'>
            <div className='pagination-row1'>
                <button className='pagination-button' onClick={handlePrev} disabled={disablePrev}>Prev</button>
                <p>Page {page + 1}</p>

                <button className='pagination-button' onClick={handleNext} disabled={disableNext}>Next</button>

            </div>
            <div className='pagination-row2'>
                <p>Showing {offset + 1} to {offset + 25} of {count} players</p>
            </div>
            {/* <p>total meals : {count}</p> */}
        </div>



        <table className='lb-table'>
            <thead>
                <tr>
                    <th> <p className='lb-text text-center'>Rank</p></th>
                    <th> <p className='lb-text text-center'>Highscore</p></th>
                    <th> <p className='lb-text text-center'>Games Played</p></th>
                    <th> <p className='lb-text text-center'>Username</p></th>
                </tr>
            </thead>
            <tbody>
                {orderedUsers.map((user, index) => 
                    <UserLbRow  key={user.ID} 
                            rank={index + 1 + offset} 
                            Highscore={user.Highscore} 
                            GamesPlayed={user.GamesPlayed} 
                            Username={user.Username} />
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
                <p>Showing {offset + 1} to {offset + 25} of {count} players</p>
            </div>
            {/* <p>total meals : {count}</p> */}
        </div>
        
    </>
  )
}

export default UserLeaderboard