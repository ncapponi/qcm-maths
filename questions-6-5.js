// Catégorie 6 – Probabilités
// Sous-catégorie 6.5 – Calculer des probabilités conditionnelles
const qcmCategory = "Probabilités";
const qcmSubcategory = "Calculer des probabilités conditionnelles";
const questions = [
  {
    id: 1,
    text: "Dans une classe, 60 % des élèves sont des filles et 40 % sont des garçons. Parmi les filles, 50 % pratiquent un sport. Quelle est la probabilité qu'un élève choisi au hasard soit une fille <em>et</em> pratique un sport ?",
    choices: [
      { label: "A", text: "0,50" },
      { label: "B", text: "0,30" },
      { label: "C", text: "0,60" },
      { label: "D", text: "0,20" }
    ],
    answer: "B",
    explanation: "\\(P(\\text{fille et sport}) = P(\\text{fille}) \\times P(\\text{sport}|\\text{fille}) = 0{,}60 \\times 0{,}50 = 0{,}30\\)."
  },
  {
    id: 2,
    text: "On dispose du tableau suivant :<br><table class='qcm-table'><tr><th></th><th>Sports</th><th>Non sports</th><th>Total</th></tr><tr><td>Garçons</td><td>18</td><td>12</td><td>30</td></tr><tr><td>Filles</td><td>10</td><td>10</td><td>20</td></tr><tr><td>Total</td><td>28</td><td>22</td><td>50</td></tr></table>On choisit un garçon au hasard. Quelle est la probabilité qu'il pratique un sport ?",
    choices: [
      { label: "A", text: "\\(\\frac{18}{50}\\)" },
      { label: "B", text: "\\(\\frac{18}{28}\\)" },
      { label: "C", text: "\\(\\frac{18}{30}\\)" },
      { label: "D", text: "\\(\\frac{28}{50}\\)" }
    ],
    answer: "C",
    explanation: "Parmi les 30 garçons, 18 pratiquent un sport. \\(P(\\text{sport}|\\text{garçon}) = \\frac{18}{30} = \\frac{3}{5}\\)."
  },
  {
    id: 3,
    text: "Dans une usine, une machine A produit 70 % des pièces et une machine B produit 30 % des pièces. Le taux de défauts de A est 2 % et celui de B est 5 %. Une pièce est choisie au hasard parmi celles de A. Quelle est la probabilité qu'elle soit défectueuse ?",
    choices: [
      { label: "A", text: "0,005" },
      { label: "B", text: "0,014" },
      { label: "C", text: "0,02" },
      { label: "D", text: "0,05" }
    ],
    answer: "C",
    explanation: "Il s'agit de \\(P(\\text{défaut}|A) = 0{,}02\\), donnée directement dans l'énoncé."
  },
  {
    id: 4,
    text: "On dispose du tableau :<br><table class='qcm-table'><tr><th></th><th>Réussi</th><th>Échoué</th><th>Total</th></tr><tr><td>Lycéens</td><td>80</td><td>20</td><td>100</td></tr><tr><td>Apprentis</td><td>45</td><td>15</td><td>60</td></tr><tr><td>Total</td><td>125</td><td>35</td><td>160</td></tr></table>On choisit un élève ayant échoué. Quelle est la probabilité que ce soit un apprenti ?",
    choices: [
      { label: "A", text: "\\(\\frac{15}{160}\\)" },
      { label: "B", text: "\\(\\frac{15}{35}\\)" },
      { label: "C", text: "\\(\\frac{15}{60}\\)" },
      { label: "D", text: "\\(\\frac{35}{160}\\)" }
    ],
    answer: "B",
    explanation: "Parmi les 35 élèves ayant échoué, 15 sont des apprentis. \\(P(\\text{apprenti}|\\text{échoué}) = \\frac{15}{35} = \\frac{3}{7}\\)."
  },
  {
    id: 5,
    text: "Un arbre de probabilité donne : \\(P(A) = 0{,}4\\), \\(P(B|A) = 0{,}6\\). Quelle est la valeur de \\(P(A \\cap B)\\) ?",
    choices: [
      { label: "A", text: "0,6" },
      { label: "B", text: "0,4" },
      { label: "C", text: "0,24" },
      { label: "D", text: "0,1" }
    ],
    answer: "C",
    explanation: "\\(P(A \\cap B) = P(A) \\times P(B|A) = 0{,}4 \\times 0{,}6 = 0{,}24\\)."
  },
  {
    id: 6,
    text: "Un sac contient 4 boules rouges et 6 boules bleues. On tire une boule, on note sa couleur, on la remet, puis on tire une nouvelle boule. Quelle est la probabilité d'obtenir deux boules rouges ?",
    choices: [
      { label: "A", text: "\\(\\frac{4}{10}\\)" },
      { label: "B", text: "\\(\\frac{8}{10}\\)" },
      { label: "C", text: "\\(\\frac{16}{100}\\)" },
      { label: "D", text: "\\(\\frac{8}{100}\\)" }
    ],
    answer: "C",
    explanation: "Les tirages sont indépendants (avec remise). \\(P(R_1 \\cap R_2) = \\frac{4}{10} \\times \\frac{4}{10} = \\frac{16}{100} = 0{,}16\\)."
  },
  {
    id: 7,
    text: "Dans le tableau suivant :<br><table class='qcm-table'><tr><th></th><th>Bilingues</th><th>Non bilingues</th><th>Total</th></tr><tr><td>Filles</td><td>12</td><td>8</td><td>20</td></tr><tr><td>Garçons</td><td>6</td><td>14</td><td>20</td></tr><tr><td>Total</td><td>18</td><td>22</td><td>40</td></tr></table>Sachant qu'un élève est bilingue, quelle est la probabilité que ce soit une fille ?",
    choices: [
      { label: "A", text: "\\(\\frac{12}{40}\\)" },
      { label: "B", text: "\\(\\frac{12}{20}\\)" },
      { label: "C", text: "\\(\\frac{12}{18}\\)" },
      { label: "D", text: "\\(\\frac{18}{40}\\)" }
    ],
    answer: "C",
    explanation: "Parmi les 18 élèves bilingues, 12 sont des filles. \\(P(\\text{fille}|\\text{bilingue}) = \\frac{12}{18} = \\frac{2}{3}\\)."
  },
  {
    id: 8,
    text: "Un arbre donne : \\(P(A) = 0{,}3\\), \\(P(\\bar{A}) = 0{,}7\\), \\(P(B|A) = 0{,}4\\), \\(P(B|\\bar{A}) = 0{,}2\\). Quelle est la valeur de \\(P(\\bar{A} \\cap B)\\) ?",
    choices: [
      { label: "A", text: "0,12" },
      { label: "B", text: "0,14" },
      { label: "C", text: "0,20" },
      { label: "D", text: "0,28" }
    ],
    answer: "B",
    explanation: "\\(P(\\bar{A} \\cap B) = P(\\bar{A}) \\times P(B|\\bar{A}) = 0{,}7 \\times 0{,}2 = 0{,}14\\)."
  },
  {
    id: 9,
    text: "Dans le tableau :<br><table class='qcm-table'><tr><th></th><th>A</th><th>B</th><th>Total</th></tr><tr><td>X</td><td>15</td><td>5</td><td>20</td></tr><tr><td>Y</td><td>10</td><td>30</td><td>40</td></tr><tr><td>Total</td><td>25</td><td>35</td><td>60</td></tr></table>On choisit au hasard une personne de type X. Quelle est la probabilité qu'elle soit dans la catégorie B ?",
    choices: [
      { label: "A", text: "\\(\\frac{5}{60}\\)" },
      { label: "B", text: "\\(\\frac{5}{35}\\)" },
      { label: "C", text: "\\(\\frac{5}{20}\\)" },
      { label: "D", text: "\\(\\frac{5}{25}\\)" }
    ],
    answer: "C",
    explanation: "Parmi les 20 personnes de type X, 5 sont dans la catégorie B. \\(P(B|X) = \\frac{5}{20} = \\frac{1}{4}\\)."
  },
  {
    id: 10,
    text: "Un arbre de probabilité donne : \\(P(A) = 0{,}5\\), \\(P(B|A) = 0{,}8\\), \\(P(B|\\bar{A}) = 0{,}3\\). Quelle est la valeur de \\(P(B)\\) (probabilité totale) ?",
    choices: [
      { label: "A", text: "0,4" },
      { label: "B", text: "0,55" },
      { label: "C", text: "0,8" },
      { label: "D", text: "1,1" }
    ],
    answer: "B",
    explanation: "\\(P(B) = P(A) \\times P(B|A) + P(\\bar{A}) \\times P(B|\\bar{A}) = 0{,}5 \\times 0{,}8 + 0{,}5 \\times 0{,}3 = 0{,}40 + 0{,}15 = 0{,}55\\)."
  }
];
