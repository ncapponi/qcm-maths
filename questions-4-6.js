// Catégorie 4 – Fonctions et représentations
// Sous-catégorie 4.6 – Tracer une droite par son équation réduite ou par un point et son coefficient directeur
const qcmCategory = "Fonctions et représentations";
const qcmSubcategory = "Tracer une droite par son équation réduite ou par un point et son coefficient directeur";
const questions = [
  {
    id: 1,
    text: "La seule droite pouvant correspondre à l'équation <em>y</em> = −2<em>x</em> + 5 est :",
    image: true,
    choices: [
      { label: "A", text: "la droite D<sub>1</sub>", image: '<svg width="140" height="140" viewBox="0 0 140 140"><line x1="10" y1="70" x2="130" y2="70" stroke="#333" stroke-width="1.5"/><polygon points="130,70 124,66 124,74" fill="#333"/><line x1="70" y1="130" x2="70" y2="10" stroke="#333" stroke-width="1.5"/><polygon points="70,10 66,16 74,16" fill="#333"/><line x1="15" y1="110" x2="120" y2="40" stroke="#0f3460" stroke-width="2.5"/></svg>' },
      { label: "B", text: "la droite D<sub>2</sub>", image: '<svg width="140" height="140" viewBox="0 0 140 140"><line x1="10" y1="70" x2="130" y2="70" stroke="#333" stroke-width="1.5"/><polygon points="130,70 124,66 124,74" fill="#333"/><line x1="70" y1="130" x2="70" y2="10" stroke="#333" stroke-width="1.5"/><polygon points="70,10 66,16 74,16" fill="#333"/><line x1="35" y1="10" x2="105" y2="120" stroke="#0f3460" stroke-width="2.5"/></svg>' },
      { label: "C", text: "la droite D<sub>3</sub>", image: '<svg width="140" height="140" viewBox="0 0 140 140"><line x1="10" y1="70" x2="130" y2="70" stroke="#333" stroke-width="1.5"/><polygon points="130,70 124,66 124,74" fill="#333"/><line x1="70" y1="130" x2="70" y2="10" stroke="#333" stroke-width="1.5"/><polygon points="70,10 66,16 74,16" fill="#333"/><line x1="20" y1="100" x2="120" y2="30" stroke="#0f3460" stroke-width="2.5"/></svg>' },
      { label: "D", text: "la droite D<sub>4</sub>", image: '<svg width="140" height="140" viewBox="0 0 140 140"><line x1="10" y1="70" x2="130" y2="70" stroke="#333" stroke-width="1.5"/><polygon points="130,70 124,66 124,74" fill="#333"/><line x1="70" y1="130" x2="70" y2="10" stroke="#333" stroke-width="1.5"/><polygon points="70,10 66,16 74,16" fill="#333"/><line x1="30" y1="50" x2="110" y2="120" stroke="#0f3460" stroke-width="2.5"/></svg>' }
    ],
    answer: "B",
    explanation: "L'équation y = −2x + 5 a une pente négative (−2) et une ordonnée à l'origine positive (+5). La droite descend de gauche à droite et coupe l'axe des ordonnées au-dessus de l'origine. Seule D<sub>2</sub> correspond."
  },
  {
    id: 2,
    text: "Pour tracer la droite d'équation <em>y</em> = 3<em>x</em> − 1, on peut utiliser les deux points :",
    choices: [
      { label: "A", text: "(0 ; −1) et (1 ; 2)" },
      { label: "B", text: "(0 ; 3) et (1 ; −1)" },
      { label: "C", text: "(−1 ; 0) et (1 ; 3)" },
      { label: "D", text: "(0 ; 1) et (1 ; 4)" }
    ],
    answer: "A",
    explanation: "Pour <em>x</em> = 0 : <em>y</em> = −1. Pour <em>x</em> = 1 : <em>y</em> = 3 − 1 = 2. Les points (0 ; −1) et (1 ; 2) sont sur la droite."
  },
  {
    id: 3,
    text: "La droite d'équation <em>y</em> = −<em>x</em> + 4 coupe l'axe des abscisses au point :",
    choices: [
      { label: "A", text: "(4 ; 0)" },
      { label: "B", text: "(0 ; 4)" },
      { label: "C", text: "(−4 ; 0)" },
      { label: "D", text: "(0 ; −4)" }
    ],
    answer: "A",
    explanation: "L'axe des abscisses correspond à <em>y</em> = 0. On résout 0 = −<em>x</em> + 4, soit <em>x</em> = 4. Le point est (4 ; 0)."
  },
  {
    id: 4,
    text: "On veut tracer la droite passant par A(1 ; 2) avec un coefficient directeur de −3. Le point B obtenu en avançant de 1 unité vers la droite est :",
    choices: [
      { label: "A", text: "(2 ; 5)" },
      { label: "B", text: "(2 ; −1)" },
      { label: "C", text: "(2 ; −3)" },
      { label: "D", text: "(4 ; 2)" }
    ],
    answer: "B",
    explanation: "En avançant de 1 vers la droite (<em>x</em> : 1 → 2), on descend de 3 (<em>y</em> : 2 → 2 − 3 = −1). Le point est (2 ; −1)."
  },
  {
    id: 5,
    text: "La droite <em>y</em> = 2<em>x</em> passe par l'origine. Quel autre point permet de la tracer ?",
    choices: [
      { label: "A", text: "(1 ; 2)" },
      { label: "B", text: "(2 ; 1)" },
      { label: "C", text: "(1 ; −2)" },
      { label: "D", text: "(−1 ; 2)" }
    ],
    answer: "A",
    explanation: "Pour <em>x</em> = 1 : <em>y</em> = 2 × 1 = 2. Le point (1 ; 2) est sur la droite."
  },
  {
    id: 6,
    text: "Pour la droite <em>y</em> = \\(\\frac{1}{2}\\)<em>x</em> + 1, quand on avance de 2 unités vers la droite, l'ordonnée :",
    choices: [
      { label: "A", text: "augmente de 2" },
      { label: "B", text: "augmente de 1" },
      { label: "C", text: "diminue de 1" },
      { label: "D", text: "reste constante" }
    ],
    answer: "B",
    explanation: "Le coefficient directeur est \\(\\frac{1}{2}\\). Pour un déplacement de 2 en <em>x</em>, <em>y</em> augmente de \\(\\frac{1}{2} \\times 2 = 1\\)."
  },
  {
    id: 7,
    text: "La droite d'équation <em>y</em> = 5 est :",
    choices: [
      { label: "A", text: "une droite verticale passant par (5 ; 0)" },
      { label: "B", text: "une droite horizontale passant par (0 ; 5)" },
      { label: "C", text: "une droite de pente 5" },
      { label: "D", text: "une droite passant par l'origine" }
    ],
    answer: "B",
    explanation: "<em>y</em> = 5 est une droite horizontale (coefficient directeur = 0) d'ordonnée 5."
  },
  {
    id: 8,
    text: "Pour tracer la droite passant par (−1 ; 3) de coefficient directeur 2, on peut utiliser le second point :",
    choices: [
      { label: "A", text: "(0 ; 5)" },
      { label: "B", text: "(0 ; 1)" },
      { label: "C", text: "(1 ; 3)" },
      { label: "D", text: "(1 ; 5)" }
    ],
    answer: "A",
    explanation: "De (−1 ; 3), on avance de 1 en <em>x</em> (→ 0) et de 2 en <em>y</em> (→ 5). Le second point est (0 ; 5)."
  },
  {
    id: 9,
    text: "La droite d'équation <em>y</em> = −4<em>x</em> + 8 coupe l'axe des ordonnées en :",
    choices: [
      { label: "A", text: "(0 ; −4)" },
      { label: "B", text: "(0 ; 8)" },
      { label: "C", text: "(8 ; 0)" },
      { label: "D", text: "(2 ; 0)" }
    ],
    answer: "B",
    explanation: "La droite coupe l'axe des ordonnées quand <em>x</em> = 0 : <em>y</em> = −4(0) + 8 = 8. Le point est (0 ; 8)."
  },
  {
    id: 10,
    text: "La droite d'équation \\(y = -\\frac{3}{2}x + 6\\) coupe l'axe des abscisses en :",
    choices: [
      { label: "A", text: "(2 ; 0)" },
      { label: "B", text: "(4 ; 0)" },
      { label: "C", text: "(6 ; 0)" },
      { label: "D", text: "(−4 ; 0)" }
    ],
    answer: "B",
    explanation: "On résout \\(0 = -\\frac{3}{2}x + 6\\), soit \\(\\frac{3}{2}x = 6\\), donc \\(x = 4\\). Le point est (4 ; 0)."
  }
];
