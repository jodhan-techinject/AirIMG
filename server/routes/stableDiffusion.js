import express from "express";
import axios from "axios";
import * as dotenv from "dotenv";

dotenv.config();

const router = express.Router();

router.post('/', async (req, res) => {
    const { prompt, negative_prompt = "bad quality", width = 512, height = 512 } = req.body;

    const options = {
        method: 'POST',
        url: 'https://modelslab.com/api/v6/realtime/text2img',
        headers: {
            'Content-Type': 'application/json'
        },
        data: {
            key: process.env.STABLE_DIFFUSION_API_KEY,
            prompt,
            negative_prompt,
            width,
            height,
            safety_checker: false,
            seed: null,
            samples: 1,
            base64: false,
            webhook: null,
            track_id: null
        }
    };

    try {
        const response = await axios(options);
        const imageUrl = response.data.output[0];

        // Send back the URL of the generated image
        res.status(200).json({ imageUrl });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message || "Image generation failed" });
    }
});

export default router;
