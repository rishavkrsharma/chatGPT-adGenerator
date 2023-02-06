const express = require("express");
const { Configuration, OpenAIApi } = require("openai");
const cors = require('cors');
const app = express();

app.use(cors());

app.use(express.json());

const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

const generateAd = async (productDescription) => {
  const response = await openai.createCompletion({
    model: "text-davinci-002",
    prompt: `Write five advertisement for the following product \n\nProduct: ${productDescription}`,
    temperature: 0.5,
    max_tokens: 100,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
  });

  return response.data.choices[0].text;
};


app.post("/generate-ad", async (req, res) => {
  try {
    const productDescription = req.body.productDescription;
    const ad = await generateAd(productDescription);

    res.json({ ad });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
