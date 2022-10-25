package main

import (
	"HORECA/controllers"
	"HORECA/initializers"
	"HORECA/middleware"
	"fmt"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func init() {
	initializers.LoadEnvVariables()
	initializers.ConnectDB()
	initializers.SyncDatabase()
}
func main() {
	router := gin.Default()





	router.Use(cors.New(cors.Config{
		// AllowOrigins: []string{"https://movie.wolfolthuis.com"},
		AllowOrigins: []string{"http://localhost:3000"},
		AllowMethods: []string{"PUT", "PATCH", "GET", "POST", "DELETE", "OPTIONS"},

		//chage same site to none
		AllowHeaders:     []string{"Origin", "Authorization", "Content-Type", "X-Requested-With", "Accept"},
		ExposeHeaders:    []string{"Content-Length"},
		AllowCredentials: true,
	}))

	// room route(s) : ----------------------------------------------------------
		router.POST("/meal", controllers.MealCreate)
		router.POST("/mealvote", controllers.MealVote)
		router.GET("/randommeal", controllers.RandomMeal)
		router.GET("/getmeals/:offset", controllers.GetMeals)

		// router.GET("/meal", controllers.MealIndex)
		// router.GET("/room/:id", middleware.RequireAuth, controllers.RoomShow)
		// router.PUT("/room/:id", middleware.RequireAuth, controllers.RoomUpdate)
		// router.DELETE("/room/:id", middleware.RequireAuth, controllers.RoomDelete)
	// ------- End of lessen routes -----------------------------------------------



	//make a test route
	// router.GET("/test", func(c *gin.Context) {
	// 	c.JSON(200, gin.H{
	// 		"message": "test",
	// 	})
	// })

	// auth router : --------------------------------------------------------------
	router.POST("/signup", controllers.Signup)
	router.POST("/login", controllers.Login)

	router.GET("/rankings/:offset", controllers.GetUserRankings)

	// protected auth routes :
	router.GET("/validate", middleware.RequireAuth, controllers.Validate)
	router.POST("/logout", middleware.RequireAuth, controllers.Logout)

	router.POST("/sendhighscore", middleware.RequireAuth, controllers.Highscore)
	router.POST("/gameplayed", middleware.RequireAuth, controllers.Played)

	router.GET("/highscore/:id", controllers.GetHighscore)

	//-------------------End of auth routes----------------------------------------





	fmt.Println("dsadas")
	router.Run(":9090")

}
