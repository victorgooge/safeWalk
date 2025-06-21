import express from "express"
import dotenv from "dotenv"

import { connectDB } from "./config/db.js";

dotenv.config();

// app
const app = express();
const PORT = process.env.PORT;

connectDB().then(() => {
        app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });    
});
