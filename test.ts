const axios = require('axios');

// dotenv
require('dotenv').config();

const API_KEY = process.env.ANTHROPIC_API_KEY;
const BASE_URL = 'https://api.anthropic.com/v1/complete';

async function getCompletion(prompt: string) {
  const data = {
    prompt: `\n\nHuman: ${prompt}\n\nAssistant:`,
    model: 'claude-v1',
    max_tokens_to_sample: 300,
    stop_sequences: ['\n\nHuman:'],
  };

  const headers = {
    'Content-Type': 'application/json',
    'X-API-Key': API_KEY,
  };

  try {
    const response = await axios.post(BASE_URL, data, { headers });
    console.log(response.data.completion);
  } catch (error: any) {
    console.error('Error:', error.response.data);
  }
}

getCompletion('Tell me a haiku about trees');