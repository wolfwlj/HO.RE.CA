package models

type Meal struct {
	Meal_id    uint   `gorm:"primaryKey"`
	Name       string `gorm:"type:text"`
	Category   string `gorm:"type:text"`
	Image_url  string `gorm:"type:text"`
	Api_img_id uint   `gorm:"type:int"`
	Votes      uint   `gorm:"type:int" default:"0"`
}
