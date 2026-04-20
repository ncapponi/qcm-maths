// Catégorie 1 – Calcul numérique et algébrique
// Sous-catégorie 1.3 – Effectuer des opérations sur les puissances
const qcmCategory = "Calcul numérique et algébrique";
const qcmSubcategory = "Effectuer des opérations sur les puissances";
const questions = [
  {
    id: 1,
    text: "La seule égalité vraie est :",
    choices: [
      { label: "A", text: "\\(40 \\times \\frac{1}{40^{3}} = 40^{2}\\)" },
      { label: "B", text: "\\((2^{-4})^{3} = 2^{-1}\\)" },
      { label: "C", text: "\\(\\frac{10^{-5}}{10^{8}} = 10^{-13}\\)" },
      { label: "D", text: "\\(5^{-6} \\times 11^{-6} = 55^{-12}\\)" }
    ],
    answer: "C",
    explanation: "\\(10^{-5} \\div 10^{8} = 10^{-5-8} = 10^{-13}\\). Les autres sont fausses : A donne \\(40^{-2}\\), B donne \\(2^{-12}\\), D donne \\(55^{-6}\\)."
  },
  {
    id: 2,
    text: "L'épaisseur d'une feuille de papier est égale à \\(70 \\times 10^{-3}\\) mm. L'épaisseur d'une pile de 2 000 feuilles est égale à :",
    choices: [
      { label: "A", text: "140 cm" },
      { label: "B", text: "14 mm" },
      { label: "C", text: "14 cm" },
      { label: "D", text: "72 cm" }
    ],
    answer: "C",
    explanation: "\\(2\\,000 \\times 70 \\times 10^{-3}\\) mm = \\(140\\,000 \\times 10^{-3}\\) mm = 140 mm = 14 cm."
  },
  {
    id: 3,
    text: "On considère <em>A</em> = \\(2^3 \\times 2^5\\). On a :",
    choices: [
      { label: "A", text: "<em>A</em> = \\(2^{15}\\)" },
      { label: "B", text: "<em>A</em> = \\(2^{8}\\)" },
      { label: "C", text: "<em>A</em> = \\(4^{8}\\)" },
      { label: "D", text: "<em>A</em> = \\(2^{35}\\)" }
    ],
    answer: "B",
    explanation: "\\(2^3 \\times 2^5 = 2^{3+5} = 2^{8}\\)."
  },
  {
    id: 4,
    text: "On considère <em>A</em> = \\(\\frac{5^7}{5^3}\\). On a :",
    choices: [
      { label: "A", text: "<em>A</em> = \\(5^{4}\\)" },
      { label: "B", text: "<em>A</em> = \\(1^{4}\\)" },
      { label: "C", text: "<em>A</em> = \\(5^{10}\\)" },
      { label: "D", text: "<em>A</em> = \\(5^{\\frac{7}{3}}\\)" }
    ],
    answer: "A",
    explanation: "\\(\\frac{5^7}{5^3} = 5^{7-3} = 5^{4}\\)."
  },
  {
    id: 5,
    text: "On considère <em>A</em> = \\((3^4)^2\\). On a :",
    choices: [
      { label: "A", text: "<em>A</em> = \\(3^{6}\\)" },
      { label: "B", text: "<em>A</em> = \\(3^{8}\\)" },
      { label: "C", text: "<em>A</em> = \\(9^{8}\\)" },
      { label: "D", text: "<em>A</em> = \\(3^{16}\\)" }
    ],
    answer: "B",
    explanation: "\\((3^4)^2 = 3^{4 \\times 2} = 3^{8}\\)."
  },
  {
    id: 6,
    text: "On considère <em>A</em> = \\(10^{-3} \\times 10^{7}\\). On a :",
    choices: [
      { label: "A", text: "<em>A</em> = \\(10^{-21}\\)" },
      { label: "B", text: "<em>A</em> = \\(10^{-4}\\)" },
      { label: "C", text: "<em>A</em> = \\(10^{4}\\)" },
      { label: "D", text: "<em>A</em> = \\(10^{10}\\)" }
    ],
    answer: "C",
    explanation: "\\(10^{-3} \\times 10^{7} = 10^{-3+7} = 10^{4}\\)."
  },
  {
    id: 7,
    text: "On considère <em>A</em> = \\(6^3 \\times 6^{-5}\\). On a :",
    choices: [
      { label: "A", text: "<em>A</em> = \\(6^{-2}\\)" },
      { label: "B", text: "<em>A</em> = \\(6^{-15}\\)" },
      { label: "C", text: "<em>A</em> = \\(6^{8}\\)" },
      { label: "D", text: "<em>A</em> = \\(6^{2}\\)" }
    ],
    answer: "A",
    explanation: "\\(6^3 \\times 6^{-5} = 6^{3+(-5)} = 6^{-2}\\)."
  },
  {
    id: 8,
    text: "L'écriture scientifique de 0,00042 est :",
    choices: [
      { label: "A", text: "\\(42 \\times 10^{-5}\\)" },
      { label: "B", text: "\\(4,2 \\times 10^{-4}\\)" },
      { label: "C", text: "\\(0,42 \\times 10^{-3}\\)" },
      { label: "D", text: "\\(4,2 \\times 10^{-3}\\)" }
    ],
    answer: "B",
    explanation: "L'écriture scientifique est de la forme \\(a \\times 10^n\\) avec \\(1 \\leq a < 10\\). On a 0,00042 = \\(4,2 \\times 10^{-4}\\)."
  },
  {
    id: 9,
    text: "On considère <em>A</em> = \\(\\frac{4^5 \\times 4^{-2}}{4^2}\\). On a :",
    choices: [
      { label: "A", text: "<em>A</em> = 4" },
      { label: "B", text: "<em>A</em> = \\(4^5\\)" },
      { label: "C", text: "<em>A</em> = \\(4^{-1}\\)" },
      { label: "D", text: "<em>A</em> = \\(4^{9}\\)" }
    ],
    answer: "A",
    explanation: "\\(\\frac{4^5 \\times 4^{-2}}{4^2} = \\frac{4^{5+(-2)}}{4^2} = \\frac{4^3}{4^2} = 4^{3-2} = 4^1 = 4\\)."
  },
  {
    id: 10,
    text: "On considère <em>A</em> = \\(2^3 \\times 5^3\\). On a :",
    choices: [
      { label: "A", text: "<em>A</em> = \\(10^{9}\\)" },
      { label: "B", text: "<em>A</em> = \\(10^{3}\\)" },
      { label: "C", text: "<em>A</em> = \\(7^{3}\\)" },
      { label: "D", text: "<em>A</em> = \\(10^{6}\\)" }
    ],
    answer: "B",
    explanation: "\\(2^3 \\times 5^3 = (2 \\times 5)^3 = 10^3\\)."
  }
];
