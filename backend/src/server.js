import express from "express"
import dotenv from "dotenv"

import { connectDB } from "./config/db.js";

dotenv.config();

// express api
const app = express();
const PORT = process.env.PORT;

app.use('/api', (_, res) => {
    res.send("API Service");
});

// mongoDB connection
connectDB().then(() => {
        app.listen(PORT, () => {
        console.log(`Backend server running at http://localhost:${PORT}/api`);
    });    
});
