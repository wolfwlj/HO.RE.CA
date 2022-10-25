import React from 'react'

const UserLbRow = (props) => {
  return (
    <>

        <tr>
            <td><p className='lb-text text-center'>{props.rank}</p></td>
            <td><p className='lb-text text-center'>{props.Highscore}</p></td>
            <td><p className='lb-text text-center'>{props.GamesPlayed}</p></td>

            <td><p className='lb-text text-center'>{props.Username}</p></td>


        </tr>
    


    </>




  )
}

export default UserLbRow