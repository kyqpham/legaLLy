import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import OpenAI from "openai";

console.log("OPENAI_API_KEY =", process.env.OPENAI_API_KEY);

const app = express();

// Allow requests from anywhere (for testing with curl / frontend)
app.use(cors());

// Allow JSON parsing
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.post("/summarize", async (req, res) => {
  const { text } = req.body;
  try {
    console.log("Sending request to OpenAI...");
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "Summarize this text." },
        { role: "user", content: text },
      ],
    });

    console.log("Summary generated:", completion.choices[0].message.content);

    res.json({ summary: completion.choices[0].message.content });
  } catch (err) {
    console.error("OpenAI error:", err);
    console.log("error!");
    res.status(500).json({ error: err.message });
  }
});

app.listen(3001, () => {
  console.log("LLM server running on port 3001");
});