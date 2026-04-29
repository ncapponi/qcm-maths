// Catégorie 5 – Statistiques
// Sous-catégorie 5.1 – Lire et commenter des graphiques usuels
const qcmCategory = "Statistiques";
const qcmSubcategory = "Lire et commenter des graphiques usuels";
const questions = [
  {
    id: 1,
    text: "Le diagramme en barres ci-contre donne la production d'électricité en France, en TWh (térawatt-heure), selon son origine (source : INSEE). L'année où la production d'électricité d'origine hydraulique était la plus importante est :",
    questionImage: '<svg width="360" height="280" viewBox="0 0 360 280"><rect width="360" height="280" fill="#fafafa" rx="6"/><text x="15" y="20" font-size="10" fill="#333" transform="rotate(-90,15,140)">Production d\'électricité en France (en TWh)</text><line x1="50" y1="250" x2="340" y2="250" stroke="#333" stroke-width="1"/><line x1="50" y1="250" x2="50" y2="20" stroke="#333" stroke-width="1"/><text x="40" y="254" font-size="9" fill="#666" text-anchor="end">0</text><text x="40" y="222" font-size="9" fill="#666" text-anchor="end">100</text><text x="40" y="190" font-size="9" fill="#666" text-anchor="end">200</text><text x="40" y="158" font-size="9" fill="#666" text-anchor="end">300</text><text x="40" y="126" font-size="9" fill="#666" text-anchor="end">400</text><text x="40" y="94" font-size="9" fill="#666" text-anchor="end">500</text><text x="40" y="62" font-size="9" fill="#666" text-anchor="end">600</text><text x="40" y="30" font-size="9" fill="#666" text-anchor="end">700</text><line x1="50" y1="222" x2="340" y2="222" stroke="#eee" stroke-width="0.5"/><line x1="50" y1="190" x2="340" y2="190" stroke="#eee" stroke-width="0.5"/><line x1="50" y1="158" x2="340" y2="158" stroke="#eee" stroke-width="0.5"/><line x1="50" y1="126" x2="340" y2="126" stroke="#eee" stroke-width="0.5"/><line x1="50" y1="94" x2="340" y2="94" stroke="#eee" stroke-width="0.5"/><line x1="50" y1="62" x2="340" y2="62" stroke="#eee" stroke-width="0.5"/><rect x="65" y="120" width="40" height="130" fill="#3498db"/><rect x="65" y="88" width="40" height="32" fill="#e67e22"/><rect x="65" y="68" width="40" height="20" fill="#2ecc71"/><rect x="125" y="100" width="40" height="150" fill="#3498db"/><rect x="125" y="68" width="40" height="32" fill="#e67e22"/><rect x="125" y="42" width="40" height="26" fill="#2ecc71"/><rect x="185" y="100" width="40" height="150" fill="#3498db"/><rect x="185" y="74" width="40" height="26" fill="#e67e22"/><rect x="185" y="56" width="40" height="18" fill="#2ecc71"/><rect x="245" y="108" width="40" height="142" fill="#3498db"/><rect x="245" y="82" width="40" height="26" fill="#e67e22"/><rect x="245" y="70" width="40" height="12" fill="#2ecc71"/><rect x="305" y="110" width="40" height="140" fill="#3498db"/><rect x="305" y="86" width="40" height="24" fill="#e67e22"/><rect x="305" y="74" width="40" height="12" fill="#2ecc71"/><text x="85" y="264" font-size="10" fill="#333" text-anchor="middle">1995</text><text x="145" y="264" font-size="10" fill="#333" text-anchor="middle">2001</text><text x="205" y="264" font-size="10" fill="#333" text-anchor="middle">2006</text><text x="265" y="264" font-size="10" fill="#333" text-anchor="middle">2011</text><text x="325" y="264" font-size="10" fill="#333" text-anchor="middle">2016</text><rect x="240" y="10" width="12" height="12" fill="#2ecc71"/><text x="256" y="20" font-size="10" fill="#333">Hydraulique</text><rect x="240" y="26" width="12" height="12" fill="#e67e22"/><text x="256" y="36" font-size="10" fill="#333">Thermique</text><rect x="240" y="42" width="12" height="12" fill="#3498db"/><text x="256" y="52" font-size="10" fill="#333">Nucléaire</text></svg>',
    choices: [
      { label: "A", text: "1995" },
      { label: "B", text: "2001" },
      { label: "C", text: "2011" },
      { label: "D", text: "2016" }
    ],
    answer: "B",
    explanation: "D'après le diagramme, la part hydraulique (barre du bas) est la plus grande en 2001."
  },
  {
    id: 2,
    text: "Un diagramme circulaire représente la répartition des élèves d'un lycée selon la filière. Le secteur « filière technologique » a un angle de 90°. La proportion d'élèves en filière technologique est :",
    choices: [
      { label: "A", text: "10 %" },
      { label: "B", text: "25 %" },
      { label: "C", text: "50 %" },
      { label: "D", text: "90 %" }
    ],
    answer: "B",
    explanation: "\\(\\frac{90}{360} = \\frac{1}{4} = 25\\%\\)."
  },
  {
    id: 3,
    text: "Sur le diagramme en barres ci-dessous, quelle catégorie a l'effectif le plus élevé ?",
    questionImage: '<svg width="300" height="200" viewBox="0 0 300 200"><line x1="40" y1="170" x2="280" y2="170" stroke="#333" stroke-width="1.5"/><line x1="40" y1="170" x2="40" y2="20" stroke="#333" stroke-width="1.5"/><text x="30" y="174" font-size="9" fill="#666" text-anchor="end">0</text><text x="30" y="140" font-size="9" fill="#666" text-anchor="end">10</text><text x="30" y="105" font-size="9" fill="#666" text-anchor="end">20</text><text x="30" y="70" font-size="9" fill="#666" text-anchor="end">30</text><text x="30" y="35" font-size="9" fill="#666" text-anchor="end">40</text><rect x="55" y="105" width="35" height="65" fill="#3498db"/><rect x="110" y="70" width="35" height="100" fill="#e67e22"/><rect x="165" y="40" width="35" height="130" fill="#2ecc71"/><rect x="220" y="120" width="35" height="50" fill="#9b59b6"/><text x="72" y="185" font-size="10" fill="#333" text-anchor="middle">A</text><text x="127" y="185" font-size="10" fill="#333" text-anchor="middle">B</text><text x="182" y="185" font-size="10" fill="#333" text-anchor="middle">C</text><text x="237" y="185" font-size="10" fill="#333" text-anchor="middle">D</text></svg>',
    choices: [
      { label: "A", text: "A (environ 20)" },
      { label: "B", text: "B (environ 30)" },
      { label: "C", text: "C (environ 40)" },
      { label: "D", text: "D (environ 15)" }
    ],
    answer: "C",
    explanation: "La barre C est la plus haute, correspondant à un effectif d'environ 40."
  },
  {
    id: 4,
    text: "Un diagramme circulaire montre qu'un secteur représentant 180° correspond à la catégorie « sport ». Quelle fraction des personnes interrogées cela représente-t-il ?",
    choices: [
      { label: "A", text: "\\(\\frac{1}{4}\\)" },
      { label: "B", text: "\\(\\frac{1}{3}\\)" },
      { label: "C", text: "\\(\\frac{1}{2}\\)" },
      { label: "D", text: "\\(\\frac{3}{4}\\)" }
    ],
    answer: "C",
    explanation: "\\(\\frac{180}{360} = \\frac{1}{2}\\). La moitié des personnes interrogées a choisi « sport »."
  },
  {
    id: 5,
    text: "Sur un graphique de courbe montrant l'évolution de la température d'une ville sur une journée, on lit : 8 °C à 6 h, 15 °C à 12 h, 18 °C à 15 h et 10 °C à 21 h. La température maximale relevée est :",
    choices: [
      { label: "A", text: "8 °C" },
      { label: "B", text: "15 °C" },
      { label: "C", text: "18 °C" },
      { label: "D", text: "21 °C" }
    ],
    answer: "C",
    explanation: "Parmi les valeurs lues (8, 15, 18, 10), la température maximale est 18 °C à 15 h."
  },
  {
    id: 6,
    text: "Un diagramme en barres empilées montre que l'effectif total en 2020 est de 500 dont 200 filles et 300 garçons. La proportion de filles est :",
    choices: [
      { label: "A", text: "20 %" },
      { label: "B", text: "40 %" },
      { label: "C", text: "60 %" },
      { label: "D", text: "200 %" }
    ],
    answer: "B",
    explanation: "\\(\\frac{200}{500} = 0{,}40 = 40\\%\\)."
  },
  {
    id: 7,
    text: "Sur un diagramme circulaire, un secteur a un angle de 120°. L'effectif total est de 900. L'effectif de ce secteur est :",
    choices: [
      { label: "A", text: "120" },
      { label: "B", text: "200" },
      { label: "C", text: "300" },
      { label: "D", text: "450" }
    ],
    answer: "C",
    explanation: "\\(\\frac{120}{360} \\times 900 = \\frac{1}{3} \\times 900 = 300\\)."
  },
  {
    id: 8,
    text: "Un nuage de points montre la relation entre la taille et le poids d'élèves. Les points semblent alignés du bas à gauche vers le haut à droite. On peut dire que :",
    choices: [
      { label: "A", text: "il n'y a aucun lien entre taille et poids" },
      { label: "B", text: "plus la taille augmente, plus le poids tend à augmenter" },
      { label: "C", text: "plus la taille augmente, plus le poids diminue" },
      { label: "D", text: "tous les élèves pèsent le même poids" }
    ],
    answer: "B",
    explanation: "Des points alignés du bas-gauche au haut-droite indiquent une corrélation positive : quand la taille augmente, le poids tend à augmenter."
  },
  {
    id: 9,
    text: "Un diagramme semi-circulaire représente la répartition de 600 élèves. Un secteur de 60° correspond à :",
    choices: [
      { label: "A", text: "60 élèves" },
      { label: "B", text: "100 élèves" },
      { label: "C", text: "200 élèves" },
      { label: "D", text: "300 élèves" }
    ],
    answer: "C",
    explanation: "Dans un diagramme semi-circulaire, le total correspond à 180°. \\(\\frac{60}{180} \\times 600 = \\frac{1}{3} \\times 600 = 200\\)."
  },
  {
    id: 10,
    text: "Sur un graphique de courbe, la production d'une usine est de 1 000 unités en janvier et de 1 500 unités en juin. L'augmentation en pourcentage est :",
    choices: [
      { label: "A", text: "33 %" },
      { label: "B", text: "50 %" },
      { label: "C", text: "150 %" },
      { label: "D", text: "500 %" }
    ],
    answer: "B",
    explanation: "\\(\\frac{1\\,500 - 1\\,000}{1\\,000} = \\frac{500}{1\\,000} = 0{,}50 = 50\\%\\)."
  }
];
