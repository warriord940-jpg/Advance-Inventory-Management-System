const mongoose=require("mongoose")


require("dotenv").config()

module.exports.MongoDBconfig=()=>{
    const mongoUrl = process.env.MONGODB_URL || process.env.MONGO_URI || "mongodb://127.0.0.1:27017/inventory_db";

    mongoose.connect(mongoUrl)
    .then(()=>{
        console.log("connected to database successfully")
    })
    .catch((err)=>{
        console.log("MonogoDB Connection Error",err)
    })

}
