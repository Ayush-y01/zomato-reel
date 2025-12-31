const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    fullname: {
        type:String,
        require: true,
    },
    email: {
        type:String,
        require: true,
        unique:true
    },
    password: {
        type:String,
        select: false
    }
},{
    timestamps:true
})

const userModel = mongoose.model('User',userSchema);

module.exports = userModel;