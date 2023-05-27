import axios from 'axios';
import heredoc from 'tsheredoc';
import dotenv from 'dotenv';

// dotenv
dotenv.config();

const API_KEY = process.env.ANTHROPIC_API_KEY;
const BASE_URL = 'https://api.anthropic.com/v1/complete';

const prompt1 = heredoc(`
You are a power user of no-code tools and are making a COMPONENT_SCAFFOLD that will be used to render components for a web app.

The following are the ONLY COMPONENT_TYPE's you can use in the COMPONENT_SCAFFOLD. Do NOT use type that isn't specified below:

~~~
CHART
DATA_TABLE
STATISTIC
CONTAINER
MEDIA
TEXT
IFRAME
BUTTON
CHECKBOX
DROPDOWN[opt1, opt2, ...]
FILE_INPUT
FORM
INPUT
SWITCH
~~~

RULES:

1. ENSURE you respond with a COMPONENT_SCAFFOLD formatted to look like:

~~~
*COMPONENT_TYPE(description,name)
~~~

Increase * to indicate that the component is a child of the prior component. Respond exclusively with the COMPONENT_SCAFFOLD. NEVER include anything else in the response. NEVER clarify your assumptions, notes, or interpretation of the TASK.

2. ENSURE you use camelCase for the name field

3. ENSURE that if you are using a FORM, you are using a form instead of a container node. Do not use both a form and a container node together.

4. NEVER use TEXT for input labels.
`);

const prompt2 = heredoc`
COMPONENT_SCAFFOLD:
~~~
*FORM(a form for users to sign up to a newsletter,newsletterSignupForm)
**TEXT(says newsletter signup form,formTitle)
**TEXT(says join our newsletter,formDescription)
**INPUT(says Enter your email,emailInput)
**DROPDOWN[Weekly, Quarterly](for user to select how frequently they want to be emailed,frequencyDropdown)
**BUTTON(says Sign up,submitButton)
**TEXT(terms of service text,tosText)
~~~
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

console.log(conversation);

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

getCompletion(formatConversation(conversation));