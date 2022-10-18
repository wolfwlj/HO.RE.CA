import React from 'react'

const LbRow = (props) => {
  return (
    <>

        <tr>
            <td><p className='lb-text text-center'>{props.rank}</p></td>
            <td><p className='lb-text text-center'>{props.votes}</p></td>
            <td><p className='lb-text text-center'>{props.name}</p></td>
            <td>
                <img className='lb-img-thumb' src={props.image} alt="asd"/>
            </td>

        </tr>
    


    </>




  )
}

export default LbRow