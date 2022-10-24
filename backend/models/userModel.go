package models

import "gorm.io/gorm"

type User struct {
	gorm.Model
	Username   string `gorm:"unique;type:varchar(255)"`
	Password   string `json:"-"`
	Highscore  uint   `gorm:"type:int" default:"0"`
	GamesPlayed uint   `gorm:"type:int" default:"0"`
	
}