// Catégorie 2 – Proportions et pourcentages
// Sous-catégorie 2.1 – Calculer, appliquer, exprimer une proportion sous différentes formes
const qcmCategory = "Proportions et pourcentages";
const qcmSubcategory = "Calculer, appliquer, exprimer une proportion sous différentes formes";
const questions = [
  {
    id: 1,
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
    id: 2,
    text: "Quelle est l'écriture décimale de \\(\\frac{3}{8}\\) ?",
    choices: [
      { label: "A", text: "0,375" },
      { label: "B", text: "0,38" },
      { label: "C", text: "0,35" },
      { label: "D", text: "0,83" }
    ],
    answer: "A",
    explanation: "\\(\\frac{3}{8} = 3 \\div 8 = 0{,}375\\)."
  },
  {
    id: 3,
    text: "Exprimer 0,45 sous forme de fraction irréductible.",
    choices: [
      { label: "A", text: "\\(\\frac{45}{100}\\)" },
      { label: "B", text: "\\(\\frac{9}{20}\\)" },
      { label: "C", text: "\\(\\frac{4}{5}\\)" },
      { label: "D", text: "\\(\\frac{9}{25}\\)" }
    ],
    answer: "B",
    explanation: "\\(0{,}45 = \\frac{45}{100} = \\frac{9}{20}\\) après simplification par 5."
  },
  {
    id: 4,
    text: "Dans une classe de 30 élèves, 12 sont des filles. Quelle est la proportion de filles exprimée en pourcentage ?",
    choices: [
      { label: "A", text: "30 %" },
      { label: "B", text: "36 %" },
      { label: "C", text: "40 %" },
      { label: "D", text: "42 %" }
    ],
    answer: "C",
    explanation: "\\(\\frac{12}{30} = \\frac{2}{5} = 0{,}4 = 40\\%\\)."
  },
  {
    id: 5,
    text: "Quel pourcentage correspond à la fraction \\(\\frac{7}{20}\\) ?",
    choices: [
      { label: "A", text: "7 %" },
      { label: "B", text: "14 %" },
      { label: "C", text: "35 %" },
      { label: "D", text: "70 %" }
    ],
    answer: "C",
    explanation: "\\(\\frac{7}{20} = \\frac{35}{100} = 35\\%\\)."
  },
  {
    id: 6,
    text: "La proportion 0,125 correspond à :",
    choices: [
      { label: "A", text: "\\(\\frac{1}{4}\\)" },
      { label: "B", text: "\\(\\frac{1}{8}\\)" },
      { label: "C", text: "\\(\\frac{1}{5}\\)" },
      { label: "D", text: "\\(\\frac{1}{12}\\)" }
    ],
    answer: "B",
    explanation: "\\(0{,}125 = \\frac{125}{1000} = \\frac{1}{8}\\)."
  },
  {
    id: 7,
    text: "Parmi ces quatre nombres, lequel est égal à 75 % ?",
    choices: [
      { label: "A", text: "\\(\\frac{7}{5}\\)" },
      { label: "B", text: "\\(\\frac{5}{7}\\)" },
      { label: "C", text: "\\(\\frac{3}{4}\\)" },
      { label: "D", text: "\\(\\frac{4}{3}\\)" }
    ],
    answer: "C",
    explanation: "\\(75\\% = \\frac{75}{100} = \\frac{3}{4}\\)."
  },
  {
    id: 8,
    text: "Un sac contient 200 billes dont 70 sont bleues. La proportion de billes bleues est :",
    choices: [
      { label: "A", text: "0,7" },
      { label: "B", text: "0,35" },
      { label: "C", text: "0,07" },
      { label: "D", text: "0,035" }
    ],
    answer: "B",
    explanation: "\\(\\frac{70}{200} = \\frac{7}{20} = 0{,}35\\)."
  },
  {
    id: 9,
    text: "Quelle fraction irréductible est égale à 60 % ?",
    choices: [
      { label: "A", text: "\\(\\frac{6}{10}\\)" },
      { label: "B", text: "\\(\\frac{3}{5}\\)" },
      { label: "C", text: "\\(\\frac{2}{3}\\)" },
      { label: "D", text: "\\(\\frac{4}{6}\\)" }
    ],
    answer: "B",
    explanation: "\\(60\\% = \\frac{60}{100} = \\frac{3}{5}\\). Les autres fractions ne sont pas irréductibles ou ne valent pas 60 %."
  },
  {
    id: 10,
    text: "Dans un groupe de 250 personnes, 15 % portent des lunettes. La proportion de porteurs de lunettes sous forme de fraction irréductible est :",
    choices: [
      { label: "A", text: "\\(\\frac{15}{250}\\)" },
      { label: "B", text: "\\(\\frac{3}{50}\\)" },
      { label: "C", text: "\\(\\frac{3}{20}\\)" },
      { label: "D", text: "\\(\\frac{15}{100}\\)" }
    ],
    answer: "C",
    explanation: "\\(15\\% = \\frac{15}{100} = \\frac{3}{20}\\). La proportion ne dépend pas de la taille du groupe."
  }
];
