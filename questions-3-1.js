// Catégorie 3 – Évolutions et variations
// Sous-catégorie 3.1 – Passer d'une formulation additive à une formulation multiplicative
const qcmCategory = "Évolutions et variations";
const qcmSubcategory = "Passer d'une formulation additive à une formulation multiplicative";
const questions = [
  {
    id: 1,
    text: "Un sac coûte 130 euros. Le prix baisse de 10%. Le nouveau prix est :",
    choices: [
      { label: "A", text: "130 × 0,1" },
      { label: "B", text: "130 × (−\\(\\frac{10}{100}\\))" },
      { label: "C", text: "130 × (1 + \\(\\frac{10}{100}\\))" },
      { label: "D", text: "130 × 0,9" }
    ],
    answer: "D",
    explanation: "Une baisse de 10% correspond à multiplier par (1 − 0,10) = 0,9. Le nouveau prix est 130 × 0,9 = 117 euros."
  }
];
