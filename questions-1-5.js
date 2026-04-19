// Catégorie 1 – Calcul numérique et algébrique
// Sous-catégorie 1.5 – Estimer un ordre de grandeur
const qcmCategory = "Calcul numérique et algébrique";
const qcmSubcategory = "Estimer un ordre de grandeur";
const questions = [
  {
    id: 1,
    text: "\\(10^{30} + 10^{-30}\\) est environ égal à :",
    choices: [
      { label: "A", text: "\\(10^{0}\\)" },
      { label: "B", text: "0" },
      { label: "C", text: "\\(10^{30}\\)" },
      { label: "D", text: "\\(20^{30}\\)" }
    ],
    answer: "C",
    explanation: "\\(10^{-30}\\) est un nombre extrêmement petit (quasi nul). Donc \\(10^{30} + 10^{-30} \\approx 10^{30}\\)."
  }
];
