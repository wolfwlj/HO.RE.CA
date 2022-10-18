import React from 'react'
import axios from 'axios'

export const SaveMeal = (mealName, mealCategory, mealImageURL, mealID) => {
    return axios
    .post(`http://localhost:9090/meal`,  
        {
            Name : mealName,
            Category: mealCategory,
            Image_url: mealImageURL,
            Api_img_id: mealID

        })
    .then((response) => {
        console.log(response.data)
        return response.data
    })
}
