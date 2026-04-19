# QCM

A simple HTML/JavaScript quiz (QCM — Questionnaire à Choix Multiples) for students.

## Usage

Open `index.html` in any browser — no server needed.

```bash
# macOS
open index.html

# Linux
xdg-open index.html

# Windows
start index.html
```

## Adding / modifying questions

Edit **`questions.js`**. Each question is an object in the `questions` array:

```js
{
  id: 4,                           // unique id
  text: "Your question here?",     // question text
  choices: [
    { label: "A", text: "First option" },
    { label: "B", text: "Second option" },
    { label: "C", text: "Third option" },
    { label: "D", text: "Fourth option" }
  ],
  answer: "B",                     // correct choice label
  explanation: "Why B is correct." // shown when the user gets it wrong
}
```

To create variations, duplicate an existing question, change its `id`, and tweak the values.
