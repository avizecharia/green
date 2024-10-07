const mongoose = require('mongoose')

const connectToMongo = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/green_eye')
        console.log("successfully connect to mongo");
        
        
    } catch (err) {
        console.log(err);
        
    }
}
module.exports = {
    connectToMongo
}