import axios from 'axios'

export const VoteMeal = (mealID) => {
    return axios
    .post(`http://localhost:9090/mealvote`,  
        {
            mealID: mealID

        })
    .then((response) => {
        console.log(response.data)
        return response.data
    })
}
