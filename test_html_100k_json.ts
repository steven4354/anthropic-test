import axios from "axios";
import heredoc from "tsheredoc";
import dotenv from "dotenv";
import { json } from "stream/consumers";

// dotenv
dotenv.config();

const API_KEY = process.env.ANTHROPIC_API_KEY;
const BASE_URL = "https://api.anthropic.com/v1/complete";

const prompt1 = heredoc(`
You are an expert programmer like Linus Torvalds.

You are given a JSON: and a TASK:

Do what the TASK says with the JSON
`);

/*
TASK: Make me a jquery that will extract all their role, company, and description in this format

[{ role: -, company: -, date: -, description: -}, ...]

[{ role: -, company: -, date: -, description: -}, ...]
*/
const prompt2 = heredoc`


You are an expert programmer like Linus Torvalds. Complete the (TASK)

TASK: 

The below JSON at the end of my message is a structure of a html. Write me js code that will transform the JSON using the node-json-transform package to extract work experience of this person in this format.

The extracted data should be in this format:
[{ role: -, company: -, date: -, description: -}, ...]

Transverse over using the classnames, types and attributes in the code. It should work for any new json as well with the same classnames.

DOCUMENTATION:

Here's how to use the node-json-transform package.

Example 1:

---------------- start of js code ------------------------

var transform = require("node-json-transform").transform;

var map = {
  item: {
    id: "id",
    sku: "sku",
    zero: "zero",
    toReplace: "sku",
    errorReplace: "notFound",
    simpleArray: ["id", "sku","sku"],
    complexArray: [ {node: "id"} , { otherNode:"sku" } , {toReplace:"sku"} ],
    subObject: {
      node1: "id",
      node2: "sku",
      subSubObject: {
        node1: "id",
        node2: "sku",
      }
    },
  },
  remove: ["unwanted"],
  defaults: {
    "missingData": true
  },
  operate: [
    {
      run: (val) => "replacement",
      on: "subObject.subSubObject.node1"
    },
    {
      run: (val) => "replacement",
      on: "errorReplace"
    },
    {
      run: (val) => "replacement",
      on: "toReplace"
    },
      {
      run: (val) => "replacement",
      on: "simpleArray.2"
    },
    {
      run: (val) => "replacement",
      on: "complexArray.2.toReplace"
    }
  ]
};

var object = [
  {
    id: "books",
    zero: 0,
    sku:"10234-12312",
    unwanted: true
  }
];

var result = transform(data, map);

------------------------- end of code -----------------------------

Example 2:

------------------------- start of code ---------------------------

var data = [
  {
    id: "books0",
    zero: 0,
    sku: "00234-12312",
    subitems: [
      { subid: "0.0", subsku: "subskuvalue0.0" },
      { subid: "0.1", subsku: "subskuvalue0.1" }
    ]
  }, {
    id: "books1",
    zero: 1,
    sku: "10234-12312",
    subitems: [
      { subid: "1.0", subsku: "subskuvalue1.0" },
      { subid: "1.1", subsku: "subskuvalue1.1" }
    ]
  }
];

var baseMap = {
  item : {
    "myid": "id",
    "mysku": "sku",
    "mysubitems": "subitems"
  },
  operate: [
    {
      run: function(ary) { 
        return transform(ary, nestedMap);
      }, 
      on: "mysubitems"
    }
  ]
};

var nestedMap = {
  "item" : {
    "mysubid": "subid",
    "mysubsku": "subsku"
  }
};

var result = transform(data, baseMap);

------------------------- end of code -----------------------------

JSON: 
  {
    "type": "ul",
    "content": [
      {
        "type": "li",
        "content": [
          {
            "type": "div",
            "content": [
              {
                "type": "div",
                "content": [
                  {
                    "type": "a",
                    "content": [
                      {
                        "type": "div",
                        "content": [
                          {
                            "type": "div",
                            "content": [],
                            "attributes": {
                              "class": "ivm-view-attr__img-wrapper display-flex"
                            }
                          }
                        ],
                        "attributes": {
                          "class": "ivm-image-view-model pvs-entity__image"
                        }
                      }
                    ],
                    "attributes": {
                      "data-field": "experience_company_logo",
                      "class": "optional-action-target-wrapper display-flex",
                      "target": "_self",
                      "href": "https://www.linkedin.com/company/6643518/"
                    }
                  }
                ]
              },
              {
                "type": "div",
                "content": [
                  {
                    "type": "div",
                    "content": [
                      {
                        "type": "div",
                        "content": [
                          {
                            "type": "div",
                            "content": [
                              {
                                "type": "div",
                                "content": [
                                  {
                                    "type": "div",
                                    "content": [
                                      {
                                        "type": "div",
                                        "content": [
                                          {
                                            "type": "span",
                                            "content": [
                                              "Software Automation Engineer"
                                            ],
                                            "attributes": {
                                              "aria-hidden": "true"
                                            }
                                          },
                                          {
                                            "type": "span",
                                            "content": [
                                              "Software Automation Engineer"
                                            ],
                                            "attributes": {
                                              "class": "visually-hidden"
                                            }
                                          }
                                        ],
                                        "attributes": {
                                          "class": "display-flex align-items-center mr1 t-bold"
                                        }
                                      }
                                    ],
                                    "attributes": {
                                      "class": "display-flex full-width"
                                    }
                                  }
                                ],
                                "attributes": {
                                  "class": "display-flex"
                                }
                              }
                            ],
                            "attributes": {
                              "class": "display-flex flex-wrap align-items-center full-height"
                            }
                          },
                          {
                            "type": "span",
                            "content": [
                              {
                                "type": "span",
                                "content": [
                                  "Invisible Technologies Inc. · Full-time"
                                ],
                                "attributes": {
                                  "aria-hidden": "true"
                                }
                              },
                              {
                                "type": "span",
                                "content": [
                                  "Invisible Technologies Inc. · Full-time"
                                ],
                                "attributes": {
                                  "class": "visually-hidden"
                                }
                              }
                            ],
                            "attributes": {
                              "class": "t-14 t-normal"
                            }
                          },
                          {
                            "type": "span",
                            "content": [
                              {
                                "type": "span",
                                "content": [
                                  "Mar 2023 - Present · 8 mos"
                                ],
                                "attributes": {
                                  "aria-hidden": "true"
                                }
                              },
                              {
                                "type": "span",
                                "content": [
                                  "Mar 2023 - Present · 8 mos"
                                ],
                                "attributes": {
                                  "class": "visually-hidden"
                                }
                              }
                            ],
                            "attributes": {
                              "class": "t-14 t-normal t-black--light"
                            }
                          },
                          {
                            "type": "span",
                            "content": [
                              {
                                "type": "span",
                                "content": [
                                  "Remote"
                                ],
                                "attributes": {
                                  "aria-hidden": "true"
                                }
                              },
                              {
                                "type": "span",
                                "content": [
                                  "Remote"
                                ],
                                "attributes": {
                                  "class": "visually-hidden"
                                }
                              }
                            ],
                            "attributes": {
                              "class": "t-14 t-normal t-black--light"
                            }
                          }
                        ],
                        "attributes": {
                          "class": "display-flex flex-column full-width"
                        }
                      },
                      {
                        "type": "div",
                        "content": [],
                        "attributes": {
                          "class": "pvs-entity__action-container"
                        }
                      }
                    ],
                    "attributes": {
                      "class": "display-flex flex-row justify-space-between"
                    }
                  },
                  {
                    "type": "div",
                    "content": [
                      {
                        "type": "ul",
                        "content": [
                          {
                            "type": "li",
                            "content": [
                              {
                                "type": "div",
                                "content": [
                                  {
                                    "type": "ul",
                                    "content": [
                                      {
                                        "type": "li",
                                        "content": [
                                          {
                                            "type": "div",
                                            "content": [
                                              {
                                                "type": "div",
                                                "content": [
                                                  {
                                                    "type": "div",
                                                    "content": [
                                                      {
                                                        "type": "div",
                                                        "content": [
                                                          {
                                                            "type": "span",
                                                            "content": [
                                                              "- Maintained and developed microservices of Python and Typescript applications handling millions of requests daily.",
                                                              {
                                                                "type": "br"
                                                              },
                                                              {
                                                                "type": "br"
                                                              },
                                                              "- Swiftly diagnosed and resolved critical issues as an on-call engineer, ensuring uninterrupted operations.",
                                                              {
                                                                "type": "br"
                                                              },
                                                              {
                                                                "type": "br"
                                                              },
                                                              "- Demonstrated expertise in developing highly scalable, reliable, and reusable automation solutions with 100% test coverage, effectively managing thousands of daily requests in a distributed system.",
                                                              {
                                                                "type": "br"
                                                              },
                                                              {
                                                                "type": "br"
                                                              },
                                                              "- Actively contributed to architectural enhancements through code reviews, demos, and company-wide engineering meetings, fostering innovation and collaboration."
                                                            ],
                                                            "attributes": {
                                                              "aria-hidden": "true"
                                                            }
                                                          },
                                                          {
                                                            "type": "span",
                                                            "content": [
                                                              "- Maintained and developed microservices of Python and Typescript applications handling millions of requests daily. - Swiftly diagnosed and resolved critical issues as an on-call engineer, ensuring uninterrupted operations. - Demonstrated expertise in developing highly scalable, reliable, and reusable automation solutions with 100% test coverage, effectively managing thousands of daily requests in a distributed system. - Actively contributed to architectural enhancements through code reviews, demos, and company-wide engineering meetings, fostering innovation and collaboration."
                                                            ],
                                                            "attributes": {
                                                              "class": "visually-hidden"
                                                            }
                                                          }
                                                        ],
                                                        "attributes": {
                                                          "class": "inline-show-more-text inline-show-more-text--is-collapsed inline-show-more-text--is-collapsed-with-line-clamp full-width",
                                                          "style": "-webkit-line-clamp:2;",
                                                          "tabindex": "-1"
                                                        }
                                                      }
                                                    ],
                                                    "attributes": {
                                                      "class": "pv-shared-text-with-see-more full-width t-14 t-normal t-black display-flex align-items-center"
                                                    }
                                                  }
                                                ],
                                                "attributes": {
                                                  "class": "display-flex full-width"
                                                }
                                              }
                                            ],
                                            "attributes": {
                                              "class": "display-flex"
                                            }
                                          }
                                        ],
                                        "attributes": {
                                          "class": "pvs-list__item--with-top-padding pvs-list__item--one-column"
                                        }
                                      }
                                    ],
                                    "attributes": {
                                      "class": "pvs-list"
                                    }
                                  }
                                ],
                                "attributes": {
                                  "class": "pvs-list__outer-container"
                                }
                              }
                            ],
                            "attributes": {
                              "class": "pvs-list__item--one-column"
                            }
                          },
                          {
                            "type": "li",
                            "content": [
                              {
                                "type": "div",
                                "content": [
                                  {
                                    "type": "ul",
                                    "content": [
                                      {
                                        "type": "li",
                                        "content": [
                                          {
                                            "type": "div",
                                            "content": [
                                              {
                                                "type": "div",
                                                "content": [
                                                  {
                                                    "type": "div",
                                                    "content": [
                                                      {
                                                        "type": "div",
                                                        "content": [
                                                          {
                                                            "type": "span",
                                                            "content": [
                                                              {
                                                                "type": "strong",
                                                                "content": [
                                                                  "Skills:"
                                                                ]
                                                              },
                                                              {
                                                                "type": "span",
                                                                "content": [],
                                                                "attributes": {
                                                                  "class": "white-space-pre"
                                                                }
                                                              },
                                                              "Celery · Next.js · pandas · TypeScript · Python (Programming Language) · Flask · kafka · Docker · FastAPI"
                                                            ],
                                                            "attributes": {
                                                              "aria-hidden": "true"
                                                            }
                                                          },
                                                          {
                                                            "type": "span",
                                                            "content": [
                                                              {
                                                                "type": "strong",
                                                                "content": [
                                                                  "Skills:"
                                                                ]
                                                              },
                                                              {
                                                                "type": "span",
                                                                "content": [],
                                                                "attributes": {
                                                                  "class": "white-space-pre"
                                                                }
                                                              },
                                                              "Celery · Next.js · pandas · TypeScript · Python (Programming Language) · Flask · kafka · Docker · FastAPI"
                                                            ],
                                                            "attributes": {
                                                              "class": "visually-hidden"
                                                            }
                                                          }
                                                        ],
                                                        "attributes": {
                                                          "class": "inline-show-more-text inline-show-more-text--is-collapsed inline-show-more-text--is-collapsed-with-line-clamp full-width",
                                                          "style": "-webkit-line-clamp:2;",
                                                          "tabindex": "-1"
                                                        }
                                                      }
                                                    ],
                                                    "attributes": {
                                                      "class": "pv-shared-text-with-see-more full-width t-14 t-normal t-black display-flex align-items-center"
                                                    }
                                                  }
                                                ],
                                                "attributes": {
                                                  "class": "display-flex full-width"
                                                }
                                              }
                                            ],
                                            "attributes": {
                                              "class": "display-flex"
                                            }
                                          }
                                        ],
                                        "attributes": {
                                          "class": "pvs-list__item--with-top-padding pvs-list__item--one-column"
                                        }
                                      }
                                    ],
                                    "attributes": {
                                      "class": "pvs-list"
                                    }
                                  }
                                ],
                                "attributes": {
                                  "class": "pvs-list__outer-container"
                                }
                              }
                            ],
                            "attributes": {
                              "class": "pvs-list__item--one-column"
                            }
                          }
                        ],
                        "attributes": {
                          "class": "pvs-list"
                        }
                      }
                    ],
                    "attributes": {
                      "class": "pvs-list__outer-container pvs-entity__sub-components"
                    }
                  }
                ],
                "attributes": {
                  "class": "display-flex flex-column full-width align-self-center"
                }
              }
            ],
            "attributes": {
              "class": "pvs-entity pvs-entity--padded pvs-list__item--no-padding-in-columns"
            }
          }
        ],
        "attributes": {
          "class": "artdeco-list__item pvs-list__item--line-separated pvs-list__item--one-column"
        },
        ...
      },

`;

