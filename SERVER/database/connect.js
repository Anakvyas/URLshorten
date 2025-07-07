const mongoose  = require("mongoose")
require('dotenv').config()

const ConnectDB = async() =>{
    try{
        await mongoose.connect(process.env.DATABASE_URL);
        console.log("Database connected Successfully!!!")
    }catch(e){
        console.log("Error is "+ e);
    }
}

module.exports = ConnectDB;