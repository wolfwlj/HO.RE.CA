
import axios from 'axios'

 


export const GetMeals = (offset) => {

    return axios
    .get(`http://localhost:9090/getmeals/${offset}`)
    .then((response) => {
        return response.data
    })

}
