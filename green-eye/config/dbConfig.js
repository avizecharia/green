const mongoose = require('mongoose')

<<<<<<< HEAD

const connectToMongo = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/green_eye')
        console.log("successfully connected to MongDB =)")
    } catch (err) {
        console.log(err)
    }
}


=======
const connectToMongo = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/green_eye')
        console.log("successfully connect to mongo");
        
        
    } catch (err) {
        console.log(err);
        
    }
}
>>>>>>> 8643634203b065bea5e6fec3cacb5cbe7b655c43
module.exports = {
    connectToMongo
}