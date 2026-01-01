const foodPartnerModel = require('../models/foodpartner.model');
const foodParterModel = require('../models/foodpartner.model')
const jwt = require("jsonwebtoken")


async function authFoodPartnerMiddlerware(req, res, next) {
    
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({
            message: "please login first"
        })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        const foodPartner = await foodPartnerModel.findById(decoded._id)

        req.foodPartner = foodPartner

        next();

    } catch (error) {
        return res.status(401).json({
                message: "Invalid token"
            })
        
    }
}


module.exports = {
    authFoodPartnerMiddlerware
}