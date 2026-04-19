// Catégorie 3 – Évolutions et variations
// Sous-catégorie 3.4 – Calculer le taux d'évolution équivalent à plusieurs évolutions successives
const qcmCategory = "Évolutions et variations";
const qcmSubcategory = "Calculer le taux d'évolution équivalent à plusieurs évolutions successives";
const questions = [
  {
    id: 1,
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
    id: 2,
    text: "Le prix d'un article est noté <em>P</em>. Il connaît deux augmentations de 20%. Le prix après ces augmentations est :",
    choices: [
      { label: "A", text: "\\(P \\times \\left(1 + \\frac{20}{100}\\right)^{2}\\)" },
      { label: "B", text: "<em>P</em> × 1,40" },
      { label: "C", text: "<em>P</em> ÷ 1,44" },
      { label: "D", text: "\\(P \\times 1{,}2^{2}\\)" }
    ],
    answer: "D",
    explanation: "Deux augmentations successives de 20% donnent un coefficient multiplicateur de 1,2 × 1,2 = 1,2² = 1,44. Le nouveau prix est P × 1,2²."
  }
];
