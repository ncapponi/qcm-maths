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
  },
  {
    id: 3,
    text: "Un prix augmente de 10 % puis diminue de 10 %. Le coefficient multiplicateur global est :",
    choices: [
      { label: "A", text: "1" },
      { label: "B", text: "0,99" },
      { label: "C", text: "1,01" },
      { label: "D", text: "0,90" }
    ],
    answer: "B",
    explanation: "\\(1{,}10 \\times 0{,}90 = 0{,}99\\). Le prix a globalement diminué de 1 %."
  },
  {
    id: 4,
    text: "Un article subit trois augmentations successives de 10 %. Le coefficient multiplicateur global est :",
    choices: [
      { label: "A", text: "1,30" },
      { label: "B", text: "\\(1{,}1^3\\)" },
      { label: "C", text: "3,30" },
      { label: "D", text: "1,03" }
    ],
    answer: "B",
    explanation: "Trois augmentations de 10 % : \\(1{,}1 \\times 1{,}1 \\times 1{,}1 = 1{,}1^3 = 1{,}331\\)."
  },
  {
    id: 5,
    text: "Un prix diminue de 20 % puis augmente de 25 %. L'évolution globale est :",
    choices: [
      { label: "A", text: "une augmentation de 5 %" },
      { label: "B", text: "le prix n'a pas changé" },
      { label: "C", text: "une diminution de 5 %" },
      { label: "D", text: "une augmentation de 45 %" }
    ],
    answer: "B",
    explanation: "\\(0{,}80 \\times 1{,}25 = 1{,}00\\). Le prix revient à sa valeur initiale."
  },
  {
    id: 6,
    text: "Un prix augmente de 50 % puis diminue de 40 %. Le taux d'évolution global est :",
    choices: [
      { label: "A", text: "−10 %" },
      { label: "B", text: "+10 %" },
      { label: "C", text: "−15 %" },
      { label: "D", text: "0 %" }
    ],
    answer: "A",
    explanation: "\\(1{,}50 \\times 0{,}60 = 0{,}90\\). Le taux global est \\(0{,}90 - 1 = -0{,}10 = -10\\%\\)."
  },
  {
    id: 7,
    text: "Un salaire augmente de 5 % puis de 3 %. Le taux d'augmentation global est :",
    choices: [
      { label: "A", text: "8 %" },
      { label: "B", text: "8,15 %" },
      { label: "C", text: "15 %" },
      { label: "D", text: "1,08 %" }
    ],
    answer: "B",
    explanation: "\\(1{,}05 \\times 1{,}03 = 1{,}0815\\). Le taux global est \\(1{,}0815 - 1 = 0{,}0815 = 8{,}15\\%\\)."
  },
  {
    id: 8,
    text: "Un prix diminue de 10 % puis diminue encore de 10 %. Le taux d'évolution global est :",
    choices: [
      { label: "A", text: "−20 %" },
      { label: "B", text: "−19 %" },
      { label: "C", text: "−21 %" },
      { label: "D", text: "−18 %" }
    ],
    answer: "B",
    explanation: "\\(0{,}90 \\times 0{,}90 = 0{,}81\\). Le taux global est \\(0{,}81 - 1 = -0{,}19 = -19\\%\\)."
  },
  {
    id: 9,
    text: "Une population augmente de 2 % chaque année pendant 3 ans. Le coefficient multiplicateur global est :",
    choices: [
      { label: "A", text: "1,06" },
      { label: "B", text: "\\(1{,}02^3\\)" },
      { label: "C", text: "1,23" },
      { label: "D", text: "3,06" }
    ],
    answer: "B",
    explanation: "\\(1{,}02 \\times 1{,}02 \\times 1{,}02 = 1{,}02^3 \\approx 1{,}0612\\)."
  },
  {
    id: 10,
    text: "Un prix augmente de 30 % puis diminue de 20 %. Le taux d'évolution global est :",
    choices: [
      { label: "A", text: "+10 %" },
      { label: "B", text: "+4 %" },
      { label: "C", text: "−4 %" },
      { label: "D", text: "+50 %" }
    ],
    answer: "B",
    explanation: "\\(1{,}30 \\times 0{,}80 = 1{,}04\\). Le taux global est \\(1{,}04 - 1 = 0{,}04 = +4\\%\\)."
  }
];
