

import axios from 'axios'

 


export const GetHighscore = (id) => {

    return axios
    .get(`http://localhost:9090/highscore/${id}`)
    .then((response) => {
        return response.data
    })

}
