// Catégorie 2 – Proportions et pourcentages
// Sous-catégorie 2.2 – Utiliser une proportion pour calculer une partie ou un tout
const qcmCategory = "Proportions et pourcentages";
const qcmSubcategory = "Utiliser une proportion pour calculer une partie ou un tout";
const questions = [
  {
    id: 1,
    text: "Dans un lycée, le quart des élèves sont internes, parmi eux, la moitié sont des filles. La proportion des filles internes par rapport à l'ensemble des élèves du lycée est égale à :",
    choices: [
      { label: "A", text: "4%" },
      { label: "B", text: "12,5%" },
      { label: "C", text: "25%" },
      { label: "D", text: "50%" }
    ],
    answer: "B",
    explanation: "1/4 × 1/2 = 1/8 = 12,5%."
  },
  {
    id: 2,
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
    id: 3,
    text: "Un magasin compte 400 articles. 30 % de ces articles sont en promotion. Combien d'articles sont en promotion ?",
    choices: [
      { label: "A", text: "30" },
      { label: "B", text: "80" },
      { label: "C", text: "120" },
      { label: "D", text: "130" }
    ],
    answer: "C",
    explanation: "\\(400 \\times 0{,}30 = 120\\) articles."
  },
  {
    id: 4,
    text: "Dans une entreprise, 45 personnes sur 150 travaillent à temps partiel. Quel est le nombre total d'employés si l'on sait que les temps partiels représentent 30 % de l'effectif ?",
    choices: [
      { label: "A", text: "135" },
      { label: "B", text: "150" },
      { label: "C", text: "200" },
      { label: "D", text: "450" }
    ],
    answer: "B",
    explanation: "\\(\\frac{45}{150} = 0{,}30 = 30\\%\\). L'effectif total est bien 150."
  },
  {
    id: 5,
    text: "Une bibliothèque possède 2 000 livres. Les romans représentent \\(\\frac{2}{5}\\) de la collection. Combien y a-t-il de romans ?",
    choices: [
      { label: "A", text: "200" },
      { label: "B", text: "400" },
      { label: "C", text: "600" },
      { label: "D", text: "800" }
    ],
    answer: "D",
    explanation: "\\(\\frac{2}{5} \\times 2\\,000 = 800\\) romans."
  },
  {
    id: 6,
    text: "Dans un lot de 60 pièces, on sait que 15 sont défectueuses. Les pièces défectueuses représentent 25 % du lot. Si un autre lot contient 35 pièces défectueuses représentant aussi 25 %, combien de pièces contient ce lot ?",
    choices: [
      { label: "A", text: "105" },
      { label: "B", text: "120" },
      { label: "C", text: "140" },
      { label: "D", text: "175" }
    ],
    answer: "C",
    explanation: "Si 35 représentent 25 % du total, alors le total = \\(\\frac{35}{0{,}25} = 140\\) pièces."
  },
  {
    id: 7,
    text: "Un collège compte 600 élèves. 40 % des élèves pratiquent un sport. Parmi les sportifs, 25 % font de la natation. Combien d'élèves font de la natation ?",
    choices: [
      { label: "A", text: "40" },
      { label: "B", text: "60" },
      { label: "C", text: "100" },
      { label: "D", text: "150" }
    ],
    answer: "B",
    explanation: "Sportifs : \\(600 \\times 0{,}40 = 240\\). Nageurs : \\(240 \\times 0{,}25 = 60\\)."
  },
  {
    id: 8,
    text: "72 élèves d'un lycée suivent l'option musique. Ils représentent 12 % de l'effectif total. Quel est le nombre total d'élèves du lycée ?",
    choices: [
      { label: "A", text: "500" },
      { label: "B", text: "600" },
      { label: "C", text: "720" },
      { label: "D", text: "864" }
    ],
    answer: "B",
    explanation: "Si 72 = 12 % du total, alors le total = \\(\\frac{72}{0{,}12} = 600\\) élèves."
  },
  {
    id: 9,
    text: "Un réservoir contient 150 litres. On en retire 20 %. Quel volume reste-t-il dans le réservoir ?",
    choices: [
      { label: "A", text: "20 litres" },
      { label: "B", text: "30 litres" },
      { label: "C", text: "120 litres" },
      { label: "D", text: "130 litres" }
    ],
    answer: "C",
    explanation: "On retire \\(150 \\times 0{,}20 = 30\\) litres. Il reste \\(150 - 30 = 120\\) litres."
  },
  {
    id: 10,
    text: "Lors d'un sondage, 84 personnes ont répondu « oui », ce qui représente \\(\\frac{3}{5}\\) des personnes interrogées. Combien de personnes ont été interrogées au total ?",
    choices: [
      { label: "A", text: "100" },
      { label: "B", text: "120" },
      { label: "C", text: "140" },
      { label: "D", text: "168" }
    ],
    answer: "C",
    explanation: "Si 84 = \\(\\frac{3}{5}\\) du total, alors le total = \\(84 \\times \\frac{5}{3} = 140\\)."
  }
];
