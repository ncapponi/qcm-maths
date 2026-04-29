// Catégorie 3 – Évolutions et variations
// Sous-catégorie 3.2 – Appliquer un taux d'évolution pour calculer une valeur finale ou initiale
const qcmCategory = "Évolutions et variations";
const qcmSubcategory = "Appliquer un taux d'évolution pour calculer une valeur finale ou initiale";
const questions = [
  {
    id: 1,
    text: "Une tablette coûte 200 euros. Son prix diminue de 30%. Le prix après cette diminution est :",
    choices: [
      { label: "A", text: "140 euros" },
      { label: "B", text: "170 euros" },
      { label: "C", text: "194 euros" },
      { label: "D", text: "197 euros" }
    ],
    answer: "A",
    explanation: "200 × (1 − 0,30) = 200 × 0,70 = 140 euros."
  },
  {
    id: 2,
    text: "Un article coûte 400 euros. Le prix augmente de 20%. Le nouveau prix est :",
    choices: [
      { label: "A", text: "420 euros" },
      { label: "B", text: "480 euros" },
      { label: "C", text: "500 euros" },
      { label: "D", text: "320 euros" }
    ],
    answer: "B",
    explanation: "400 × (1 + 0,20) = 400 × 1,20 = 480 euros."
  },
  {
    id: 3,
    text: "Un pantalon coûte 60 €. Son prix augmente de 15 %. Le nouveau prix est :",
    choices: [
      { label: "A", text: "63 €" },
      { label: "B", text: "66 €" },
      { label: "C", text: "69 €" },
      { label: "D", text: "75 €" }
    ],
    answer: "C",
    explanation: "\\(60 \\times 1{,}15 = 69\\) €."
  },
  {
    id: 4,
    text: "Le loyer mensuel d'un appartement est de 750 €. Il diminue de 4 %. Le nouveau loyer est :",
    choices: [
      { label: "A", text: "710 €" },
      { label: "B", text: "720 €" },
      { label: "C", text: "730 €" },
      { label: "D", text: "746 €" }
    ],
    answer: "B",
    explanation: "\\(750 \\times 0{,}96 = 720\\) €."
  },
  {
    id: 5,
    text: "Après une augmentation de 10 %, un abonnement coûte 55 €. Quel était le prix initial ?",
    choices: [
      { label: "A", text: "45 €" },
      { label: "B", text: "49,50 €" },
      { label: "C", text: "50 €" },
      { label: "D", text: "60,50 €" }
    ],
    answer: "C",
    explanation: "Prix initial = \\(\\frac{55}{1{,}10} = 50\\) €."
  },
  {
    id: 6,
    text: "Après une réduction de 20 %, un article coûte 96 €. Son prix initial était :",
    choices: [
      { label: "A", text: "76,80 €" },
      { label: "B", text: "115,20 €" },
      { label: "C", text: "116 €" },
      { label: "D", text: "120 €" }
    ],
    answer: "D",
    explanation: "Prix initial = \\(\\frac{96}{0{,}80} = 120\\) €."
  },
  {
    id: 7,
    text: "Une population de 8 000 habitants augmente de 2,5 %. La nouvelle population est :",
    choices: [
      { label: "A", text: "8 020" },
      { label: "B", text: "8 200" },
      { label: "C", text: "8 250" },
      { label: "D", text: "10 000" }
    ],
    answer: "B",
    explanation: "\\(8\\,000 \\times 1{,}025 = 8\\,200\\)."
  },
  {
    id: 8,
    text: "Après une baisse de 12 %, un objet coûte 220 €. Quel était le prix avant la baisse ?",
    choices: [
      { label: "A", text: "193,60 €" },
      { label: "B", text: "232 €" },
      { label: "C", text: "246,40 €" },
      { label: "D", text: "250 €" }
    ],
    answer: "D",
    explanation: "Prix initial = \\(\\frac{220}{0{,}88} = 250\\) €."
  },
  {
    id: 9,
    text: "Un placement de 1 500 € rapporte 3 % par an. La valeur au bout d'un an est :",
    choices: [
      { label: "A", text: "1 503 €" },
      { label: "B", text: "1 530 €" },
      { label: "C", text: "1 545 €" },
      { label: "D", text: "1 950 €" }
    ],
    answer: "C",
    explanation: "\\(1\\,500 \\times 1{,}03 = 1\\,545\\) €."
  },
  {
    id: 10,
    text: "Un prix a été multiplié par 0,75. Le prix final est 180 €. Le prix initial était :",
    choices: [
      { label: "A", text: "135 €" },
      { label: "B", text: "225 €" },
      { label: "C", text: "240 €" },
      { label: "D", text: "255 €" }
    ],
    answer: "C",
    explanation: "Prix initial = \\(\\frac{180}{0{,}75} = 240\\) €."
  }
];
