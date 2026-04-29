// Catégorie 5 – Statistiques
// Sous-catégorie 5.5 – Passer du graphique aux données et vice-versa
const qcmCategory = "Statistiques";
const qcmSubcategory = "Passer du graphique aux données et vice-versa";
const questions = [
  {
    id: 1,
    text: "Un diagramme en barres montre les effectifs : lundi = 10, mardi = 15, mercredi = 5, jeudi = 20. L'effectif de vendredi est absent du graphique mais l'effectif total est 60. L'effectif de vendredi est :",
    choices: [
      { label: "A", text: "5" },
      { label: "B", text: "10" },
      { label: "C", text: "15" },
      { label: "D", text: "20" }
    ],
    answer: "B",
    explanation: "\\(60 - (10 + 15 + 5 + 20) = 60 - 50 = 10\\)."
  },
  {
    id: 2,
    text: "On donne le tableau suivant :<br><table class='qcm-table'><tr><th>Couleur</th><td>Rouge</td><td>Bleu</td><td>Vert</td></tr><tr><th>Effectif</th><td>30</td><td>50</td><td>20</td></tr></table><br>L'angle du secteur « Bleu » dans un diagramme circulaire serait :",
    choices: [
      { label: "A", text: "50°" },
      { label: "B", text: "100°" },
      { label: "C", text: "180°" },
      { label: "D", text: "200°" }
    ],
    answer: "C",
    explanation: "L'effectif total est \\(30 + 50 + 20 = 100\\). L'angle est \\(\\frac{50}{100} \\times 360 = 180°\\)."
  },
  {
    id: 3,
    text: "Sur un graphique en courbe, on relève les points (1 ; 20), (2 ; 35), (3 ; 25), (4 ; 40). L'augmentation entre la période 1 et la période 4 est :",
    choices: [
      { label: "A", text: "15" },
      { label: "B", text: "20" },
      { label: "C", text: "25" },
      { label: "D", text: "40" }
    ],
    answer: "B",
    explanation: "\\(40 - 20 = 20\\)."
  },
  {
    id: 4,
    text: "Le tableau ci-dessous donne les fréquences d'une série :<br><table class='qcm-table'><tr><th>Valeur</th><td>A</td><td>B</td><td>C</td><td>D</td></tr><tr><th>Fréquence</th><td>10 %</td><td>25 %</td><td>40 %</td><td>25 %</td></tr></table><br>Les angles du diagramme circulaire correspondant à C et D sont respectivement :",
    choices: [
      { label: "A", text: "144° et 90°" },
      { label: "B", text: "40° et 25°" },
      { label: "C", text: "120° et 60°" },
      { label: "D", text: "100° et 90°" }
    ],
    answer: "A",
    explanation: "Pour C : \\(0{,}40 \\times 360 = 144°\\). Pour D : \\(0{,}25 \\times 360 = 90°\\)."
  },
  {
    id: 5,
    text: "D'un histogramme, on lit les effectifs par classe : [0 ; 10[ → 8, [10 ; 20[ → 12, [20 ; 30[ → 5. L'effectif total est :",
    choices: [
      { label: "A", text: "20" },
      { label: "B", text: "25" },
      { label: "C", text: "30" },
      { label: "D", text: "35" }
    ],
    answer: "B",
    explanation: "\\(8 + 12 + 5 = 25\\)."
  },
  {
    id: 6,
    text: "On veut représenter par un diagramme en barres les données : Sport = 40 %, Musique = 25 %, Lecture = 35 %. Si la barre « Sport » mesure 8 cm, quelle est la hauteur de la barre « Lecture » ?",
    choices: [
      { label: "A", text: "5 cm" },
      { label: "B", text: "6 cm" },
      { label: "C", text: "7 cm" },
      { label: "D", text: "8 cm" }
    ],
    answer: "C",
    explanation: "La hauteur est proportionnelle à la fréquence. \\(\\frac{35}{40} \\times 8 = 7\\) cm."
  },
  {
    id: 7,
    text: "Un nuage de points montre les résultats suivants : (1 ; 5), (2 ; 8), (3 ; 11), (4 ; 14). Le point moyen \\(G\\) a pour coordonnées :",
    choices: [
      { label: "A", text: "(2 ; 9,5)" },
      { label: "B", text: "(2,5 ; 9,5)" },
      { label: "C", text: "(2,5 ; 10)" },
      { label: "D", text: "(3 ; 11)" }
    ],
    answer: "B",
    explanation: "\\(\\bar{x} = \\frac{1+2+3+4}{4} = 2{,}5\\) et \\(\\bar{y} = \\frac{5+8+11+14}{4} = \\frac{38}{4} = 9{,}5\\). Donc \\(G(2{,}5 \\,;\\, 9{,}5)\\)."
  },
  {
    id: 8,
    text: "D'un diagramme circulaire, on lit que le secteur « Transport » a un angle de 108° pour un effectif total de 200. L'effectif du secteur « Transport » est :",
    choices: [
      { label: "A", text: "36" },
      { label: "B", text: "54" },
      { label: "C", text: "60" },
      { label: "D", text: "108" }
    ],
    answer: "C",
    explanation: "\\(\\frac{108}{360} \\times 200 = 0{,}3 \\times 200 = 60\\)."
  },
  {
    id: 9,
    text: "On relève les températures : lundi 5 °C, mardi 8 °C, mercredi 3 °C, jeudi 10 °C, vendredi 4 °C. Pour construire un graphique en courbe, on place les jours en abscisse et les températures en ordonnée. Le point le plus bas correspond à :",
    choices: [
      { label: "A", text: "lundi" },
      { label: "B", text: "mercredi" },
      { label: "C", text: "vendredi" },
      { label: "D", text: "mardi" }
    ],
    answer: "B",
    explanation: "La température la plus basse est 3 °C, relevée mercredi."
  },
  {
    id: 10,
    text: "Un tableau donne les effectifs cumulés croissants : 5, 18, 30, 42, 50. L'effectif de la 3<sup>e</sup> classe (non cumulé) est :",
    choices: [
      { label: "A", text: "12" },
      { label: "B", text: "18" },
      { label: "C", text: "30" },
      { label: "D", text: "13" }
    ],
    answer: "A",
    explanation: "L'effectif de la 3<sup>e</sup> classe est la différence des effectifs cumulés : \\(30 - 18 = 12\\)."
  }
];
