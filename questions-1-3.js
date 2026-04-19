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
  }
];
