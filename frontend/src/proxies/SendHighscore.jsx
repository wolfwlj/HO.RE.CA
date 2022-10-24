import React from 'react'
import axios from 'axios'

export const SendHighscore = ( Highscore, id) => {
    return axios
    .post(`http://localhost:9090/sendhighscore`,  
        {
            id : id,
            Highscore: Highscore,

        }
        ,
        {
            withCredentials: true
        })
    .then((response) => {
        console.log(response.data)
        return response.data
    })
}
