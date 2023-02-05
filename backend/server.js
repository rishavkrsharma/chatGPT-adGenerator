const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();

app.use(cors());

const port = 4000;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

const API_KEY = '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';

// app.post('/api/generate', async (req, res) => {
//   const description = req.body.description;
//   const fixedPrompt = "Generate the most accurate answer: ";
//   const prompt = fixedPrompt + description;

//   const response = await axios.post('https://api.openai.com/v1/engines/davinci/jobs', {
//     prompt: prompt,
//     max_tokens: 100,
//     n: 5,
//     temperature: 0.5
//   }, {
//     headers: {
//       'Authorization': `Bearer ${API_KEY}`,
//       'Content-Type': 'application/json'
//     }
//   });

//   const results = response.data.choices.map(choice => choice.text);
//   res.json(results);
// });

app.post('/api/generate', async (req, res) => {
  // const description = req.body.description;
  // const fixedPrompt = "Generate the most accurate answer: ";
  // const prompt = fixedPrompt + description;

  const response = await axios.post('https://api.openai.com/v1/engines/davinci/jobs', {
    prompt: "what is meant by hypotenuse",
    max_tokens: 100,
    n: 5,
    temperature: 0.5
  }, {
    headers: {
      'Authorization': `Bearer ${API_KEY}`,
      'Content-Type': 'application/json'
    }
  });

  const results = response.data.choices.map(choice => choice.text);
  res.json(results);
});
