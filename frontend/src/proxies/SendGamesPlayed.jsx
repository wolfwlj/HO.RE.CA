import React from 'react'
import axios from 'axios'

export const SendGamesPlayed = ( id ) => {
    return axios
    .post(`http://localhost:9090/gameplayed`,  


        {
            id : id

        },
        {
            withCredentials: true
        }
        
        )
    .then((response) => {
        console.log(response.data)
        return response.data
    })
}
