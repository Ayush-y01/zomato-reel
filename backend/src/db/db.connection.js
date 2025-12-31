const mongoose  = require("mongoose");

function connectDB() {
    mongoose.connect(process.env.MONGODB_URL)
    .then(() => {
        console.log('mongoDb connected..');
    })
    .catch((err) => {
        console.log(err,"database connection error!!!");
        
    })
}

module.exports = connectDB;