type ConversationEntry = {
  role: "human" | "assistant";
  text: string;
};

const conversation: ConversationEntry[] = [
  // {
  //   role: 'human',
  //   text: prompt1,
  // },
  {
    role: "human",
    text: prompt2,
  },
//   {
//     role: "assistant",
//     text: `Traverse the JSON using node-json-transform package, and write a js code that extract the role, company, dateRange, experience

//     // Extract work experiences
//     const experiences = [ {
//       role,
//       company, 
//       dateRange
// },...
//     ];  

//     example of succesful experience:

//     {
//       role:"Software Automation Engineer",
//       company:"Invisible Technologies Inc",
//       dateRange: "Mar 2023 - Present"
//     }




    
//    `,
//   },
  
];

console.log(conversation);

function formatConversation(conversation: ConversationEntry[]) {
  return conversation
    .map(
      (entry) =>
        `\n\n${entry.role.charAt(0).toUpperCase() + entry.role.slice(1)}: ${
          entry.text
        }`
    )
    .join("");
}

async function getCompletion(prompt: string) {
  const data = {
    prompt: `\n\n${prompt}\n\nAssistant:`,
    model: "claude-2", // claude-instant-v1, claude-v1-100k
    max_tokens_to_sample: 300,
    stop_sequences: ["\nHuman:"],
  };

  const headers = {
    "Content-Type": "application/json",
    "X-API-Key": API_KEY,
  };

  try {
    const response = await axios.post(BASE_URL, data, { headers });
    console.log(response.data.completion);
  } catch (error: any) {
    console.error("Error:", error.response.data);
  }
}

getCompletion(formatConversation(conversation));