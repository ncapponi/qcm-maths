// Catégorie 5 – Statistiques
// Sous-catégorie 5.4 – Lire un graphique, un histogramme ou un diagramme
const qcmCategory = "Statistiques";
const qcmSubcategory = "Lire un graphique, un histogramme ou un diagramme";
const questions = [
  {
    id: 1,
    text: "Sur un histogramme, l'axe des ordonnées est gradué en « densité de fréquence ». La fréquence associée à une classe est proportionnelle :",
    choices: [
      { label: "A", text: "à la hauteur du rectangle" },
      { label: "B", text: "à l'aire du rectangle" },
      { label: "C", text: "à la largeur du rectangle" },
      { label: "D", text: "au périmètre du rectangle" }
    ],
    answer: "B",
    explanation: "Lorsque l'ordonnée représente une densité de fréquence, la fréquence est proportionnelle à l'aire du rectangle (hauteur × largeur de la classe)."
  },
  {
    id: 2,
    text: "Sur un graphique, l'axe des abscisses représente le temps en heures et chaque graduation correspond à 2 heures. Le point situé à la 4<sup>e</sup> graduation correspond au temps :",
    choices: [
      { label: "A", text: "4 h" },
      { label: "B", text: "6 h" },
      { label: "C", text: "8 h" },
      { label: "D", text: "10 h" }
    ],
    answer: "C",
    explanation: "La 4<sup>e</sup> graduation correspond à \\(4 \\times 2 = 8\\) h."
  },
  {
    id: 3,
    text: "Sur un diagramme en barres, une barre a une hauteur de 15 et l'effectif total est 60. La fréquence correspondante est :",
    choices: [
      { label: "A", text: "15 %" },
      { label: "B", text: "25 %" },
      { label: "C", text: "40 %" },
      { label: "D", text: "4 %" }
    ],
    answer: "B",
    explanation: "\\(\\frac{15}{60} = 0{,}25 = 25\\%\\)."
  },
  {
    id: 4,
    text: "Un histogramme montre les durées de trajets (en minutes). La classe [10 ; 20[ a un rectangle de hauteur 3 et la classe [20 ; 40[ a un rectangle de hauteur 2. Sachant que les deux classes ont des largeurs différentes, quelle classe a la plus grande fréquence ?",
    choices: [
      { label: "A", text: "La classe [10 ; 20[ (fréquence proportionnelle à \\(3 \\times 10 = 30\\))" },
      { label: "B", text: "La classe [20 ; 40[ (fréquence proportionnelle à \\(2 \\times 20 = 40\\))" },
      { label: "C", text: "Les deux classes ont la même fréquence" },
      { label: "D", text: "On ne peut pas comparer" }
    ],
    answer: "B",
    explanation: "La fréquence est proportionnelle à l'aire : \\(3 \\times 10 = 30\\) contre \\(2 \\times 20 = 40\\). La classe [20 ; 40[ a la plus grande fréquence."
  },
  {
    id: 5,
    text: "Sur un diagramme circulaire, l'angle d'un secteur est de 72°. La fréquence de ce secteur en pourcentage est :",
    choices: [
      { label: "A", text: "7,2 %" },
      { label: "B", text: "20 %" },
      { label: "C", text: "36 %" },
      { label: "D", text: "72 %" }
    ],
    answer: "B",
    explanation: "\\(\\frac{72}{360} = \\frac{1}{5} = 20\\%\\)."
  },
  {
    id: 6,
    text: "Un graphique a pour origine le point (0 ; 100) sur l'axe des ordonnées. La valeur lue à l'ordonnée de la 2<sup>e</sup> graduation au-dessus de l'origine est 140. Chaque graduation vaut :",
    choices: [
      { label: "A", text: "10" },
      { label: "B", text: "20" },
      { label: "C", text: "40" },
      { label: "D", text: "70" }
    ],
    answer: "B",
    explanation: "De 100 à 140, il y a 2 graduations, soit \\(\\frac{140 - 100}{2} = 20\\) par graduation."
  },
  {
    id: 7,
    text: "Sur un histogramme à classes de même largeur, la barre la plus haute correspond à :",
    choices: [
      { label: "A", text: "la classe modale" },
      { label: "B", text: "la classe médiane" },
      { label: "C", text: "la classe de la moyenne" },
      { label: "D", text: "la classe d'étendue maximale" }
    ],
    answer: "A",
    explanation: "Quand les classes ont la même largeur, la barre la plus haute correspond à l'effectif (ou la fréquence) le plus grand : c'est la classe modale."
  },
  {
    id: 8,
    text: "Un diagramme en barres montre les effectifs : A = 20, B = 35, C = 15, D = 30. L'effectif total est :",
    choices: [
      { label: "A", text: "50" },
      { label: "B", text: "85" },
      { label: "C", text: "100" },
      { label: "D", text: "35" }
    ],
    answer: "C",
    explanation: "L'effectif total est \\(20 + 35 + 15 + 30 = 100\\)."
  },
  {
    id: 9,
    text: "Sur un graphique, l'échelle des ordonnées commence à 50 (et non à 0). Quel est le risque principal de cette représentation ?",
    choices: [
      { label: "A", text: "les valeurs lues sont fausses" },
      { label: "B", text: "les différences entre valeurs sont visuellement amplifiées" },
      { label: "C", text: "l'échelle des abscisses est modifiée" },
      { label: "D", text: "il n'y a aucun risque" }
    ],
    answer: "B",
    explanation: "Quand l'axe des ordonnées ne commence pas à 0, les différences entre les barres ou les points sont visuellement amplifiées, ce qui peut être trompeur."
  },
  {
    id: 10,
    text: "Sur un graphique représentant les ventes mensuelles, on lit 120 unités en mars. L'axe des ordonnées a une graduation tous les 20 unités à partir de 0. Le point de mars se situe :",
    choices: [
      { label: "A", text: "à la 5<sup>e</sup> graduation" },
      { label: "B", text: "à la 6<sup>e</sup> graduation" },
      { label: "C", text: "entre la 5<sup>e</sup> et la 6<sup>e</sup> graduation" },
      { label: "D", text: "à la 12<sup>e</sup> graduation" }
    ],
    answer: "B",
    explanation: "Chaque graduation vaut 20 unités. \\(\\frac{120}{20} = 6\\). Le point est exactement à la 6<sup>e</sup> graduation."
  }
];
