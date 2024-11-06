import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";

import connectDB from "./mongodb/connect.js";
import postRoutes from './routes/postRoutes.js'
import stableDiffusion from './routes/stableDiffusion.js'

dotenv.config();

const app = express();

// CORS configuration: Allow all origins (or specify your frontend URL later)
const corsOptions = {
  origin: '*',  // Allow all origins temporarily (replace with specific domain in production)
  methods: ['GET', 'POST', 'OPTIONS'],  // Allow methods including OPTIONS for preflight
  allowedHeaders: ['Content-Type', 'Authorization']  // Allowed headers
};

// Apply CORS globally to all routes
app.use(cors(corsOptions));

app.use(express.json({ limit: "50mb" }));

app.use('/api/v1/post',postRoutes)
app.use('/api/v1/stable-diffusion',stableDiffusion)

app.get("/", async (req, res) => {
  res.send("hello from AIRimg");
});

const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL);
    app.listen(8080, () => {
      console.log("server has started...");
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
