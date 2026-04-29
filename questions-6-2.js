// Catégorie 6 – Probabilités
// Sous-catégorie 6.2 – Savoir calculer la probabilité de l'événement contraire
const qcmCategory = "Probabilités";
const qcmSubcategory = "Savoir calculer la probabilité de l'événement contraire";
const questions = [
  {
    id: 1,
    text: "La probabilité qu'il pleuve demain est 0,3. Quelle est la probabilité qu'il ne pleuve <em>pas</em> demain ?",
    choices: [
      { label: "A", text: "0,3" },
      { label: "B", text: "0,6" },
      { label: "C", text: "0,7" },
      { label: "D", text: "1,3" }
    ],
    answer: "C",
    explanation: "\\(P(\\bar{A}) = 1 - P(A) = 1 - 0{,}3 = 0{,}7\\)."
  },
  {
    id: 2,
    text: "On sait que \\(P(A) = \\frac{2}{5}\\). Quelle est la valeur de \\(P(\\bar{A})\\) ?",
    choices: [
      { label: "A", text: "\\(\\frac{2}{5}\\)" },
      { label: "B", text: "\\(\\frac{3}{5}\\)" },
      { label: "C", text: "\\(\\frac{1}{5}\\)" },
      { label: "D", text: "\\(\\frac{5}{2}\\)" }
    ],
    answer: "B",
    explanation: "\\(P(\\bar{A}) = 1 - \\frac{2}{5} = \\frac{3}{5}\\)."
  },
  {
    id: 3,
    text: "La probabilité qu'un joueur rate un tir au but est 0,25. Quelle est la probabilité qu'il le marque ?",
    choices: [
      { label: "A", text: "0,25" },
      { label: "B", text: "0,5" },
      { label: "C", text: "0,75" },
      { label: "D", text: "1,25" }
    ],
    answer: "C",
    explanation: "Marquer le tir est l'événement contraire de rater. \\(P(\\text{marquer}) = 1 - 0{,}25 = 0{,}75\\)."
  },
  {
    id: 4,
    text: "On sait que \\(P(\\bar{A}) = 0{,}6\\). Quelle est la valeur de \\(P(A)\\) ?",
    choices: [
      { label: "A", text: "0,4" },
      { label: "B", text: "0,6" },
      { label: "C", text: "1,6" },
      { label: "D", text: "0,06" }
    ],
    answer: "A",
    explanation: "\\(P(A) = 1 - P(\\bar{A}) = 1 - 0{,}6 = 0{,}4\\)."
  },
  {
    id: 5,
    text: "La probabilité de réussir un examen est \\(\\frac{7}{10}\\). Quelle est la probabilité de le <em>rater</em> ?",
    choices: [
      { label: "A", text: "\\(\\frac{7}{10}\\)" },
      { label: "B", text: "\\(\\frac{3}{10}\\)" },
      { label: "C", text: "\\(\\frac{1}{10}\\)" },
      { label: "D", text: "\\(\\frac{10}{7}\\)" }
    ],
    answer: "B",
    explanation: "\\(P(\\text{rater}) = 1 - \\frac{7}{10} = \\frac{3}{10}\\)."
  },
  {
    id: 6,
    text: "La probabilité qu'une machine produise une pièce défectueuse est 0,08. Quelle est la probabilité qu'elle produise une pièce <em>non</em> défectueuse ?",
    choices: [
      { label: "A", text: "0,08" },
      { label: "B", text: "0,8" },
      { label: "C", text: "0,92" },
      { label: "D", text: "0,98" }
    ],
    answer: "C",
    explanation: "\\(P(\\text{non défectueuse}) = 1 - 0{,}08 = 0{,}92\\)."
  },
  {
    id: 7,
    text: "Lors d'un lancer de dé équilibré à 6 faces, la probabilité d'obtenir un 6 est \\(\\frac{1}{6}\\). Quelle est la probabilité de ne <em>pas</em> obtenir un 6 ?",
    choices: [
      { label: "A", text: "\\(\\frac{1}{6}\\)" },
      { label: "B", text: "\\(\\frac{5}{6}\\)" },
      { label: "C", text: "\\(\\frac{1}{5}\\)" },
      { label: "D", text: "\\(\\frac{6}{5}\\)" }
    ],
    answer: "B",
    explanation: "\\(P(\\text{pas 6}) = 1 - \\frac{1}{6} = \\frac{5}{6}\\)."
  },
  {
    id: 8,
    text: "On sait que \\(P(A) + P(\\bar{A}) =\\) ?",
    choices: [
      { label: "A", text: "0" },
      { label: "B", text: "0,5" },
      { label: "C", text: "1" },
      { label: "D", text: "2" }
    ],
    answer: "C",
    explanation: "Par définition, un événement et son contraire forment une partition de l'univers : \\(P(A) + P(\\bar{A}) = 1\\)."
  },
  {
    id: 9,
    text: "La probabilité d'obtenir un nombre pair en lançant un dé équilibré à 6 faces est \\(\\frac{1}{2}\\). Quelle est la probabilité d'obtenir un nombre <em>impair</em> ?",
    choices: [
      { label: "A", text: "\\(\\frac{1}{6}\\)" },
      { label: "B", text: "\\(\\frac{1}{3}\\)" },
      { label: "C", text: "\\(\\frac{1}{2}\\)" },
      { label: "D", text: "\\(\\frac{2}{3}\\)" }
    ],
    answer: "C",
    explanation: "\\(P(\\text{impair}) = 1 - P(\\text{pair}) = 1 - \\frac{1}{2} = \\frac{1}{2}\\)."
  },
  {
    id: 10,
    text: "La probabilité qu'une personne soit gauchère est 0,1. Quelle est la probabilité qu'elle soit droitière (ou ambidextre) ?",
    choices: [
      { label: "A", text: "0,1" },
      { label: "B", text: "0,9" },
      { label: "C", text: "0,8" },
      { label: "D", text: "1,1" }
    ],
    answer: "B",
    explanation: "\\(P(\\text{non gauchère}) = 1 - 0{,}1 = 0{,}9\\)."
  }
];
