const mongoose = require('mongoose');
const colors=require('colors');

const connectDb= async()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL)
        console.log(`Server running on ${mongoose.connection.host}`.bgYellow.white);
    } catch (error) {
        console.log(`${error}`.bgRed);
    }
}

module.exports=connectDb;