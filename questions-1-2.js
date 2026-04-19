// Catégorie 1 – Calcul numérique et algébrique
// Sous-catégorie 1.2 – Effectuer des opérations et comparaisons entre fractions simples
const qcmCategory = "Calcul numérique et algébrique";
const qcmSubcategory = "Effectuer des opérations et comparaisons entre fractions simples";
const questions = [
  {
    id: 1,
    text: "On considère <em>A</em> = 2 ÷ (1 − \\(\\frac{2}{3}\\)). On a :",
    choices: [
      { label: "A", text: "<em>A</em> = −1" },
      { label: "B", text: "<em>A</em> = \\(\\frac{2}{3}\\)" },
      { label: "C", text: "<em>A</em> = 6" },
      { label: "D", text: "<em>A</em> = 9" }
    ],
    answer: "C",
    explanation: "1 − 2/3 = 1/3, donc A = 2 ÷ (1/3) = 2 × 3 = 6."
  },
  {
    id: 2,
    text: "On considère <em>A</em> = \\(\\frac{1}{100}\\) + \\(\\frac{1}{1000}\\). On a :",
    choices: [
      { label: "A", text: "<em>A</em> = 100,001" },
      { label: "B", text: "<em>A</em> = \\(\\frac{2}{100\,000}\\)" },
      { label: "C", text: "<em>A</em> = 0,11" },
      { label: "D", text: "<em>A</em> = 0,011" }
    ],
    answer: "D",
    explanation: "1/100 = 0,010 et 1/1000 = 0,001, donc A = 0,010 + 0,001 = 0,011."
  }
];
