// Catégorie 1 – Calcul numérique et algébrique
// Sous-catégorie 1.13 – Déterminer les solutions d'une équation produit nul
const qcmCategory = "Calcul numérique et algébrique";
const qcmSubcategory = "Déterminer les solutions d'une équation produit nul";
const questions = [
  {
    id: 1,
    text: "Les solutions de l'équation \\((x - 3)(x + 5) = 0\\) sont :",
    choices: [
      { label: "A", text: "\\(x = 3\\) ou \\(x = 5\\)" },
      { label: "B", text: "\\(x = -3\\) ou \\(x = 5\\)" },
      { label: "C", text: "\\(x = 3\\) ou \\(x = -5\\)" },
      { label: "D", text: "\\(x = -3\\) ou \\(x = -5\\)" }
    ],
    answer: "C",
    explanation: "Un produit est nul si et seulement si l'un de ses facteurs est nul : x − 3 = 0 ⇒ x = 3, ou x + 5 = 0 ⇒ x = −5."
  },
  {
    id: 2,
    text: "Les solutions de l'équation \\(x(2x - 6) = 0\\) sont :",
    choices: [
      { label: "A", text: "\\(x = 0\\) ou \\(x = 6\\)" },
      { label: "B", text: "\\(x = 0\\) ou \\(x = 3\\)" },
      { label: "C", text: "\\(x = 0\\) ou \\(x = -3\\)" },
      { label: "D", text: "\\(x = 6\\) uniquement" }
    ],
    answer: "B",
    explanation: "x = 0 ou 2x − 6 = 0 ⇒ x = 3."
  },
  {
    id: 3,
    text: "Les solutions de l'équation \\((3x + 9)(x - 1) = 0\\) sont :",
    choices: [
      { label: "A", text: "\\(x = 3\\) ou \\(x = 1\\)" },
      { label: "B", text: "\\(x = -9\\) ou \\(x = 1\\)" },
      { label: "C", text: "\\(x = -3\\) ou \\(x = 1\\)" },
      { label: "D", text: "\\(x = -3\\) ou \\(x = -1\\)" }
    ],
    answer: "C",
    explanation: "3x + 9 = 0 ⇒ x = −3, ou x − 1 = 0 ⇒ x = 1."
  },
  {
    id: 4,
    text: "Les solutions de l'équation \\((x + 2)^{2} = 0\\) sont :",
    choices: [
      { label: "A", text: "\\(x = 2\\) ou \\(x = -2\\)" },
      { label: "B", text: "\\(x = -2\\) (solution double)" },
      { label: "C", text: "\\(x = 2\\) (solution double)" },
      { label: "D", text: "Pas de solution" }
    ],
    answer: "B",
    explanation: "\\((x + 2)^{2} = 0 \\Rightarrow x + 2 = 0 \\Rightarrow x = -2\\). C'est une solution double."
  },
  {
    id: 5,
    text: "Les solutions de l'équation \\((x - 4)(x + 4) = 0\\) sont :",
    choices: [
      { label: "A", text: "\\(x = 4\\) uniquement" },
      { label: "B", text: "\\(x = 0\\)" },
      { label: "C", text: "\\(x = 4\\) ou \\(x = -4\\)" },
      { label: "D", text: "\\(x = 16\\) ou \\(x = -16\\)" }
    ],
    answer: "C",
    explanation: "x − 4 = 0 ⇒ x = 4, ou x + 4 = 0 ⇒ x = −4."
  },
  {
    id: 6,
    text: "Les solutions de l'équation \\(5x(x - 7) = 0\\) sont :",
    choices: [
      { label: "A", text: "\\(x = 5\\) ou \\(x = 7\\)" },
      { label: "B", text: "\\(x = 0\\) ou \\(x = -7\\)" },
      { label: "C", text: "\\(x = 0\\) ou \\(x = 7\\)" },
      { label: "D", text: "\\(x = 7\\) uniquement" }
    ],
    answer: "C",
    explanation: "5x = 0 ⇒ x = 0, ou x − 7 = 0 ⇒ x = 7."
  },
  {
    id: 7,
    text: "Les solutions de l'équation \\((2x + 1)(3x - 12) = 0\\) sont :",
    choices: [
      { label: "A", text: "\\(x = -\\frac{1}{2}\\) ou \\(x = 4\\)" },
      { label: "B", text: "\\(x = \\frac{1}{2}\\) ou \\(x = 4\\)" },
      { label: "C", text: "\\(x = -\\frac{1}{2}\\) ou \\(x = -4\\)" },
      { label: "D", text: "\\(x = -1\\) ou \\(x = 12\\)" }
    ],
    answer: "A",
    explanation: "2x + 1 = 0 ⇒ x = −1/2, ou 3x − 12 = 0 ⇒ x = 4."
  },
  {
    id: 8,
    text: "On considère l'équation \\(x^{2} - 9 = 0\\). Après factorisation, les solutions sont :",
    choices: [
      { label: "A", text: "\\(x = 9\\) ou \\(x = -9\\)" },
      { label: "B", text: "\\(x = 3\\) uniquement" },
      { label: "C", text: "\\(x = 3\\) ou \\(x = -3\\)" },
      { label: "D", text: "Pas de solution" }
    ],
    answer: "C",
    explanation: "\\(x^{2} - 9 = (x - 3)(x + 3) = 0 \\Rightarrow x = 3\\) ou \\(x = -3\\)."
  },
  {
    id: 9,
    text: "Les solutions de l'équation \\((x - 1)(x + 3)(2x - 8) = 0\\) sont :",
    choices: [
      { label: "A", text: "\\(x = 1\\), \\(x = -3\\) ou \\(x = 4\\)" },
      { label: "B", text: "\\(x = -1\\), \\(x = 3\\) ou \\(x = 8\\)" },
      { label: "C", text: "\\(x = 1\\), \\(x = -3\\) ou \\(x = 8\\)" },
      { label: "D", text: "\\(x = 1\\) ou \\(x = -3\\)" }
    ],
    answer: "A",
    explanation: "x − 1 = 0 ⇒ x = 1, ou x + 3 = 0 ⇒ x = −3, ou 2x − 8 = 0 ⇒ x = 4."
  },
  {
    id: 10,
    text: "Les solutions de l'équation \\(x^{2} + 5x = 0\\) sont :",
    choices: [
      { label: "A", text: "\\(x = 5\\) uniquement" },
      { label: "B", text: "\\(x = 0\\) ou \\(x = 5\\)" },
      { label: "C", text: "\\(x = 0\\) ou \\(x = -5\\)" },
      { label: "D", text: "\\(x = -5\\) uniquement" }
    ],
    answer: "C",
    explanation: "\\(x^{2} + 5x = x(x + 5) = 0 \\Rightarrow x = 0\\) ou \\(x = -5\\)."
  }
];
