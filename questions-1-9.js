// Catégorie 1 – Calcul numérique et algébrique
// Sous-catégorie 1.9 – Développer, factoriser, réduire une expression algébrique simple
const qcmCategory = "Calcul numérique et algébrique";
const qcmSubcategory = "Développer, factoriser, réduire une expression algébrique simple";
const questions = [
  {
    id: 1,
    text: "Le développement de \\((a + b)^{2}\\) est :",
    choices: [
      { label: "A", text: "\\(a^{2} + b^{2}\\)" },
      { label: "B", text: "\\(a^{2} + 2ab + b^{2}\\)" },
      { label: "C", text: "\\(2a + 2b\\)" },
      { label: "D", text: "\\(a^{2} + ab + b^{2}\\)" }
    ],
    answer: "B",
    explanation: "\\((a + b)^{2} = a^{2} + 2ab + b^{2}\\)."
  },
  {
    id: 2,
    text: "Le développement de \\((a - b)^{2}\\) est :",
    choices: [
      { label: "A", text: "\\(a^{2} - b^{2}\\)" },
      { label: "B", text: "\\(a^{2} - ab + b^{2}\\)" },
      { label: "C", text: "\\(a^{2} - 2ab + b^{2}\\)" },
      { label: "D", text: "\\(a^{2} + 2ab - b^{2}\\)" }
    ],
    answer: "C",
    explanation: "\\((a - b)^{2} = a^{2} - 2ab + b^{2}\\)."
  },
  {
    id: 3,
    text: "Le développement de \\((a + b)(a - b)\\) est :",
    choices: [
      { label: "A", text: "\\(a^{2} - b^{2}\\)" },
      { label: "B", text: "\\(a^{2} + b^{2}\\)" },
      { label: "C", text: "\\(a^{2} - 2ab + b^{2}\\)" },
      { label: "D", text: "\\(2a^{2} - 2b^{2}\\)" }
    ],
    answer: "A",
    explanation: "\\((a + b)(a - b) = a^{2} - b^{2}\\)."
  },
  {
    id: 4,
    text: "Le développement de \\((x + 3)^{2}\\) est :",
    choices: [
      { label: "A", text: "\\(x^{2} + 9\\)" },
      { label: "B", text: "\\(x^{2} + 3x + 9\\)" },
      { label: "C", text: "\\(x^{2} + 6x + 9\\)" },
      { label: "D", text: "\\(x^{2} + 6x + 6\\)" }
    ],
    answer: "C",
    explanation: "\\((x + 3)^{2} = x^{2} + 2 \\times x \\times 3 + 3^{2} = x^{2} + 6x + 9\\)."
  },
  {
    id: 5,
    text: "Le développement de \\((2x - 5)^{2}\\) est :",
    choices: [
      { label: "A", text: "\\(4x^{2} - 20x + 25\\)" },
      { label: "B", text: "\\(4x^{2} - 10x + 25\\)" },
      { label: "C", text: "\\(2x^{2} - 20x + 25\\)" },
      { label: "D", text: "\\(4x^{2} - 25\\)" }
    ],
    answer: "A",
    explanation: "\\((2x - 5)^{2} = (2x)^{2} - 2 \\times 2x \\times 5 + 5^{2} = 4x^{2} - 20x + 25\\)."
  },
  {
    id: 6,
    text: "La factorisation de \\(x^{2} - 16\\) est :",
    choices: [
      { label: "A", text: "\\((x - 4)^{2}\\)" },
      { label: "B", text: "\\((x + 4)(x - 4)\\)" },
      { label: "C", text: "\\((x - 8)(x + 2)\\)" },
      { label: "D", text: "\\(x(x - 16)\\)" }
    ],
    answer: "B",
    explanation: "\\(x^{2} - 16 = x^{2} - 4^{2} = (x + 4)(x - 4)\\)."
  },
  {
    id: 7,
    text: "La factorisation de \\(3x^{2} + 6x\\) est :",
    choices: [
      { label: "A", text: "\\(3x(x + 2)\\)" },
      { label: "B", text: "\\(3(x^{2} + 2x)\\)" },
      { label: "C", text: "\\(x(3x + 6)\\)" },
      { label: "D", text: "\\(6x(x + 1)\\)" }
    ],
    answer: "A",
    explanation: "\\(3x^{2} + 6x = 3x \\times x + 3x \\times 2 = 3x(x + 2)\\)."
  },
  {
    id: 8,
    text: "La forme réduite de \\(3x + 5 - 2x + 7\\) est :",
    choices: [
      { label: "A", text: "\\(x + 12\\)" },
      { label: "B", text: "\\(5x + 12\\)" },
      { label: "C", text: "\\(x + 2\\)" },
      { label: "D", text: "\\(x - 2\\)" }
    ],
    answer: "A",
    explanation: "\\(3x - 2x + 5 + 7 = x + 12\\)."
  },
  {
    id: 9,
    text: "Le développement de \\((x + 2)(x - 7)\\) est :",
    choices: [
      { label: "A", text: "\\(x^{2} - 14\\)" },
      { label: "B", text: "\\(x^{2} + 5x - 14\\)" },
      { label: "C", text: "\\(x^{2} - 5x - 14\\)" },
      { label: "D", text: "\\(x^{2} - 5x + 14\\)" }
    ],
    answer: "C",
    explanation: "\\((x + 2)(x - 7) = x^{2} - 7x + 2x - 14 = x^{2} - 5x - 14\\)."
  },
  {
    id: 10,
    text: "La factorisation de \\(x^{2} + 10x + 25\\) est :",
    choices: [
      { label: "A", text: "\\((x + 5)(x - 5)\\)" },
      { label: "B", text: "\\((x + 5)^{2}\\)" },
      { label: "C", text: "\\((x + 25)(x + 1)\\)" },
      { label: "D", text: "\\((x + 10)^{2}\\)" }
    ],
    answer: "B",
    explanation: "\\(x^{2} + 10x + 25 = x^{2} + 2 \\times 5 \\times x + 5^{2} = (x + 5)^{2}\\)."
  }
];
