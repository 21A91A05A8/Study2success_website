const { GoogleGenerativeAI } = require("@google/generative-ai");
require('dotenv').config();

const chatController = async (req, res) => {
  try {
    const { sentence } = req.body;
    if (!sentence) {
      return res.status(400).json({ error: "Sentence is required" });
    }

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const result = await model.generateContent(sentence);
    const response = await result.response;
    const generatedText = response.text();

    res.json({ result: generatedText });
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ error: "An error occurred" });
  }
};

module.exports = { chatController };