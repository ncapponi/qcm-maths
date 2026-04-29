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
  },
  {
    id: 2,
    text: "« Augmenter de 25 % » revient à multiplier par :",
    choices: [
      { label: "A", text: "0,25" },
      { label: "B", text: "0,75" },
      { label: "C", text: "1,25" },
      { label: "D", text: "25" }
    ],
    answer: "C",
    explanation: "Augmenter de 25 % = multiplier par \\(1 + 0{,}25 = 1{,}25\\)."
  },
  {
    id: 3,
    text: "« Diminuer de 30 % » revient à multiplier par :",
    choices: [
      { label: "A", text: "0,30" },
      { label: "B", text: "0,70" },
      { label: "C", text: "1,30" },
      { label: "D", text: "−0,30" }
    ],
    answer: "B",
    explanation: "Diminuer de 30 % = multiplier par \\(1 - 0{,}30 = 0{,}70\\)."
  },
  {
    id: 4,
    text: "Multiplier un prix par 1,08 revient à :",
    choices: [
      { label: "A", text: "augmenter de 8 %" },
      { label: "B", text: "diminuer de 8 %" },
      { label: "C", text: "augmenter de 80 %" },
      { label: "D", text: "augmenter de 1,08 %" }
    ],
    answer: "A",
    explanation: "\\(1{,}08 = 1 + 0{,}08\\). Le coefficient 1,08 traduit une augmentation de 8 %."
  },
  {
    id: 5,
    text: "Multiplier un prix par 0,65 revient à :",
    choices: [
      { label: "A", text: "augmenter de 65 %" },
      { label: "B", text: "diminuer de 65 %" },
      { label: "C", text: "diminuer de 35 %" },
      { label: "D", text: "augmenter de 35 %" }
    ],
    answer: "C",
    explanation: "\\(0{,}65 = 1 - 0{,}35\\). Le coefficient 0,65 traduit une diminution de 35 %."
  },
  {
    id: 6,
    text: "Un article coûte 80 €. Son prix augmente de 15 %. Le coefficient multiplicateur est :",
    choices: [
      { label: "A", text: "0,15" },
      { label: "B", text: "0,85" },
      { label: "C", text: "1,15" },
      { label: "D", text: "15" }
    ],
    answer: "C",
    explanation: "Augmenter de 15 % correspond au coefficient \\(1 + 0{,}15 = 1{,}15\\)."
  },
  {
    id: 7,
    text: "Un loyer diminue de 5 %. Le coefficient multiplicateur correspondant est :",
    choices: [
      { label: "A", text: "0,05" },
      { label: "B", text: "0,5" },
      { label: "C", text: "0,95" },
      { label: "D", text: "1,05" }
    ],
    answer: "C",
    explanation: "Diminuer de 5 % = multiplier par \\(1 - 0{,}05 = 0{,}95\\)."
  },
  {
    id: 8,
    text: "Le coefficient multiplicateur associé à « augmenter de 100 % » est :",
    choices: [
      { label: "A", text: "1" },
      { label: "B", text: "2" },
      { label: "C", text: "100" },
      { label: "D", text: "0,01" }
    ],
    answer: "B",
    explanation: "Augmenter de 100 % = multiplier par \\(1 + 1 = 2\\). Le prix double."
  },
  {
    id: 9,
    text: "Un prix est multiplié par 0,92. Cela correspond à :",
    choices: [
      { label: "A", text: "une augmentation de 92 %" },
      { label: "B", text: "une diminution de 92 %" },
      { label: "C", text: "une augmentation de 8 %" },
      { label: "D", text: "une diminution de 8 %" }
    ],
    answer: "D",
    explanation: "\\(0{,}92 = 1 - 0{,}08\\), soit une diminution de 8 %."
  },
  {
    id: 10,
    text: "« Tripler un prix » revient à l'augmenter de :",
    choices: [
      { label: "A", text: "30 %" },
      { label: "B", text: "100 %" },
      { label: "C", text: "200 %" },
      { label: "D", text: "300 %" }
    ],
    answer: "C",
    explanation: "Tripler = multiplier par 3 = \\(1 + 2\\). Le taux d'augmentation est donc 200 %."
  }
];
