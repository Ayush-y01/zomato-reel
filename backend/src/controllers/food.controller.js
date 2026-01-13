const foodModel = require("../models/food.model.js");
const storageService = require('../services/storage.service.js')
const { v4: uuid } = require('uuid')

async function createFood(req, res) {

    const fileUploadResult = await storageService.uploadFile(req.file.buffer, uuid())


    const foodItem = await foodModel.create({
        name: req.body.name,
        description: req.body.description,
        video: fileUploadResult.url,
        foodPartner: req.foodPartner._id
    })
    
    
    res.status(201).json({
        message:"food created successfully",
        food: foodItem
    })
}

async function getFoodItem(req, res, next) {
    const foodItem = await foodModel.find({})

    res.status(200).json({
        message:"Food item Fetched successfully",
        foodItem
    })
}


module.exports = {
    createFood,
    getFoodItem
};