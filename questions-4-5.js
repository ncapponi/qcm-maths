// Catégorie 4 – Fonctions et représentations
// Sous-catégorie 4.5 – Déterminer graphiquement le signe d'une fonction ou son tableau de variations
const qcmCategory = "Fonctions et représentations";
const qcmSubcategory = "Déterminer graphiquement le signe d'une fonction ou son tableau de variations";
const questions = [
  {
    id: 1,
    text: "Sur un graphique, la courbe de <em>f</em> est au-dessus de l'axe des abscisses sur ]−∞ ; 2[ et en-dessous sur ]2 ; +∞[. <em>f</em>(2) = 0. Le signe de <em>f</em>(<em>x</em>) est :",
    choices: [
      { label: "A", text: "positif pour tout <em>x</em>" },
      { label: "B", text: "positif si <em>x</em> < 2, nul si <em>x</em> = 2, négatif si <em>x</em> > 2" },
      { label: "C", text: "négatif si <em>x</em> < 2, positif si <em>x</em> > 2" },
      { label: "D", text: "négatif pour tout <em>x</em>" }
    ],
    answer: "B",
    explanation: "La courbe est au-dessus de l'axe (<em>f</em>(<em>x</em>) > 0) pour <em>x</em> < 2, touche l'axe en <em>x</em> = 2, puis passe en-dessous (<em>f</em>(<em>x</em>) < 0) pour <em>x</em> > 2."
  },
  {
    id: 2,
    text: "D'après le graphique ci-dessous, la fonction <em>f</em> est :",
    questionImage: '<svg width="260" height="200" viewBox="-30 -10 260 200"><line x1="0" y1="100" x2="230" y2="100" stroke="#333" stroke-width="1.5"/><polygon points="230,100 224,96 224,104" fill="#333"/><line x1="30" y1="180" x2="30" y2="10" stroke="#333" stroke-width="1.5"/><polygon points="30,10 26,16 34,16" fill="#333"/><text x="235" y="105" font-size="12" fill="#333">x</text><text x="20" y="8" font-size="12" fill="#333">y</text><text x="22" y="115" font-size="10" fill="#333">0</text><text x="70" y="115" font-size="10" fill="#333">1</text><text x="110" y="115" font-size="10" fill="#333">2</text><text x="150" y="115" font-size="10" fill="#333">3</text><text x="190" y="115" font-size="10" fill="#333">4</text><polyline points="10,170 70,120 110,40 150,20 210,30" fill="none" stroke="#0f3460" stroke-width="2.5"/></svg>',
    choices: [
      { label: "A", text: "croissante sur tout l'intervalle" },
      { label: "B", text: "décroissante sur tout l'intervalle" },
      { label: "C", text: "d'abord décroissante puis croissante" },
      { label: "D", text: "d'abord croissante puis décroissante" }
    ],
    answer: "A",
    explanation: "La courbe monte de gauche à droite : <em>f</em> est croissante sur l'intervalle représenté."
  },
  {
    id: 3,
    text: "D'après un graphique, <em>f</em> est croissante sur [−3 ; 1] et décroissante sur [1 ; 5] avec <em>f</em>(1) = 4. Le maximum de <em>f</em> sur [−3 ; 5] est :",
    choices: [
      { label: "A", text: "1" },
      { label: "B", text: "4" },
      { label: "C", text: "5" },
      { label: "D", text: "−3" }
    ],
    answer: "B",
    explanation: "<em>f</em> est croissante puis décroissante avec un changement en <em>x</em> = 1. Le maximum est <em>f</em>(1) = 4."
  },
  {
    id: 4,
    text: "Sur le graphique d'une fonction <em>f</em>, la courbe ne quitte jamais la zone au-dessus de l'axe des abscisses. On peut affirmer que :",
    choices: [
      { label: "A", text: "<em>f</em>(<em>x</em>) > 0 pour tout <em>x</em>" },
      { label: "B", text: "<em>f</em>(<em>x</em>) ≥ 0 pour tout <em>x</em>" },
      { label: "C", text: "<em>f</em>(<em>x</em>) < 0 pour tout <em>x</em>" },
      { label: "D", text: "<em>f</em> est croissante" }
    ],
    answer: "B",
    explanation: "La courbe est au-dessus de l'axe des abscisses (elle peut le toucher), donc <em>f</em>(<em>x</em>) ≥ 0 pour tout <em>x</em>."
  },
  {
    id: 5,
    text: "On lit sur un graphique que <em>f</em> est décroissante sur [0 ; 3] et croissante sur [3 ; 6] avec <em>f</em>(3) = −2. Le minimum de <em>f</em> sur [0 ; 6] est :",
    choices: [
      { label: "A", text: "3" },
      { label: "B", text: "−2" },
      { label: "C", text: "0" },
      { label: "D", text: "6" }
    ],
    answer: "B",
    explanation: "<em>f</em> décroît puis croît avec un changement en <em>x</em> = 3. Le minimum est <em>f</em>(3) = −2."
  },
  {
    id: 6,
    text: "La courbe de <em>f</em> coupe l'axe des abscisses en <em>x</em> = −1 et <em>x</em> = 3, et est au-dessous entre ces deux valeurs. Le signe de <em>f</em>(<em>x</em>) sur ]−1 ; 3[ est :",
    choices: [
      { label: "A", text: "positif" },
      { label: "B", text: "négatif" },
      { label: "C", text: "nul" },
      { label: "D", text: "on ne peut pas savoir" }
    ],
    answer: "B",
    explanation: "La courbe est sous l'axe des abscisses entre −1 et 3, donc <em>f</em>(<em>x</em>) < 0 sur ]−1 ; 3[."
  },
  {
    id: 7,
    text: "D'après un graphique, <em>f</em> est croissante sur [−2 ; 0], décroissante sur [0 ; 3], puis croissante sur [3 ; 5]. Comment décrire les variations de <em>f</em> ?",
    choices: [
      { label: "A", text: "<em>f</em> admet un maximum en 0 et un minimum en 3" },
      { label: "B", text: "<em>f</em> admet un minimum en 0 et un maximum en 3" },
      { label: "C", text: "<em>f</em> est constante" },
      { label: "D", text: "<em>f</em> est toujours croissante" }
    ],
    answer: "A",
    explanation: "<em>f</em> croît puis décroît en <em>x</em> = 0 (maximum local), décroît puis croît en <em>x</em> = 3 (minimum local)."
  },
  {
    id: 8,
    text: "Sur un graphique, la courbe de <em>f</em> est entièrement en-dessous de l'axe des abscisses et ne le touche jamais. On peut affirmer que :",
    choices: [
      { label: "A", text: "<em>f</em>(<em>x</em>) < 0 pour tout <em>x</em>" },
      { label: "B", text: "<em>f</em>(<em>x</em>) > 0 pour tout <em>x</em>" },
      { label: "C", text: "<em>f</em>(<em>x</em>) = 0 a au moins une solution" },
      { label: "D", text: "<em>f</em> est décroissante" }
    ],
    answer: "A",
    explanation: "La courbe est strictement sous l'axe des abscisses, donc <em>f</em>(<em>x</em>) < 0 pour tout <em>x</em> du domaine."
  },
  {
    id: 9,
    text: "D'après le tableau de variations ci-dessous, <em>f</em>(3) est :<br><table class=\"qcm-table\"><tr><th><em>x</em></th><td>−2</td><td></td><td>3</td><td></td><td>7</td></tr><tr><th>Variations de <em>f</em></th><td>−1</td><td>↗</td><td>5</td><td>↘</td><td>2</td></tr></table>",
    choices: [
      { label: "A", text: "un minimum de <em>f</em>" },
      { label: "B", text: "un maximum de <em>f</em>" },
      { label: "C", text: "ni un minimum ni un maximum" },
      { label: "D", text: "on ne peut pas savoir" }
    ],
    answer: "B",
    explanation: "<em>f</em> est croissante avant <em>x</em> = 3 et décroissante après. <em>f</em>(3) = 5 est un maximum."
  },
  {
    id: 10,
    text: "D'après un graphique, la courbe de <em>f</em> est au-dessus de l'axe des abscisses sur ]−∞ ; −2[ ∪ ]4 ; +∞[, en-dessous sur ]−2 ; 4[, et touche l'axe en <em>x</em> = −2 et <em>x</em> = 4. La valeur de <em>f</em>(0) est :",
    choices: [
      { label: "A", text: "positive" },
      { label: "B", text: "négative" },
      { label: "C", text: "nulle" },
      { label: "D", text: "on ne peut pas savoir" }
    ],
    answer: "B",
    explanation: "0 ∈ ]−2 ; 4[, intervalle sur lequel la courbe est sous l'axe des abscisses, donc <em>f</em>(0) < 0."
  }
];
