// Catégorie 1 – Calcul numérique et algébrique
// Sous-catégorie 1.15 – Développer, factoriser, réduire une expression algébrique simple (second degré)
const qcmCategory = "Calcul numérique et algébrique";
const qcmSubcategory = "Développer, factoriser, réduire une expression algébrique simple (second degré)";
const questions = [
  {
    id: 1,
    text: "Le développement de \\((x + 1)(x + 4)\\) est :",
    choices: [
      { label: "A", text: "\\(x^{2} + 4\\)" },
      { label: "B", text: "\\(x^{2} + 5x + 4\\)" },
      { label: "C", text: "\\(x^{2} + 4x + 4\\)" },
      { label: "D", text: "\\(x^{2} + 5x + 5\\)" }
    ],
    answer: "B",
    explanation: "\\((x + 1)(x + 4) = x^{2} + 4x + x + 4 = x^{2} + 5x + 4\\)."
  },
  {
    id: 2,
    text: "Le développement de \\((3x - 2)(x + 5)\\) est :",
    choices: [
      { label: "A", text: "\\(3x^{2} + 13x - 10\\)" },
      { label: "B", text: "\\(3x^{2} - 13x - 10\\)" },
      { label: "C", text: "\\(3x^{2} + 17x - 10\\)" },
      { label: "D", text: "\\(3x^{2} + 13x + 10\\)" }
    ],
    answer: "A",
    explanation: "\\((3x - 2)(x + 5) = 3x^{2} + 15x - 2x - 10 = 3x^{2} + 13x - 10\\)."
  },
  {
    id: 3,
    text: "La factorisation de \\(x^{2} + 6x + 9\\) est :",
    choices: [
      { label: "A", text: "\\((x + 3)(x - 3)\\)" },
      { label: "B", text: "\\((x + 9)(x + 1)\\)" },
      { label: "C", text: "\\((x + 3)^{2}\\)" },
      { label: "D", text: "\\((x + 6)(x + 3)\\)" }
    ],
    answer: "C",
    explanation: "\\(x^{2} + 6x + 9 = x^{2} + 2 \\times 3 \\times x + 3^{2} = (x + 3)^{2}\\)."
  },
  {
    id: 4,
    text: "La factorisation de \\(4x^{2} - 25\\) est :",
    choices: [
      { label: "A", text: "\\((2x - 5)^{2}\\)" },
      { label: "B", text: "\\((4x - 5)(x + 5)\\)" },
      { label: "C", text: "\\((2x - 5)(2x + 5)\\)" },
      { label: "D", text: "\\((2x + 5)^{2}\\)" }
    ],
    answer: "C",
    explanation: "\\(4x^{2} - 25 = (2x)^{2} - 5^{2} = (2x - 5)(2x + 5)\\)."
  },
  {
    id: 5,
    text: "Le développement de \\((2x + 3)^{2}\\) est :",
    choices: [
      { label: "A", text: "\\(4x^{2} + 9\\)" },
      { label: "B", text: "\\(4x^{2} + 6x + 9\\)" },
      { label: "C", text: "\\(4x^{2} + 12x + 9\\)" },
      { label: "D", text: "\\(2x^{2} + 12x + 9\\)" }
    ],
    answer: "C",
    explanation: "\\((2x + 3)^{2} = (2x)^{2} + 2 \\times 2x \\times 3 + 3^{2} = 4x^{2} + 12x + 9\\)."
  },
  {
    id: 6,
    text: "La forme réduite de \\((x + 2)^{2} - (x - 1)^{2}\\) est :",
    choices: [
      { label: "A", text: "\\(6x + 3\\)" },
      { label: "B", text: "\\(2x + 3\\)" },
      { label: "C", text: "\\(6x - 3\\)" },
      { label: "D", text: "\\(5\\)" }
    ],
    answer: "A",
    explanation: "On utilise \\(a^{2} - b^{2} = (a-b)(a+b)\\) avec a = x + 2 et b = x − 1 : \\((x+2-(x-1))(x+2+(x-1)) = 3(2x + 1) = 6x + 3\\)."
  },
  {
    id: 7,
    text: "La factorisation de \\(x^{2} - 8x + 16\\) est :",
    choices: [
      { label: "A", text: "\\((x - 4)^{2}\\)" },
      { label: "B", text: "\\((x + 4)^{2}\\)" },
      { label: "C", text: "\\((x - 4)(x + 4)\\)" },
      { label: "D", text: "\\((x - 2)(x - 8)\\)" }
    ],
    answer: "A",
    explanation: "\\(x^{2} - 8x + 16 = x^{2} - 2 \\times 4 \\times x + 4^{2} = (x - 4)^{2}\\)."
  },
  {
    id: 8,
    text: "Le développement de \\((x - 3)(2x + 7)\\) est :",
    choices: [
      { label: "A", text: "\\(2x^{2} + x - 21\\)" },
      { label: "B", text: "\\(2x^{2} + 13x - 21\\)" },
      { label: "C", text: "\\(2x^{2} - x - 21\\)" },
      { label: "D", text: "\\(2x^{2} + x + 21\\)" }
    ],
    answer: "A",
    explanation: "\\((x - 3)(2x + 7) = 2x^{2} + 7x - 6x - 21 = 2x^{2} + x - 21\\)."
  },
  {
    id: 9,
    text: "La factorisation de \\(9x^{2} - 12x + 4\\) est :",
    choices: [
      { label: "A", text: "\\((3x - 4)(3x + 1)\\)" },
      { label: "B", text: "\\((3x - 2)^{2}\\)" },
      { label: "C", text: "\\((9x - 2)(x - 2)\\)" },
      { label: "D", text: "\\((3x + 2)^{2}\\)" }
    ],
    answer: "B",
    explanation: "\\(9x^{2} - 12x + 4 = (3x)^{2} - 2 \\times 3x \\times 2 + 2^{2} = (3x - 2)^{2}\\)."
  },
  {
    id: 10,
    text: "La forme réduite de \\(3(x - 1)^{2} + 2(x + 4)\\) est :",
    choices: [
      { label: "A", text: "\\(3x^{2} - 4x + 11\\)" },
      { label: "B", text: "\\(3x^{2} - 6x + 11\\)" },
      { label: "C", text: "\\(3x^{2} - 4x + 5\\)" },
      { label: "D", text: "\\(3x^{2} + 4x + 11\\)" }
    ],
    answer: "A",
    explanation: "\\(3(x-1)^{2} + 2(x+4) = 3(x^{2} - 2x + 1) + 2x + 8 = 3x^{2} - 6x + 3 + 2x + 8 = 3x^{2} - 4x + 11\\)."
  }
];
