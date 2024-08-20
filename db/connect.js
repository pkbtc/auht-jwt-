import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDb = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URL);
        console.log("MongoDB connected");
        return connection;
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        throw error;  // Rethrow the error to be caught by the caller
    }
};

export default connectDb;
