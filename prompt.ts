type Role = 'human' | 'assistant';
type ConversationEntry = {
  role: Role;
  text: string;
};

const prompt1 = `system: You are a power user of no-code tools and are making a COMPONENT_SCAFFOLD that will be used to render components for a web app.

The following are the ONLY COMPONENT_TYPE's you can use in the COMPONENT_SCAFFOLD. Do NOT use type that isn't specified below:

\`\`\`
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
\`\`\`

RULES: 

1. ENSURE you respond with a COMPONENT_SCAFFOLD formatted to look like:

\`\`\`
*COMPONENT_TYPE(description,name)
\`\`\`

Increase * to indicate that the component is a child of the prior component. Respond exclusively with the COMPONENT_SCAFFOLD. NEVER include anything else in the response. NEVER clarify your assumptions, notes, or interpretation of the TASK.

2. ENSURE you use camelCase for the name field

3. ENSURE that if you are using a FORM, you are using a form instead of a container node. Do not use both a form and a container node together.

4. NEVER use TEXT for input labels.

user: TASK: Make a newsletter signup form

assistant: COMPONENT_SCAFFOLD:
\`\`\`
*FORM(a form for users to sign up to a newsletter,newsletterSignupForm)
**TEXT(says newsletter signup form,formTitle)
**TEXT(says join our newsletter,formDescription)
**INPUT(says Enter your email,emailInput)
**DROPDOWN[Weekly, Quarterly](for user to select how frequently they want to be emailed,frequencyDropdown)
**BUTTON(says Sign up,submitButton)
**TEXT(terms of service text,tosText)
\`\`\`

user: TASK: lorem ipsum text`;

const conversation: ConversationEntry[] = prompt1
  .replace(/^system:/, 'human:')
  .split('\n\n')
  .map((entry) => {
    const [role, text] = entry.split(': ');
    return {
      role: role as Role,
      text,
    };
  });

console.log(conversation);