// Catégorie 5 – Statistiques
// Sous-catégorie 5.2 – Calculer et interpréter des indicateurs statistiques (données brutes ou regroupées)
const qcmCategory = "Statistiques";
const qcmSubcategory = "Calculer et interpréter des indicateurs statistiques (données brutes ou regroupées)";
const questions = [
  {
    id: 1,
    text: "Les notes d'un élève sont : 8 ; 12 ; 10 ; 14 ; 6. La moyenne de cette série est :",
    choices: [
      { label: "A", text: "8" },
      { label: "B", text: "10" },
      { label: "C", text: "12" },
      { label: "D", text: "14" }
    ],
    answer: "B",
    explanation: "\\(\\frac{8 + 12 + 10 + 14 + 6}{5} = \\frac{50}{5} = 10\\)."
  },
  {
    id: 2,
    text: "Les valeurs ordonnées d'une série sont : 3 ; 5 ; 7 ; 9 ; 11. La médiane est :",
    choices: [
      { label: "A", text: "5" },
      { label: "B", text: "7" },
      { label: "C", text: "9" },
      { label: "D", text: "8" }
    ],
    answer: "B",
    explanation: "La série a 5 valeurs, la médiane est la 3<sup>e</sup> valeur : 7."
  },
  {
    id: 3,
    text: "Les valeurs ordonnées d'une série sont : 2 ; 4 ; 6 ; 8 ; 10 ; 12. La médiane est :",
    choices: [
      { label: "A", text: "6" },
      { label: "B", text: "7" },
      { label: "C", text: "8" },
      { label: "D", text: "9" }
    ],
    answer: "B",
    explanation: "La série a 6 valeurs (nombre pair). La médiane est la moyenne des 3<sup>e</sup> et 4<sup>e</sup> valeurs : \\(\\frac{6 + 8}{2} = 7\\)."
  },
  {
    id: 4,
    text: "On donne le tableau de notes :<br><table class='qcm-table'><tr><th>Note</th><td>5</td><td>10</td><td>15</td></tr><tr><th>Effectif</th><td>4</td><td>8</td><td>3</td></tr></table><br>La moyenne pondérée vaut :",
    choices: [
      { label: "A", text: "9" },
      { label: "B", text: "\\(\\frac{145}{15}\\) ≈ 9,67" },
      { label: "C", text: "10" },
      { label: "D", text: "\\(\\frac{150}{15} = 10\\)" }
    ],
    answer: "B",
    explanation: "\\(\\frac{5 \\times 4 + 10 \\times 8 + 15 \\times 3}{4+8+3} = \\frac{20 + 80 + 45}{15} = \\frac{145}{15} \\approx 9{,}67\\)."
  },
  {
    id: 5,
    text: "Dans une série ordonnée de 20 valeurs, le premier quartile \\(Q_1\\) est la valeur de rang :",
    choices: [
      { label: "A", text: "4" },
      { label: "B", text: "5" },
      { label: "C", text: "6" },
      { label: "D", text: "10" }
    ],
    answer: "B",
    explanation: "Le premier quartile est la valeur de rang \\(\\frac{20}{4} = 5\\)."
  },
  {
    id: 6,
    text: "La série suivante est ordonnée : 1 ; 3 ; 5 ; 7 ; 9 ; 11 ; 13 ; 15. Le troisième quartile \\(Q_3\\) est :",
    choices: [
      { label: "A", text: "11" },
      { label: "B", text: "12" },
      { label: "C", text: "13" },
      { label: "D", text: "15" }
    ],
    answer: "C",
    explanation: "La série a 8 valeurs. Le rang de \\(Q_3\\) est \\(\\frac{3 \\times 8}{4} = 6\\). La 6<sup>e</sup> valeur est 11, mais on prend la valeur de rang \\(\\lceil 6 \\rceil = 6\\). En fait, \\(Q_3\\) est la valeur de rang \\(3 \\times \\frac{8+1}{4} = 6{,}75\\), soit entre la 6<sup>e</sup> (11) et la 7<sup>e</sup> (13). On arrondit au rang 7 pour obtenir 13."
  },
  {
    id: 7,
    text: "On donne les données regroupées par classes :<br><table class='qcm-table'><tr><th>Classe</th><td>[0 ; 10[</td><td>[10 ; 20[</td><td>[20 ; 30[</td></tr><tr><th>Effectif</th><td>5</td><td>10</td><td>5</td></tr></table><br>La moyenne de cette série est :",
    choices: [
      { label: "A", text: "10" },
      { label: "B", text: "12,5" },
      { label: "C", text: "15" },
      { label: "D", text: "20" }
    ],
    answer: "C",
    explanation: "On utilise les centres de classes : 5, 15, 25. \\(\\frac{5 \\times 5 + 15 \\times 10 + 25 \\times 5}{20} = \\frac{25 + 150 + 125}{20} = \\frac{300}{20} = 15\\)."
  },
  {
    id: 8,
    text: "Une série de 11 valeurs ordonnées a pour médiane 20, pour \\(Q_1 = 15\\) et pour \\(Q_3 = 28\\). L'écart interquartile est :",
    choices: [
      { label: "A", text: "5" },
      { label: "B", text: "8" },
      { label: "C", text: "13" },
      { label: "D", text: "15" }
    ],
    answer: "C",
    explanation: "L'écart interquartile est \\(Q_3 - Q_1 = 28 - 15 = 13\\)."
  },
  {
    id: 9,
    text: "Les notes d'un groupe sont : 4 ; 8 ; 8 ; 12 ; 18. L'étendue de cette série est :",
    choices: [
      { label: "A", text: "4" },
      { label: "B", text: "8" },
      { label: "C", text: "14" },
      { label: "D", text: "18" }
    ],
    answer: "C",
    explanation: "L'étendue est la différence entre le maximum et le minimum : \\(18 - 4 = 14\\)."
  },
  {
    id: 10,
    text: "On ajoute 3 points à chaque note d'une série. La moyenne de la nouvelle série par rapport à l'ancienne :",
    choices: [
      { label: "A", text: "augmente de 3" },
      { label: "B", text: "est multipliée par 3" },
      { label: "C", text: "reste inchangée" },
      { label: "D", text: "augmente de 9" }
    ],
    answer: "A",
    explanation: "Ajouter une constante \\(k\\) à chaque valeur augmente la moyenne de \\(k\\). Ici \\(k = 3\\)."
  }
];
