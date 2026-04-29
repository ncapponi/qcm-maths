// Catégorie 4 – Fonctions et représentations
// Sous-catégorie 4.1 – Déterminer graphiquement des images et des antécédents
const qcmCategory = "Fonctions et représentations";
const qcmSubcategory = "Déterminer graphiquement des images et des antécédents";
const questions = [
  {
    id: 1,
    text: "On lit sur le graphique d'une fonction <em>f</em> que le point (3 ; 5) appartient à la courbe. On peut affirmer que :",
    choices: [
      { label: "A", text: "<em>f</em>(5) = 3" },
      { label: "B", text: "<em>f</em>(3) = 5" },
      { label: "C", text: "<em>f</em>(3) = 3" },
      { label: "D", text: "<em>f</em>(5) = 5" }
    ],
    answer: "B",
    explanation: "Si le point (3 ; 5) est sur la courbe de <em>f</em>, alors <em>f</em>(3) = 5 : l'image de 3 par <em>f</em> est 5."
  },
  {
    id: 2,
    text: "Sur le graphique d'une fonction <em>f</em>, on lit <em>f</em>(−2) = 4. Cela signifie que :",
    choices: [
      { label: "A", text: "le point (4 ; −2) est sur la courbe" },
      { label: "B", text: "le point (−2 ; 4) est sur la courbe" },
      { label: "C", text: "−2 est l'image de 4 par <em>f</em>" },
      { label: "D", text: "4 est un antécédent de −2 par <em>f</em>" }
    ],
    answer: "B",
    explanation: "<em>f</em>(−2) = 4 signifie que le point (−2 ; 4) appartient à la courbe de <em>f</em>."
  },
  {
    id: 3,
    text: "D'après le graphique ci-dessous, quelle est l'image de 1 par <em>f</em> ?",
    questionImage: '<svg width="260" height="200" viewBox="-30 -10 260 200"><line x1="0" y1="150" x2="220" y2="150" stroke="#333" stroke-width="1.5"/><polygon points="220,150 214,146 214,154" fill="#333"/><line x1="30" y1="180" x2="30" y2="10" stroke="#333" stroke-width="1.5"/><polygon points="30,10 26,16 34,16" fill="#333"/><text x="225" y="155" font-size="12" fill="#333">x</text><text x="20" y="8" font-size="12" fill="#333">y</text><text x="25" y="165" font-size="10" fill="#333">0</text><text x="65" y="165" font-size="10" fill="#333">1</text><text x="105" y="165" font-size="10" fill="#333">2</text><text x="145" y="165" font-size="10" fill="#333">3</text><text x="185" y="165" font-size="10" fill="#333">4</text><text x="15" y="115" font-size="10" fill="#333">1</text><text x="15" y="75" font-size="10" fill="#333">2</text><text x="15" y="35" font-size="10" fill="#333">3</text><line x1="70" y1="148" x2="70" y2="152" stroke="#333" stroke-width="1"/><line x1="110" y1="148" x2="110" y2="152" stroke="#333" stroke-width="1"/><line x1="150" y1="148" x2="150" y2="152" stroke="#333" stroke-width="1"/><line x1="190" y1="148" x2="190" y2="152" stroke="#333" stroke-width="1"/><line x1="28" y1="110" x2="32" y2="110" stroke="#333" stroke-width="1"/><line x1="28" y1="70" x2="32" y2="70" stroke="#333" stroke-width="1"/><line x1="28" y1="30" x2="32" y2="30" stroke="#333" stroke-width="1"/><polyline points="30,110 70,70 110,30 150,70 190,110" fill="none" stroke="#0f3460" stroke-width="2.5"/></svg>',
    choices: [
      { label: "A", text: "0" },
      { label: "B", text: "1" },
      { label: "C", text: "2" },
      { label: "D", text: "3" }
    ],
    answer: "C",
    explanation: "On lit sur le graphique que le point (1 ; 2) est sur la courbe, donc <em>f</em>(1) = 2."
  },
  {
    id: 4,
    text: "D'après le graphique précédent, quels sont les antécédents de 2 par <em>f</em> ?",
    questionImage: '<svg width="260" height="200" viewBox="-30 -10 260 200"><line x1="0" y1="150" x2="220" y2="150" stroke="#333" stroke-width="1.5"/><polygon points="220,150 214,146 214,154" fill="#333"/><line x1="30" y1="180" x2="30" y2="10" stroke="#333" stroke-width="1.5"/><polygon points="30,10 26,16 34,16" fill="#333"/><text x="225" y="155" font-size="12" fill="#333">x</text><text x="20" y="8" font-size="12" fill="#333">y</text><text x="25" y="165" font-size="10" fill="#333">0</text><text x="65" y="165" font-size="10" fill="#333">1</text><text x="105" y="165" font-size="10" fill="#333">2</text><text x="145" y="165" font-size="10" fill="#333">3</text><text x="185" y="165" font-size="10" fill="#333">4</text><text x="15" y="115" font-size="10" fill="#333">1</text><text x="15" y="75" font-size="10" fill="#333">2</text><text x="15" y="35" font-size="10" fill="#333">3</text><line x1="70" y1="148" x2="70" y2="152" stroke="#333" stroke-width="1"/><line x1="110" y1="148" x2="110" y2="152" stroke="#333" stroke-width="1"/><line x1="150" y1="148" x2="150" y2="152" stroke="#333" stroke-width="1"/><line x1="190" y1="148" x2="190" y2="152" stroke="#333" stroke-width="1"/><line x1="28" y1="110" x2="32" y2="110" stroke="#333" stroke-width="1"/><line x1="28" y1="70" x2="32" y2="70" stroke="#333" stroke-width="1"/><line x1="28" y1="30" x2="32" y2="30" stroke="#333" stroke-width="1"/><polyline points="30,110 70,70 110,30 150,70 190,110" fill="none" stroke="#0f3460" stroke-width="2.5"/><line x1="0" y1="70" x2="220" y2="70" stroke="#e74c3c" stroke-width="1" stroke-dasharray="5,5"/></svg>',
    choices: [
      { label: "A", text: "1 seulement" },
      { label: "B", text: "3 seulement" },
      { label: "C", text: "1 et 3" },
      { label: "D", text: "0 et 4" }
    ],
    answer: "C",
    explanation: "La droite horizontale <em>y</em> = 2 coupe la courbe en deux points d'abscisses 1 et 3. Les antécédents de 2 sont donc 1 et 3."
  },
  {
    id: 5,
    text: "On donne le tableau de valeurs d'une fonction <em>f</em> :<br><table class=\"qcm-table\"><tr><th><em>x</em></th><td>−1</td><td>0</td><td>1</td><td>2</td><td>3</td></tr><tr><th><em>f</em>(<em>x</em>)</th><td>4</td><td>1</td><td>0</td><td>1</td><td>4</td></tr></table><br>L'image de 2 par <em>f</em> est :",
    choices: [
      { label: "A", text: "0" },
      { label: "B", text: "1" },
      { label: "C", text: "2" },
      { label: "D", text: "4" }
    ],
    answer: "B",
    explanation: "D'après le tableau, <em>f</em>(2) = 1. L'image de 2 est donc 1."
  },
  {
    id: 6,
    text: "Avec le même tableau :<br><table class=\"qcm-table\"><tr><th><em>x</em></th><td>−1</td><td>0</td><td>1</td><td>2</td><td>3</td></tr><tr><th><em>f</em>(<em>x</em>)</th><td>4</td><td>1</td><td>0</td><td>1</td><td>4</td></tr></table><br>Les antécédents de 4 par <em>f</em> sont :",
    choices: [
      { label: "A", text: "−1 seulement" },
      { label: "B", text: "3 seulement" },
      { label: "C", text: "−1 et 3" },
      { label: "D", text: "il n'y en a pas" }
    ],
    answer: "C",
    explanation: "<em>f</em>(−1) = 4 et <em>f</em>(3) = 4. Les antécédents de 4 sont −1 et 3."
  },
  {
    id: 7,
    text: "Avec le même tableau :<br><table class=\"qcm-table\"><tr><th><em>x</em></th><td>−1</td><td>0</td><td>1</td><td>2</td><td>3</td></tr><tr><th><em>f</em>(<em>x</em>)</th><td>4</td><td>1</td><td>0</td><td>1</td><td>4</td></tr></table><br>Combien d'antécédents de 1 peut-on lire dans ce tableau ?",
    choices: [
      { label: "A", text: "0" },
      { label: "B", text: "1" },
      { label: "C", text: "2" },
      { label: "D", text: "3" }
    ],
    answer: "C",
    explanation: "<em>f</em>(0) = 1 et <em>f</em>(2) = 1. On lit 2 antécédents de 1."
  },
  {
    id: 8,
    text: "Sur un graphique, la courbe de <em>f</em> passe par le point de coordonnées (0 ; −3). Cela signifie que :",
    choices: [
      { label: "A", text: "<em>f</em>(0) = −3" },
      { label: "B", text: "<em>f</em>(−3) = 0" },
      { label: "C", text: "−3 est un antécédent de 0" },
      { label: "D", text: "0 est l'image de −3" }
    ],
    answer: "A",
    explanation: "Le point (0 ; −3) sur la courbe signifie que l'image de 0 par <em>f</em> est −3, soit <em>f</em>(0) = −3."
  },
  {
    id: 9,
    text: "Sur le graphique d'une fonction <em>f</em>, la droite horizontale <em>y</em> = 3 coupe la courbe en trois points d'abscisses −2, 1 et 4. Cela signifie que :",
    choices: [
      { label: "A", text: "3 a trois images par <em>f</em>" },
      { label: "B", text: "3 a trois antécédents par <em>f</em>" },
      { label: "C", text: "<em>f</em>(3) = −2, <em>f</em>(3) = 1 et <em>f</em>(3) = 4" },
      { label: "D", text: "<em>f</em>(−2) = 3, <em>f</em>(1) = 3 et <em>f</em>(4) = 3" }
    ],
    answer: "D",
    explanation: "La droite <em>y</em> = 3 coupe la courbe aux abscisses −2, 1 et 4, donc <em>f</em>(−2) = <em>f</em>(1) = <em>f</em>(4) = 3. Ces trois nombres sont les antécédents de 3."
  },
  {
    id: 10,
    text: "Sur la courbe d'une fonction <em>f</em>, on voit que le point le plus haut a pour coordonnées (2 ; 7). Quelle affirmation est correcte ?",
    choices: [
      { label: "A", text: "<em>f</em>(7) = 2" },
      { label: "B", text: "le maximum de <em>f</em> est 2" },
      { label: "C", text: "<em>f</em>(2) = 7 et 7 est le maximum de <em>f</em>" },
      { label: "D", text: "7 est un antécédent de 2" }
    ],
    answer: "C",
    explanation: "Le point (2 ; 7) sur la courbe donne <em>f</em>(2) = 7. Comme c'est le point le plus haut, 7 est le maximum de <em>f</em>."
  }
];
