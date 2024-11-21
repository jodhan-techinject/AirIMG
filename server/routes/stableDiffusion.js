import express from "express";
import * as dotenv from "dotenv";

dotenv.config();

const router = express.Router();

router.post('/', async (req, res) => {
    const { prompt } = req.body;

    const data = {
        inputs: prompt,
    };

    try {
        // Call Hugging Face API
        const response = await fetch("https://api-inference.huggingface.co/models/black-forest-labs/FLUX.1-dev", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${process.env.HUGGING_FACE_API_KEY}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error(`API error: ${response.statusText}`);
        }

        // Convert response to arrayBuffer (for binary data)
        const arrayBuffer = await response.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);

        // Optionally: convert to base64 string
        const base64Image = buffer.toString('base64');

        // Optionally: send back the base64 image
        res.status(200).json({
            imageUrl: `data:image/png;base64,${base64Image}`,
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message || "Image generation failed" });
    }
});

export default router;