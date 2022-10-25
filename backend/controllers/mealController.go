package controllers

import (
	"HORECA/initializers"
	"HORECA/models"

	"github.com/gin-gonic/gin"
)

func MealCreate(c *gin.Context) {

	var body struct {	
		Name	string
		Category	string
		Image_url	string
		Api_img_id	uint
	}

	c.Bind(&body)

	meal := models.Meal{
		Name: body.Name,
		Category: body.Category,
		Image_url: body.Image_url,
		Api_img_id: body.Api_img_id,

	}
	var exists string
	initializers.DB.Raw("SELECT name FROM meals WHERE name = ?", body.Name).Scan(&exists)

	if exists != "" {
		c.JSON(400, gin.H{
			"message": "Meal already exists",
		})
		return
	}

	// 	if  exists == nil {
	// 	c.JSON(400, gin.H{
	// 		"error": "Meal already exists",
	// 	})
	// 	return
	// }

	result := initializers.DB.Create(&meal)



	if result.Error != nil {
		c.Status(400)
		return
	}

	c.JSON(200, gin.H{
		"message": "meal created successfully",
		"meal":   meal,
	})

}




func MealVote(c *gin.Context) {


	var body struct {
		MealID         uint
	}

	c.Bind(&body)

	tx := initializers.DB.Begin()

		var meal models.Meal
		tx.First(&meal, body.MealID)

		if meal.Meal_id == 0 {
			c.JSON(400, gin.H{
				"message": "Meal not found",
			})
			return
		}

		meal.Votes = meal.Votes + 1

		tx.Save(&meal)

	tx.Commit()



	c.JSON(200, gin.H{
		"message": "Meal updated successfully",
		"Meal":   meal,
	})
}


func RandomMeal(c *gin.Context) {




	var Meal models.Meal


	initializers.DB.Order("RAND()").First(&Meal)
	
	c.JSON(200, gin.H{
		"Meal": Meal,
	})

}


func GetMeals(c *gin.Context) {

	offset := c.Param("offset")


	var Meal []models.Meal
	var count int64

	
	initializers.DB.Model(&models.Meal{}).Count(&count)

	initializers.DB.Raw("SELECT * FROM meals ORDER BY votes DESC LIMIT 25 OFFSET ?", offset).Scan(&Meal)

	c.JSON(200, gin.H{
		"Meal": Meal,
		"count": count,

	})

}