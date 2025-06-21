import mongoose from "mongoose"

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("mongoDB Connection Established!");
    } catch (error) {
        console.log("Error connecting to mongoDB:", error);
        process.exit(1);
    }
}
