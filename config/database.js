import mongoose from "mongoose";

//const DATABASE_URL = "mongodb+srv://amakashmishra6:AkashMishra@123@cluster0.v4rlyjl.mongodb.net/mba?retryWrites=true"

export const connectDB = async () => {
    const {connection} = await mongoose.connect (process.env.DATABASE_URL);
    console.log(`DataBase is Connected With ${connection.host}`);
}
