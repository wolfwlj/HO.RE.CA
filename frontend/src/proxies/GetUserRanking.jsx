
import axios from 'axios'

 


export const GetRankings = (offset) => {

    return axios
    .get(`http://localhost:9090/rankings/${offset}`)
    .then((response) => {
        return response.data
    })

}
