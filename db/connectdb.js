import mongoose from "mongoose";


const connectDB=async(dburl,dbName)=>{
    try {
        await mongoose.connect(dburl+dbName);
        console.log("connected to db "+dbName);
        
    } catch (error) {
        console.log("err connecting in db"+dbName);
    }
}

export default connectDB