// Catégorie 6 – Probabilités
// Sous-catégorie 6.3 – Calculer la probabilité d'un événement comme somme des probabilités de ses issues
const qcmCategory = "Probabilités";
const qcmSubcategory = "Calculer la probabilité d'un événement comme somme des probabilités de ses issues";
const questions = [
  {
    id: 1,
    text: "On lance un dé équilibré à 6 faces. Quelle est la probabilité d'obtenir un nombre supérieur ou égal à 5 ?",
    choices: [
      { label: "A", text: "\\(\\frac{1}{6}\\)" },
      { label: "B", text: "\\(\\frac{2}{6}\\)" },
      { label: "C", text: "\\(\\frac{3}{6}\\)" },
      { label: "D", text: "\\(\\frac{4}{6}\\)" }
    ],
    answer: "B",
    explanation: "Les issues favorables sont 5 et 6, soit 2 issues. \\(P = \\frac{1}{6} + \\frac{1}{6} = \\frac{2}{6} = \\frac{1}{3}\\)."
  },
  {
    id: 2,
    text: "Un sac contient 5 billes : 2 rouges, 2 bleues, 1 verte. On tire une bille au hasard. Quelle est la probabilité d'obtenir une bille rouge <em>ou</em> verte ?",
    choices: [
      { label: "A", text: "\\(\\frac{1}{5}\\)" },
      { label: "B", text: "\\(\\frac{2}{5}\\)" },
      { label: "C", text: "\\(\\frac{3}{5}\\)" },
      { label: "D", text: "\\(\\frac{4}{5}\\)" }
    ],
    answer: "C",
    explanation: "Il y a 2 billes rouges et 1 verte, soit 3 issues favorables sur 5 : \\(P = \\frac{2}{5} + \\frac{1}{5} = \\frac{3}{5}\\)."
  },
  {
    id: 3,
    text: "Lors d'un lancer de dé équilibré à 6 faces, la probabilité d'obtenir 1 est \\(\\frac{1}{6}\\), d'obtenir 2 est \\(\\frac{1}{6}\\) et d'obtenir 3 est \\(\\frac{1}{6}\\). Quelle est la probabilité d'obtenir un nombre inférieur ou égal à 3 ?",
    choices: [
      { label: "A", text: "\\(\\frac{1}{6}\\)" },
      { label: "B", text: "\\(\\frac{2}{6}\\)" },
      { label: "C", text: "\\(\\frac{3}{6}\\)" },
      { label: "D", text: "\\(\\frac{4}{6}\\)" }
    ],
    answer: "C",
    explanation: "\\(P(\\{1, 2, 3\\}) = \\frac{1}{6} + \\frac{1}{6} + \\frac{1}{6} = \\frac{3}{6} = \\frac{1}{2}\\)."
  },
  {
    id: 4,
    text: "Lors d'une expérience aléatoire, les issues sont A, B, C, D avec les probabilités : \\(P(A) = 0{,}2\\), \\(P(B) = 0{,}35\\), \\(P(C) = 0{,}1\\), \\(P(D) = 0{,}35\\). Quelle est la probabilité d'obtenir A ou C ?",
    choices: [
      { label: "A", text: "0,1" },
      { label: "B", text: "0,2" },
      { label: "C", text: "0,3" },
      { label: "D", text: "0,55" }
    ],
    answer: "C",
    explanation: "\\(P(A \\cup C) = P(A) + P(C) = 0{,}2 + 0{,}1 = 0{,}3\\) (les événements A et C sont disjoints)."
  },
  {
    id: 5,
    text: "Une roue de loterie a 8 secteurs égaux numérotés de 1 à 8. Quelle est la probabilité d'obtenir un nombre pair ?",
    choices: [
      { label: "A", text: "\\(\\frac{1}{8}\\)" },
      { label: "B", text: "\\(\\frac{3}{8}\\)" },
      { label: "C", text: "\\(\\frac{4}{8}\\)" },
      { label: "D", text: "\\(\\frac{5}{8}\\)" }
    ],
    answer: "C",
    explanation: "Les nombres pairs entre 1 et 8 sont 2, 4, 6, 8, soit 4 issues. \\(P = 4 \\times \\frac{1}{8} = \\frac{4}{8} = \\frac{1}{2}\\)."
  },
  {
    id: 6,
    text: "Un événement \\(E\\) est formé des issues 3, 5 et 7 d'un dé équilibré à 8 faces (faces numérotées 1 à 8). Quelle est \\(P(E)\\) ?",
    choices: [
      { label: "A", text: "\\(\\frac{1}{8}\\)" },
      { label: "B", text: "\\(\\frac{2}{8}\\)" },
      { label: "C", text: "\\(\\frac{3}{8}\\)" },
      { label: "D", text: "\\(\\frac{4}{8}\\)" }
    ],
    answer: "C",
    explanation: "L'événement E contient 3 issues sur 8 équiprobables : \\(P(E) = \\frac{1}{8} + \\frac{1}{8} + \\frac{1}{8} = \\frac{3}{8}\\)."
  },
  {
    id: 7,
    text: "Un QCM comporte 4 réponses A, B, C, D. On suppose qu'une personne répond au hasard. La probabilité de ne pas cocher A est :",
    choices: [
      { label: "A", text: "\\(\\frac{1}{4}\\)" },
      { label: "B", text: "\\(\\frac{2}{4}\\)" },
      { label: "C", text: "\\(\\frac{3}{4}\\)" },
      { label: "D", text: "1" }
    ],
    answer: "C",
    explanation: "Les issues favorables sont B, C, D, soit 3 issues sur 4 : \\(P = \\frac{1}{4} + \\frac{1}{4} + \\frac{1}{4} = \\frac{3}{4}\\)."
  },
  {
    id: 8,
    text: "Lors d'une expérience, les issues possibles sont 1, 2, 3, 4, 5 avec \\(P(1) = 0{,}1\\), \\(P(2) = 0{,}2\\), \\(P(3) = 0{,}3\\), \\(P(4) = 0{,}2\\), \\(P(5) = 0{,}2\\). Quelle est la probabilité d'obtenir un nombre supérieur à 3 ?",
    choices: [
      { label: "A", text: "0,2" },
      { label: "B", text: "0,3" },
      { label: "C", text: "0,4" },
      { label: "D", text: "0,5" }
    ],
    answer: "C",
    explanation: "Les issues supérieures à 3 sont 4 et 5 : \\(P(\\{4, 5\\}) = P(4) + P(5) = 0{,}2 + 0{,}2 = 0{,}4\\)."
  },
  {
    id: 9,
    text: "Lors d'une expérience aléatoire, les issues A, B, C, D ont les probabilités respectives 0,15 ; 0,25 ; 0,40 ; 0,20. Quelle est la probabilité de l'événement \\(E = \\{B, D\\}\\) ?",
    choices: [
      { label: "A", text: "0,25" },
      { label: "B", text: "0,40" },
      { label: "C", text: "0,45" },
      { label: "D", text: "0,60" }
    ],
    answer: "C",
    explanation: "\\(P(E) = P(B) + P(D) = 0{,}25 + 0{,}20 = 0{,}45\\)."
  },
  {
    id: 10,
    text: "On tire une carte au hasard dans un jeu de 52 cartes. La probabilité de tirer un as est \\(\\frac{4}{52}\\). La probabilité de tirer un roi est \\(\\frac{4}{52}\\). Quelle est la probabilité de tirer un as <em>ou</em> un roi ?",
    choices: [
      { label: "A", text: "\\(\\frac{4}{52}\\)" },
      { label: "B", text: "\\(\\frac{6}{52}\\)" },
      { label: "C", text: "\\(\\frac{8}{52}\\)" },
      { label: "D", text: "\\(\\frac{16}{52}\\)" }
    ],
    answer: "C",
    explanation: "Les événements « tirer un as » et « tirer un roi » sont disjoints : \\(P = \\frac{4}{52} + \\frac{4}{52} = \\frac{8}{52} = \\frac{2}{13}\\)."
  }
];
