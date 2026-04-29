// Catégorie 6 – Probabilités
// Sous-catégorie 6.4 – Utiliser la formule P(A) = Card(A) / Card(Ω) en équiprobabilité
const qcmCategory = "Probabilités";
const qcmSubcategory = "Utiliser la formule P(A) = Card(A) / Card(Ω) en équiprobabilité";
const questions = [
  {
    id: 1,
    text: "On tire une carte au hasard dans un jeu de 52 cartes ordinaires. Quelle est la probabilité de tirer un cœur ?",
    choices: [
      { label: "A", text: "\\(\\frac{1}{52}\\)" },
      { label: "B", text: "\\(\\frac{4}{52}\\)" },
      { label: "C", text: "\\(\\frac{13}{52}\\)" },
      { label: "D", text: "\\(\\frac{26}{52}\\)" }
    ],
    answer: "C",
    explanation: "Il y a 13 cartes de cœur sur 52. \\(P(\\text{cœur}) = \\frac{13}{52} = \\frac{1}{4}\\)."
  },
  {
    id: 2,
    text: "On lance un dé équilibré à 6 faces. Quelle est la probabilité d'obtenir un multiple de 3 ?",
    choices: [
      { label: "A", text: "\\(\\frac{1}{6}\\)" },
      { label: "B", text: "\\(\\frac{2}{6}\\)" },
      { label: "C", text: "\\(\\frac{3}{6}\\)" },
      { label: "D", text: "\\(\\frac{4}{6}\\)" }
    ],
    answer: "B",
    explanation: "Les multiples de 3 entre 1 et 6 sont 3 et 6, soit 2 issues. \\(P = \\frac{2}{6} = \\frac{1}{3}\\)."
  },
  {
    id: 3,
    text: "Une urne contient 10 boules numérotées de 1 à 10. On en tire une au hasard. Quelle est la probabilité d'obtenir un nombre premier ?",
    choices: [
      { label: "A", text: "\\(\\frac{3}{10}\\)" },
      { label: "B", text: "\\(\\frac{4}{10}\\)" },
      { label: "C", text: "\\(\\frac{5}{10}\\)" },
      { label: "D", text: "\\(\\frac{6}{10}\\)" }
    ],
    answer: "B",
    explanation: "Les nombres premiers entre 1 et 10 sont 2, 3, 5 et 7, soit 4 nombres. \\(P = \\frac{4}{10} = \\frac{2}{5}\\)."
  },
  {
    id: 4,
    text: "Un lycéen choisit au hasard un livre parmi 20 romans, 8 bandes dessinées et 12 documentaires. Quelle est la probabilité qu'il choisisse une bande dessinée ?",
    choices: [
      { label: "A", text: "\\(\\frac{8}{20}\\)" },
      { label: "B", text: "\\(\\frac{8}{40}\\)" },
      { label: "C", text: "\\(\\frac{8}{32}\\)" },
      { label: "D", text: "\\(\\frac{12}{40}\\)" }
    ],
    answer: "B",
    explanation: "L'univers contient \\(20 + 8 + 12 = 40\\) livres. \\(P(\\text{BD}) = \\frac{8}{40} = \\frac{1}{5}\\)."
  },
  {
    id: 5,
    text: "On tire au hasard un nombre entier parmi les entiers de 1 à 20. Quelle est la probabilité d'obtenir un multiple de 4 ?",
    choices: [
      { label: "A", text: "\\(\\frac{4}{20}\\)" },
      { label: "B", text: "\\(\\frac{5}{20}\\)" },
      { label: "C", text: "\\(\\frac{6}{20}\\)" },
      { label: "D", text: "\\(\\frac{8}{20}\\)" }
    ],
    answer: "B",
    explanation: "Les multiples de 4 entre 1 et 20 sont 4, 8, 12, 16, 20 — soit 5 valeurs. \\(P = \\frac{5}{20} = \\frac{1}{4}\\)."
  },
  {
    id: 6,
    text: "Une urne contient 3 boules rouges, 5 boules bleues et 2 boules jaunes. On tire une boule au hasard. Quelle est la probabilité qu'elle ne soit pas bleue ?",
    choices: [
      { label: "A", text: "\\(\\frac{5}{10}\\)" },
      { label: "B", text: "\\(\\frac{4}{10}\\)" },
      { label: "C", text: "\\(\\frac{3}{10}\\)" },
      { label: "D", text: "\\(\\frac{2}{10}\\)" }
    ],
    answer: "A",
    explanation: "Il y a \\(3 + 2 = 5\\) boules qui ne sont pas bleues sur 10. \\(P = \\frac{5}{10} = \\frac{1}{2}\\). On peut aussi utiliser le complémentaire : \\(1 - \\frac{5}{10} = \\frac{5}{10}\\)."
  },
  {
    id: 7,
    text: "On lance deux pièces équilibrées simultanément. Les issues possibles sont : PP, PF, FP, FF (P = pile, F = face). Quelle est la probabilité d'obtenir au moins une face ?",
    choices: [
      { label: "A", text: "\\(\\frac{1}{4}\\)" },
      { label: "B", text: "\\(\\frac{2}{4}\\)" },
      { label: "C", text: "\\(\\frac{3}{4}\\)" },
      { label: "D", text: "1" }
    ],
    answer: "C",
    explanation: "Les issues avec au moins une face sont PF, FP, FF, soit 3 issues sur 4. \\(P = \\frac{3}{4}\\)."
  },
  {
    id: 8,
    text: "Un sac contient 15 jetons portant un numéro de 1 à 15. On tire un jeton au hasard. Quelle est la probabilité d'obtenir un numéro divisible par 5 ?",
    choices: [
      { label: "A", text: "\\(\\frac{2}{15}\\)" },
      { label: "B", text: "\\(\\frac{3}{15}\\)" },
      { label: "C", text: "\\(\\frac{4}{15}\\)" },
      { label: "D", text: "\\(\\frac{5}{15}\\)" }
    ],
    answer: "B",
    explanation: "Les multiples de 5 entre 1 et 15 sont 5, 10 et 15, soit 3 valeurs. \\(P = \\frac{3}{15} = \\frac{1}{5}\\)."
  },
  {
    id: 9,
    text: "Dans une classe de 30 élèves, 18 sont des garçons. On désigne un élève au hasard. Quelle est la probabilité de désigner une fille ?",
    choices: [
      { label: "A", text: "\\(\\frac{18}{30}\\)" },
      { label: "B", text: "\\(\\frac{12}{30}\\)" },
      { label: "C", text: "\\(\\frac{6}{30}\\)" },
      { label: "D", text: "\\(\\frac{10}{30}\\)" }
    ],
    answer: "B",
    explanation: "Il y a \\(30 - 18 = 12\\) filles sur 30 élèves. \\(P(\\text{fille}) = \\frac{12}{30} = \\frac{2}{5}\\)."
  },
  {
    id: 10,
    text: "On lance un dé équilibré à 6 faces. Quelle est la probabilité d'obtenir un nombre impair strictement supérieur à 3 ?",
    choices: [
      { label: "A", text: "\\(\\frac{1}{6}\\)" },
      { label: "B", text: "\\(\\frac{2}{6}\\)" },
      { label: "C", text: "\\(\\frac{3}{6}\\)" },
      { label: "D", text: "\\(\\frac{4}{6}\\)" }
    ],
    answer: "A",
    explanation: "Les nombres impairs strictement supérieurs à 3 entre 1 et 6 sont uniquement 5. \\(P = \\frac{1}{6}\\)."
  }
];
