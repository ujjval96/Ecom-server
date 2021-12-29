import mongoose from "mongoose";

function connectDb(url: any){
  return mongoose.connect(url)
}

export default connectDb;