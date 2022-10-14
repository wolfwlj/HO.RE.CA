import React from 'react'
import "../styles/app.css"
import "../styles/leaderboard.css"
const Leaderboard = () => {
  return (
    <>
        <h1 className='text-center'>
            Leaderboard
        </h1>
        {/* TODO : pagination */}
        <table className='lb-table'>
            <thead>
                <tr>
                    <th> <p className='text-center'>Rank</p></th>
                    <th> <p className='text-center'>Votes</p></th>
                    <th> <p className='text-center'>Food Name</p></th>
                    <th> <p className='text-center'>Food image</p></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><p className='text-center'>1</p></td>
                    <td><p className='text-center'>324</p></td>
                    <td><p className='text-center'>SOMETHINGGG</p></td>
                    <td>
                        <img className='lb-img-thumb' src='https://i.imgur.com/Apgosv5.jpg' alt="asd"/>
                    </td>

                </tr>
                <tr>
                    <td><p className='text-center'>2</p></td>
                    <td><p className='text-center'>224</p></td>
                    <td><p className='text-center'>SOMETHINGGG2</p></td>
                    <td>
                        <img className='lb-img-thumb' src='https://i.imgur.com/Apgosv5.jpg' alt="asd"/>
                    </td>

                </tr>
                <tr>
                    <td><p className='text-center'>3</p></td>
                    <td><p className='text-center'>124</p></td>
                    <td><p className='text-center'>SOMETHINGGG3</p></td>
                    <td>
                        <img className='lb-img-thumb' src='https://i.imgur.com/Apgosv5.jpg' alt="asd"  style={
                            {
                                width: "100px",
                                height: "100px"
                            }
                        }/>
                    </td>

                </tr>
                <tr>
                    <td><p className='text-center'>3</p></td>
                    <td><p className='text-center'>124</p></td>
                    <td><p className='text-center'>SOMETHINGGG3</p></td>
                    <td>
                        <img className='lb-img-thumb' src='https://i.imgur.com/Apgosv5.jpg' alt="asd"  style={
                            {
                                width: "100px",
                                height: "100px"
                            }
                        }/>
                    </td>

                </tr>
                <tr>
                    <td><p className='text-center'>3</p></td>
                    <td><p className='text-center'>124</p></td>
                    <td><p className='text-center'>SOMETHINGGG3</p></td>
                    <td>
                        <img className='lb-img-thumb' src='https://i.imgur.com/Apgosv5.jpg' alt="asd"  style={
                            {
                                width: "100px",
                                height: "100px"
                            }
                        }/>
                    </td>

                </tr>
                <tr>
                    <td><p className='text-center'>3</p></td>
                    <td><p className='text-center'>124</p></td>
                    <td><p className='text-center'>SOMETHINGGG3</p></td>
                    <td>
                        <img className='lb-img-thumb' src='https://i.imgur.com/Apgosv5.jpg' alt="asd"  style={
                            {
                                width: "100px",
                                height: "100px"
                            }
                        }/>
                    </td>

                </tr>
                <tr>
                    <td><p className='text-center'>3</p></td>
                    <td><p className='text-center'>124</p></td>
                    <td><p className='text-center'>SOMETHINGGG3</p></td>
                    <td>
                        <img className='lb-img-thumb' src='https://i.imgur.com/Apgosv5.jpg' alt="asd"  style={
                            {
                                width: "100px",
                                height: "100px"
                            }
                        }/>
                    </td>

                </tr>
                <tr>
                    <td><p className='text-center'>3</p></td>
                    <td><p className='text-center'>124</p></td>
                    <td><p className='text-center'>SOMETHINGGG3</p></td>
                    <td>
                        <img className='lb-img-thumb' src='https://i.imgur.com/Apgosv5.jpg' alt="asd"  style={
                            {
                                width: "100px",
                                height: "100px"
                            }
                        }/>
                    </td>

                </tr>            
            </tbody>



        </table>       
    </>
  )
}

export default Leaderboard