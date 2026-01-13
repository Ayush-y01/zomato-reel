const express = require('express')
const router = express.Router();
const authMiddlerware = require('../middlewares/auth.middleware.js')
const foodController = require('../controllers/food.controller.js')
const multer = require('multer');


const upload = multer({
    Storage: multer.memoryStorage(),
});


router.post('/',authMiddlerware.authFoodPartnerMiddleware, upload.single('video') , foodController.createFood)

router.get('/',
    authMiddlerware.authUserMiddleware,
    foodController.getFoodItem
)

module.exports = router