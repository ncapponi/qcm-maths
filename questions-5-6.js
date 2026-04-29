// Catégorie 5 – Statistiques
// Sous-catégorie 5.6 – Calculer et interpréter des indicateurs statistiques pour une série statistique
const qcmCategory = "Statistiques";
const qcmSubcategory = "Calculer et interpréter des indicateurs statistiques pour une série statistique";
const questions = [
  {
    id: 1,
    text: "Les notes d'un élève sont : 12 ; 8 ; 14 ; 10 ; 16 (coefficients identiques). Sa moyenne est :",
    choices: [
      { label: "A", text: "10" },
      { label: "B", text: "12" },
      { label: "C", text: "14" },
      { label: "D", text: "11" }
    ],
    answer: "B",
    explanation: "\\(\\frac{12 + 8 + 14 + 10 + 16}{5} = \\frac{60}{5} = 12\\)."
  },
  {
    id: 2,
    text: "Un élève a obtenu les notes suivantes avec les coefficients indiqués :<br><table class='qcm-table'><tr><th>Note</th><td>8</td><td>12</td><td>15</td></tr><tr><th>Coefficient</th><td>2</td><td>3</td><td>1</td></tr></table><br>Sa moyenne pondérée est :",
    choices: [
      { label: "A", text: "10,5" },
      { label: "B", text: "\\(\\frac{67}{6}\\) ≈ 11,17" },
      { label: "C", text: "11,5" },
      { label: "D", text: "12" }
    ],
    answer: "B",
    explanation: "\\(\\frac{8 \\times 2 + 12 \\times 3 + 15 \\times 1}{2 + 3 + 1} = \\frac{16 + 36 + 15}{6} = \\frac{67}{6} \\approx 11{,}17\\)."
  },
  {
    id: 3,
    text: "La série ordonnée est : 3 ; 5 ; 7 ; 8 ; 10 ; 12 ; 15. La médiane est :",
    choices: [
      { label: "A", text: "7" },
      { label: "B", text: "7,5" },
      { label: "C", text: "8" },
      { label: "D", text: "10" }
    ],
    answer: "C",
    explanation: "7 valeurs : la médiane est la 4<sup>e</sup> valeur, soit 8."
  },
  {
    id: 4,
    text: "Une série de 100 valeurs ordonnées a pour premier quartile \\(Q_1\\) la valeur de rang :",
    choices: [
      { label: "A", text: "20" },
      { label: "B", text: "25" },
      { label: "C", text: "50" },
      { label: "D", text: "75" }
    ],
    answer: "B",
    explanation: "\\(Q_1\\) est la valeur de rang \\(\\frac{100}{4} = 25\\)."
  },
  {
    id: 5,
    text: "Les valeurs d'une série sont : 2 ; 2 ; 5 ; 5 ; 5 ; 8 ; 8 ; 10. Le mode de cette série est :",
    choices: [
      { label: "A", text: "2" },
      { label: "B", text: "5" },
      { label: "C", text: "8" },
      { label: "D", text: "10" }
    ],
    answer: "B",
    explanation: "Le mode est la valeur la plus fréquente. Ici 5 apparaît 3 fois, plus que toute autre valeur."
  },
  {
    id: 6,
    text: "La série est : 4 ; 7 ; 10 ; 13 ; 16 ; 19 ; 22 ; 25. L'étendue est :",
    choices: [
      { label: "A", text: "3" },
      { label: "B", text: "14,5" },
      { label: "C", text: "21" },
      { label: "D", text: "25" }
    ],
    answer: "C",
    explanation: "L'étendue est \\(25 - 4 = 21\\)."
  },
  {
    id: 7,
    text: "On donne \\(Q_1 = 6\\) et \\(Q_3 = 14\\). L'intervalle interquartile contient environ :",
    choices: [
      { label: "A", text: "25 % des données" },
      { label: "B", text: "50 % des données" },
      { label: "C", text: "75 % des données" },
      { label: "D", text: "100 % des données" }
    ],
    answer: "B",
    explanation: "L'intervalle \\([Q_1 \\,;\\, Q_3]\\) contient environ 50 % des données."
  },
  {
    id: 8,
    text: "Dans un groupe de 10 élèves, la moyenne au test est de 14. Un nouvel élève ayant 8 rejoint le groupe. La nouvelle moyenne est :",
    choices: [
      { label: "A", text: "11" },
      { label: "B", text: "\\(\\frac{148}{11}\\) ≈ 13,45" },
      { label: "C", text: "12" },
      { label: "D", text: "13" }
    ],
    answer: "B",
    explanation: "La somme initiale est \\(14 \\times 10 = 140\\). Avec le nouvel élève : \\(\\frac{140 + 8}{11} = \\frac{148}{11} \\approx 13{,}45\\)."
  },
  {
    id: 9,
    text: "Si l'on multiplie toutes les valeurs d'une série par 2, la médiane :",
    choices: [
      { label: "A", text: "reste inchangée" },
      { label: "B", text: "est multipliée par 2" },
      { label: "C", text: "est divisée par 2" },
      { label: "D", text: "augmente de 2" }
    ],
    answer: "B",
    explanation: "Multiplier chaque valeur par un nombre positif multiplie tous les indicateurs de position (moyenne, médiane, quartiles) par ce même nombre."
  },
  {
    id: 10,
    text: "La moyenne de la série A est 10 (5 valeurs) et la moyenne de la série B est 15 (10 valeurs). La moyenne globale des 15 valeurs est :",
    choices: [
      { label: "A", text: "12,5" },
      { label: "B", text: "\\(\\frac{200}{15}\\) ≈ 13,33" },
      { label: "C", text: "13" },
      { label: "D", text: "15" }
    ],
    answer: "B",
    explanation: "\\(\\frac{10 \\times 5 + 15 \\times 10}{5 + 10} = \\frac{50 + 150}{15} = \\frac{200}{15} \\approx 13{,}33\\)."
  }
];
