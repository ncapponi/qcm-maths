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
    text: "Le prix d'un article est noté <em>P</em>. Il connaît deux augmentations de 20%. Le prix après ces augmentations est :",
    choices: [
      { label: "A", text: "\\(P \\times \\left(1 + \\frac{20}{100}\\right)^{2}\\)" },
      { label: "B", text: "\\(P \\times 1{,}40\\)" },
      { label: "C", text: "\\(P \\div 1{,}44\\)" },
      { label: "D", text: "\\(P \\times 1{,}2^{2}\\)" }
    ],
    answer: "D",
    explanation: "Deux augmentations successives de 20% donnent un coefficient multiplicateur de 1,2 × 1,2 = 1,2² = 1,44. Le nouveau prix est P × 1,2²."
  },
  {
    id: 3,
    text: "Lors d'une élection, le quart des électeurs a voté pour A, 20% a voté pour B, un tiers a voté pour C, et le reste a voté pour D. Le candidat ayant recueilli le <u>moins</u> de votes est :",
    choices: [
      { label: "A", text: "A" },
      { label: "B", text: "B" },
      { label: "C", text: "C" },
      { label: "D", text: "D" }
    ],
    answer: "B",
    explanation: "A = 1/4 = 25%, B = 20%, C = 1/3 ≈ 33,3%, D = 100% − 25% − 20% − 33,3% ≈ 21,7%. C'est B qui a recueilli le moins de votes."
  },
  {
    id: 4,
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
    id: 5,
    text: "On considère <em>A</em> = \\(\\frac{1}{100}\\) + \\(\\frac{1}{1000}\\). On a :",
    choices: [
      { label: "A", text: "<em>A</em> = 100,001" },
      { label: "B", text: "<em>A</em> = \\(\\frac{2}{100\,000}\\)" },
      { label: "C", text: "<em>A</em> = 0,11" },
      { label: "D", text: "<em>A</em> = 0,011" }
    ],
    answer: "D",
    explanation: "1/100 = 0,010 et 1/1000 = 0,001, donc A = 0,010 + 0,001 = 0,011."
  },
  {
    id: 6,
    text: "Jean consacre 25 % de sa journée de dimanche à faire ses devoirs. 80 % du temps consacré aux devoirs est consacré à faire un exposé. Le pourcentage du temps consacré à l'exposé par rapport à la journée de dimanche est égal à :",
    choices: [
      { label: "A", text: "80 % − 25 %" },
      { label: "B", text: "\\(\\frac{1}{4}\\) × 80 %" },
      { label: "C", text: "0,08 × 25 %" },
      { label: "D", text: "Cela dépend de la durée de la journée de dimanche." }
    ],
    answer: "B",
    explanation: "25 % de la journée représente 1/4. Puis 80 % de ce temps = 1/4 × 80 % = 20 % de la journée."
  },
  {
    id: 7,
    text: "Un prix diminue de 50 %. Pour retrouver le prix initial, il faut une augmentation de :",
    choices: [
      { label: "A", text: "50 %" },
      { label: "B", text: "100 %" },
      { label: "C", text: "150 %" },
      { label: "D", text: "200 %" }
    ],
    answer: "B",
    explanation: "Si le prix P baisse de 50 %, il devient P/2. Pour retrouver P, il faut multiplier par 2, soit une hausse de 100 %."
  },
  {
    id: 8,
    text: "Le prix d'une tablette a baissé : il est passé de 250 euros à 200 euros. Cela signifie que ce prix a été multiplié par :",
    choices: [
      { label: "A", text: "1,25" },
      { label: "B", text: "0,75" },
      { label: "C", text: "0,8" },
      { label: "D", text: "−0,8" }
    ],
    answer: "C",
    explanation: "200 ÷ 250 = 0,8. Le coefficient multiplicateur est 0,8."
  },
  {
    id: 9,
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
    id: 10,
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
