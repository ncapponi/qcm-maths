// Catégorie 3 – Évolutions et variations
// Sous-catégorie 3.3 – Calculer un taux d'évolution et l'exprimer en pourcentage
const qcmCategory = "Évolutions et variations";
const qcmSubcategory = "Calculer un taux d'évolution et l'exprimer en pourcentage";
const questions = [
  {
    id: 1,
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
    id: 2,
    text: "Un loyer passe de 600 € à 630 €. Le taux d'évolution est :",
    choices: [
      { label: "A", text: "3 %" },
      { label: "B", text: "5 %" },
      { label: "C", text: "30 %" },
      { label: "D", text: "−5 %" }
    ],
    answer: "B",
    explanation: "Taux = \\(\\frac{630 - 600}{600} = \\frac{30}{600} = 0{,}05 = 5\\%\\)."
  },
  {
    id: 3,
    text: "Le nombre d'abonnés d'un club passe de 400 à 340. Le taux d'évolution est :",
    choices: [
      { label: "A", text: "−15 %" },
      { label: "B", text: "−17,6 %" },
      { label: "C", text: "15 %" },
      { label: "D", text: "−60 %" }
    ],
    answer: "A",
    explanation: "Taux = \\(\\frac{340 - 400}{400} = \\frac{-60}{400} = -0{,}15 = -15\\%\\)."
  },
  {
    id: 4,
    text: "Un article passe de 80 € à 100 €. Le taux d'évolution en pourcentage est :",
    choices: [
      { label: "A", text: "20 %" },
      { label: "B", text: "25 %" },
      { label: "C", text: "80 %" },
      { label: "D", text: "125 %" }
    ],
    answer: "B",
    explanation: "Taux = \\(\\frac{100 - 80}{80} = \\frac{20}{80} = 0{,}25 = 25\\%\\)."
  },
  {
    id: 5,
    text: "Une action en bourse passe de 50 € à 45 €. Le taux d'évolution est :",
    choices: [
      { label: "A", text: "−10 %" },
      { label: "B", text: "−5 %" },
      { label: "C", text: "10 %" },
      { label: "D", text: "−11,1 %" }
    ],
    answer: "A",
    explanation: "Taux = \\(\\frac{45 - 50}{50} = \\frac{-5}{50} = -0{,}10 = -10\\%\\)."
  },
  {
    id: 6,
    text: "Le chiffre d'affaires d'une entreprise passe de 200 000 € à 230 000 €. Le coefficient multiplicateur est :",
    choices: [
      { label: "A", text: "0,87" },
      { label: "B", text: "1,30" },
      { label: "C", text: "1,15" },
      { label: "D", text: "0,15" }
    ],
    answer: "C",
    explanation: "CM = \\(\\frac{230\\,000}{200\\,000} = 1{,}15\\). Cela correspond à une augmentation de 15 %."
  },
  {
    id: 7,
    text: "La population d'une ville passe de 12 000 à 10 800 habitants. Le taux d'évolution est :",
    choices: [
      { label: "A", text: "−10 %" },
      { label: "B", text: "−12 %" },
      { label: "C", text: "10 %" },
      { label: "D", text: "−1 200 %" }
    ],
    answer: "A",
    explanation: "Taux = \\(\\frac{10\\,800 - 12\\,000}{12\\,000} = \\frac{-1\\,200}{12\\,000} = -0{,}10 = -10\\%\\)."
  },
  {
    id: 8,
    text: "Un salaire passe de 1 800 € à 1 890 €. Le taux d'augmentation est :",
    choices: [
      { label: "A", text: "4 %" },
      { label: "B", text: "5 %" },
      { label: "C", text: "9 %" },
      { label: "D", text: "90 %" }
    ],
    answer: "B",
    explanation: "Taux = \\(\\frac{1\\,890 - 1\\,800}{1\\,800} = \\frac{90}{1\\,800} = 0{,}05 = 5\\%\\)."
  },
  {
    id: 9,
    text: "Un réservoir contient 500 L d'eau. Après une fuite, il n'en contient plus que 475 L. Le taux d'évolution est :",
    choices: [
      { label: "A", text: "−25 %" },
      { label: "B", text: "5 %" },
      { label: "C", text: "−5 %" },
      { label: "D", text: "−5,3 %" }
    ],
    answer: "C",
    explanation: "Taux = \\(\\frac{475 - 500}{500} = \\frac{-25}{500} = -0{,}05 = -5\\%\\)."
  },
  {
    id: 10,
    text: "Le prix d'un billet de train passe de 35 € à 42 €. Le taux d'évolution est :",
    choices: [
      { label: "A", text: "7 %" },
      { label: "B", text: "16,7 %" },
      { label: "C", text: "20 %" },
      { label: "D", text: "120 %" }
    ],
    answer: "C",
    explanation: "Taux = \\(\\frac{42 - 35}{35} = \\frac{7}{35} = 0{,}20 = 20\\%\\)."
  }
];
