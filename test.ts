import axios from 'axios';
import heredoc from 'tsheredoc';
import dotenv from 'dotenv';

// dotenv
dotenv.config();

const API_KEY = process.env.ANTHROPIC_API_KEY;
const BASE_URL = 'https://api.anthropic.com/v1/complete';

const prompt1 = heredoc(`
// ... (same as before)
`);

const prompt2 = heredoc`
// ... (same as before)
`;

type ConversationEntry = {
  role: 'human' | 'assistant';
  text: string;
};

const conversation: ConversationEntry[] = [
  {
    role: 'human',
    text: prompt1,
  },
  {
    role: 'human',
    text: 'TASK: Make a newsletter signup form',
  },
  {
    role: 'assistant',
    text:  prompt2,
  },
  {
    role: 'human',
    text: 'TASK: lorem ipsum text',
  },
];

function formatConversation(conversation: ConversationEntry[]) {
  return conversation
    .map((entry) => `\n\n${entry.role.charAt(0).toUpperCase() + entry.role.slice(1)}: ${entry.text}`)
    .join('');
}

async function getCompletion(prompt: string) {
  const data = {
    prompt: `\n\nHuman: ${prompt}\n\nAssistant:`,
    model: 'claude-v1',
    max_tokens_to_sample: 300,
    stop_sequences: ['\nHuman:'],
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

const tasks = [
  'TASK: lorem ipsum text',
  'TASK: tesla order form',
  'TASK: employee expense management form',
  'TASK: 5 buttons with different colors',
  'TASK: employee onboarding checklist',
];

async function main() {
  for (const task of tasks) {
    const newConversation = [...conversation.slice(0, -1), { role: 'human', text: task }];
    console.log(`\nRunning task: ${task}`);
    await getCompletion(formatConversation(newConversation));
  }
}

main();