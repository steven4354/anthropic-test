import axios from 'axios';
import heredoc from 'tsheredoc';
import dotenv from 'dotenv';

// dotenv
dotenv.config();

const API_KEY = process.env.ANTHROPIC_API_KEY;
const BASE_URL = 'https://api.anthropic.com/v1/complete';

const prompt1 = heredoc(`
You are an expert programmer like Linus Torvalds.

You are given a HTML: and a TASK:

Do what the TASK says with the HTML
`);

/*
TASK: Make me a jquery that will extract all their role, company, and description in this format

[{ role: -, company: -, date: -, description: -}, ...]

[{ role: -, company: -, date: -, description: -}, ...]
*/
const prompt2 = heredoc`

You are an expert programmer like Linus Torvalds. Complete the (TASK)

TASK: Make me a js client script that will click on this Next button and go to the next page using the aria but has to be general 

HTML:
<div class="pagination__quick-link-wrapper">
            <a href="invalid://" class="pagination__quick-link pagination__quick-link--next" rel="next" aria-label="Go to next page 3" data-test-pagination-next="" data-live-test-pagination-next="">
              <span>Next</span>
              <span class="pagination__quick-link-icon">
                <li-icon aria-hidden="true" type="chevron-right-icon" size="small"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" width="16" height="16" focusable="false">
      <path d="M9 8L5 2.07 6.54 1l4.2 6.15a1.5 1.5 0 010 1.69L6.54 15 5 13.93z"></path>
    </svg></li-icon>
              </span>
            </a>
        </div>
`

type ConversationEntry = {
  role: 'human' | 'assistant';
  text: string;
};

const conversation: ConversationEntry[] = [
  // {
  //   role: 'human',
  //   text: prompt1,
  // },
  {
    role: 'human',
    text:  prompt2,
  },
];

console.log(conversation);

function formatConversation(conversation: ConversationEntry[]) {
  return conversation
    .map((entry) => `\n\n${entry.role.charAt(0).toUpperCase() + entry.role.slice(1)}: ${entry.text}`)
    .join('');
}

async function getCompletion(prompt: string) {
  const data = {
    prompt: `\n\n${prompt}\n\nAssistant:`,
    model: 'claude-2', // claude-instant-v1, claude-v1-100k
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

getCompletion(formatConversation(conversation));