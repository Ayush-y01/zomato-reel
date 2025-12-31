const express = require('express');
const { route } = require('../app');
const router = express.Router();
const authController = require('../controllers/auth.controller.js');


//user auth apis
router.post('/user/register',authController.registerUser)
router.post('./user/login',authController.loginUser)
router.get('./user/logout',authController.logoutUser)


// food partner auth Apis
router.post('/food-partner/register', authController.registerFoodPartner)
router.post('/food-partner/login', authController.loginFoodPartner)
router.post('/food-partner/logout', authController.logoutFoodPartner)


module.exports =  router;