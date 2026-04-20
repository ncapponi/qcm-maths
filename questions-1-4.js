// Catégorie 1 – Calcul numérique et algébrique
// Sous-catégorie 1.4 – Passer d'une écriture d'un nombre à une autre
const qcmCategory = "Calcul numérique et algébrique";
const qcmSubcategory = "Passer d'une écriture d'un nombre à une autre";
const questions = [
  {
    id: 1,
    text: "L'écriture décimale de \\(\\frac{3}{4}\\) est :",
    choices: [
      { label: "A", text: "0,34" },
      { label: "B", text: "0,75" },
      { label: "C", text: "1,33" },
      { label: "D", text: "0,43" }
    ],
    answer: "B",
    explanation: "\\(\\frac{3}{4} = 3 \\div 4 = 0{,}75\\)."
  },
  {
    id: 2,
    text: "Le pourcentage correspondant à \\(\\frac{2}{5}\\) est :",
    choices: [
      { label: "A", text: "25 %" },
      { label: "B", text: "20 %" },
      { label: "C", text: "40 %" },
      { label: "D", text: "50 %" }
    ],
    answer: "C",
    explanation: "\\(\\frac{2}{5} = 0{,}4 = 40\\,\\%\\)."
  },
  {
    id: 3,
    text: "L'écriture fractionnaire de 0,125 est :",
    choices: [
      { label: "A", text: "\\(\\frac{1}{4}\\)" },
      { label: "B", text: "\\(\\frac{1}{5}\\)" },
      { label: "C", text: "\\(\\frac{1}{8}\\)" },
      { label: "D", text: "\\(\\frac{1}{10}\\)" }
    ],
    answer: "C",
    explanation: "\\(0{,}125 = \\frac{125}{1000} = \\frac{1}{8}\\)."
  },
  {
    id: 4,
    text: "35 % est égal à :",
    choices: [
      { label: "A", text: "\\(\\frac{7}{20}\\)" },
      { label: "B", text: "\\(\\frac{7}{10}\\)" },
      { label: "C", text: "\\(\\frac{35}{10}\\)" },
      { label: "D", text: "\\(\\frac{5}{7}\\)" }
    ],
    answer: "A",
    explanation: "\\(35\\,\\% = \\frac{35}{100} = \\frac{7}{20}\\)."
  },
  {
    id: 5,
    text: "L'écriture décimale de \\(\\frac{7}{20}\\) est :",
    choices: [
      { label: "A", text: "0,72" },
      { label: "B", text: "3,5" },
      { label: "C", text: "0,35" },
      { label: "D", text: "0,28" }
    ],
    answer: "C",
    explanation: "\\(\\frac{7}{20} = \\frac{35}{100} = 0{,}35\\)."
  },
  {
    id: 6,
    text: "Le pourcentage correspondant à 0,08 est :",
    choices: [
      { label: "A", text: "0,8 %" },
      { label: "B", text: "80 %" },
      { label: "C", text: "8 %" },
      { label: "D", text: "0,08 %" }
    ],
    answer: "C",
    explanation: "\\(0{,}08 = \\frac{8}{100} = 8\\,\\%\\)."
  },
  {
    id: 7,
    text: "L'écriture fractionnaire irréductible de 0,6 est :",
    choices: [
      { label: "A", text: "\\(\\frac{6}{10}\\)" },
      { label: "B", text: "\\(\\frac{3}{5}\\)" },
      { label: "C", text: "\\(\\frac{2}{3}\\)" },
      { label: "D", text: "\\(\\frac{1}{6}\\)" }
    ],
    answer: "B",
    explanation: "\\(0{,}6 = \\frac{6}{10} = \\frac{3}{5}\\)."
  },
  {
    id: 8,
    text: "\\(\\frac{5}{8}\\) est égal à :",
    choices: [
      { label: "A", text: "0,625" },
      { label: "B", text: "0,58" },
      { label: "C", text: "0,585" },
      { label: "D", text: "1,6" }
    ],
    answer: "A",
    explanation: "\\(\\frac{5}{8} = 5 \\div 8 = 0{,}625\\)."
  },
  {
    id: 9,
    text: "Le pourcentage correspondant à \\(\\frac{1}{3}\\) est environ :",
    choices: [
      { label: "A", text: "30 %" },
      { label: "B", text: "33 %" },
      { label: "C", text: "\\(33{,}\\overline{3}\\) %" },
      { label: "D", text: "35 %" }
    ],
    answer: "C",
    explanation: "\\(\\frac{1}{3} \\approx 0{,}3333\\ldots = 33{,}\\overline{3}\\,\\%\\)."
  },
  {
    id: 10,
    text: "L'écriture fractionnaire irréductible de 150 % est :",
    choices: [
      { label: "A", text: "\\(\\frac{15}{10}\\)" },
      { label: "B", text: "\\(\\frac{3}{2}\\)" },
      { label: "C", text: "\\(\\frac{150}{10}\\)" },
      { label: "D", text: "\\(\\frac{5}{3}\\)" }
    ],
    answer: "B",
    explanation: "\\(150\\,\\% = \\frac{150}{100} = \\frac{3}{2}\\)."
  }
];
