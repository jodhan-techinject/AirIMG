import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";

import connectDB from "./mongodb/connect.js";
import postRoutes from './routes/postRoutes.js'
import stableDiffusion from './routes/stableDiffusion.js'

dotenv.config();

const app = express();
app.use(cors());

app.use(express.json({ limit: "50mb" }));

app.use('/api/v1/post',cors({
  origin: 'https://air-img.vercel.app/',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}),postRoutes)

app.use('/api/v1/stable-diffusion',cors({
  origin: 'https://air-img.vercel.app/',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}),stableDiffusion)

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
