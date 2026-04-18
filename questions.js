/**
 * QCM Questions Data
 *
 * Each question object has:
 *   - id: unique identifier
 *   - text: the question text
 *   - choices: array of { label, text } objects
 *   - answer: the label of the correct choice (e.g. "A")
 *   - explanation: (optional) explanation shown on correction
 *
 * To add more questions, simply append to this array.
 * To create variations, duplicate a question and modify the values.
 */
const questions = [
  {
    id: 1,
    text: "Une tablette coûte 200 euros. Son prix diminue de 30%. Le prix après cette diminution est :",
    choices: [
      { label: "A", text: "140 euros" },
      { label: "B", text: "170 euros" },
      { label: "C", text: "194 euros" },
      { label: "D", text: "197 euros" }
    ],
    answer: "A",
    explanation: "200 × (1 − 0,30) = 200 × 0,70 = 140 euros."
  },
  {
    id: 2,
    text: "Une réduction de 50% suivie d'une augmentation de 50% équivaut à :",
    choices: [
      { label: "A", text: "une réduction de 50%" },
      { label: "B", text: "une réduction de 25%" },
      { label: "C", text: "une augmentation de 25%" },
      { label: "D", text: "une augmentation de 75%" }
    ],
    answer: "B",
    explanation: "Prix × 0,50 × 1,50 = Prix × 0,75, soit une réduction de 25%."
  },
  {
    id: 3,
    text: "Dans un lycée, le quart des élèves sont internes, parmi eux, la moitié sont des filles. La proportion des filles internes par rapport à l'ensemble des élèves du lycée est égale à :",
    choices: [
      { label: "A", text: "4%" },
      { label: "B", text: "12,5%" },
      { label: "C", text: "25%" },
      { label: "D", text: "50%" }
    ],
    answer: "B",
    explanation: "1/4 × 1/2 = 1/8 = 12,5%."
  }
];
