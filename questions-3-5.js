// Catégorie 3 – Évolutions et variations
// Sous-catégorie 3.5 – Calculer un taux d'évolution réciproque
const qcmCategory = "Évolutions et variations";
const qcmSubcategory = "Calculer un taux d'évolution réciproque";
const questions = [
  {
    id: 1,
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
    id: 2,
    text: "Un prix augmente de 25 %. Le taux d'évolution réciproque (pour revenir au prix initial) est :",
    choices: [
      { label: "A", text: "−25 %" },
      { label: "B", text: "−20 %" },
      { label: "C", text: "−80 %" },
      { label: "D", text: "−75 %" }
    ],
    answer: "B",
    explanation: "Le coefficient est 1,25. Le réciproque est \\(\\frac{1}{1{,}25} = 0{,}80\\), soit une baisse de 20 %."
  },
  {
    id: 3,
    text: "Un prix diminue de 20 %. Pour revenir au prix initial, il faut une augmentation de :",
    choices: [
      { label: "A", text: "20 %" },
      { label: "B", text: "22 %" },
      { label: "C", text: "25 %" },
      { label: "D", text: "80 %" }
    ],
    answer: "C",
    explanation: "Coefficient de baisse : 0,80. Réciproque : \\(\\frac{1}{0{,}80} = 1{,}25\\), soit +25 %."
  },
  {
    id: 4,
    text: "Après une augmentation de 10 %, quel taux de baisse permet de revenir au prix initial ?",
    choices: [
      { label: "A", text: "environ 9,09 %" },
      { label: "B", text: "10 %" },
      { label: "C", text: "11 %" },
      { label: "D", text: "90 %" }
    ],
    answer: "A",
    explanation: "Réciproque de 1,10 : \\(\\frac{1}{1{,}10} \\approx 0{,}9091\\). Taux = \\(1 - 0{,}9091 \\approx 0{,}0909 = 9{,}09\\%\\) de baisse."
  },
  {
    id: 5,
    text: "Un prix augmente de 50 %. Le taux d'évolution réciproque est :",
    choices: [
      { label: "A", text: "−50 %" },
      { label: "B", text: "environ −33,3 %" },
      { label: "C", text: "−25 %" },
      { label: "D", text: "−66,7 %" }
    ],
    answer: "B",
    explanation: "Réciproque de 1,50 : \\(\\frac{1}{1{,}50} = \\frac{2}{3} \\approx 0{,}667\\). Taux = \\(0{,}667 - 1 \\approx -33{,}3\\%\\)."
  },
  {
    id: 6,
    text: "Un prix diminue de 40 %. Pour revenir au prix initial, il faut une augmentation de :",
    choices: [
      { label: "A", text: "40 %" },
      { label: "B", text: "60 %" },
      { label: "C", text: "environ 66,7 %" },
      { label: "D", text: "environ 71,4 %" }
    ],
    answer: "C",
    explanation: "Coefficient de baisse : 0,60. Réciproque : \\(\\frac{1}{0{,}60} = \\frac{5}{3} \\approx 1{,}667\\), soit une hausse d'environ 66,7 %."
  },
  {
    id: 7,
    text: "Le coefficient multiplicateur d'une évolution est 1,40. Le coefficient de l'évolution réciproque est :",
    choices: [
      { label: "A", text: "0,60" },
      { label: "B", text: "\\(\\frac{1}{1{,}40}\\)" },
      { label: "C", text: "−1,40" },
      { label: "D", text: "1,60" }
    ],
    answer: "B",
    explanation: "Le coefficient réciproque est l'inverse : \\(\\frac{1}{1{,}40} \\approx 0{,}714\\)."
  },
  {
    id: 8,
    text: "Un prix a été multiplié par 0,70. Le coefficient de l'évolution réciproque est :",
    choices: [
      { label: "A", text: "1,30" },
      { label: "B", text: "\\(\\frac{10}{7}\\)" },
      { label: "C", text: "0,30" },
      { label: "D", text: "1,70" }
    ],
    answer: "B",
    explanation: "Le réciproque de 0,70 est \\(\\frac{1}{0{,}70} = \\frac{10}{7} \\approx 1{,}4286\\)."
  },
  {
    id: 9,
    text: "Après une baisse de 10 %, quel taux d'augmentation permet de retrouver la valeur initiale ?",
    choices: [
      { label: "A", text: "10 %" },
      { label: "B", text: "environ 11,1 %" },
      { label: "C", text: "12 %" },
      { label: "D", text: "90 %" }
    ],
    answer: "B",
    explanation: "Coefficient de baisse : 0,90. Réciproque : \\(\\frac{1}{0{,}90} \\approx 1{,}111\\), soit une hausse d'environ 11,1 %."
  },
  {
    id: 10,
    text: "Un prix double (augmentation de 100 %). Le taux d'évolution réciproque est :",
    choices: [
      { label: "A", text: "−100 %" },
      { label: "B", text: "−50 %" },
      { label: "C", text: "−200 %" },
      { label: "D", text: "50 %" }
    ],
    answer: "B",
    explanation: "Doubler = multiplier par 2. Réciproque : \\(\\frac{1}{2} = 0{,}50\\), soit une baisse de 50 %."
  }
];
