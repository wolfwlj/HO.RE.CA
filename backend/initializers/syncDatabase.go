package initializers

import (
	"HORECA/models"
)

func SyncDatabase() {

	DB.AutoMigrate(&models.Meal{})
}
