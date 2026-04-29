// Catégorie 4 – Fonctions et représentations
// Sous-catégorie 4.3 – Reconnaître une fonction linéaire ou affine
const qcmCategory = "Fonctions et représentations";
const qcmSubcategory = "Reconnaître une fonction linéaire ou affine";
const questions = [
  {
    id: 1,
    text: "Parmi les fonctions suivantes, laquelle est affine ?",
    choices: [
      { label: "A", text: "<em>f</em>(<em>x</em>) = 3<em>x</em>² + 1" },
      { label: "B", text: "<em>f</em>(<em>x</em>) = 2<em>x</em> − 7" },
      { label: "C", text: "<em>f</em>(<em>x</em>) = \\(\\frac{1}{x}\\)" },
      { label: "D", text: "<em>f</em>(<em>x</em>) = \\(\\sqrt{x}\\)" }
    ],
    answer: "B",
    explanation: "Une fonction affine est de la forme <em>f</em>(<em>x</em>) = <em>ax</em> + <em>b</em>. Seule <em>f</em>(<em>x</em>) = 2<em>x</em> − 7 est de cette forme."
  },
  {
    id: 2,
    text: "Parmi les fonctions suivantes, laquelle est linéaire ?",
    choices: [
      { label: "A", text: "<em>f</em>(<em>x</em>) = 4<em>x</em> + 3" },
      { label: "B", text: "<em>f</em>(<em>x</em>) = −5<em>x</em>" },
      { label: "C", text: "<em>f</em>(<em>x</em>) = <em>x</em>²" },
      { label: "D", text: "<em>f</em>(<em>x</em>) = 7" }
    ],
    answer: "B",
    explanation: "Une fonction linéaire est de la forme <em>f</em>(<em>x</em>) = <em>ax</em> (sans ordonnée à l'origine). Seule <em>f</em>(<em>x</em>) = −5<em>x</em> convient."
  },
  {
    id: 3,
    text: "La représentation graphique d'une fonction affine est :",
    choices: [
      { label: "A", text: "une parabole" },
      { label: "B", text: "une droite" },
      { label: "C", text: "une hyperbole" },
      { label: "D", text: "un cercle" }
    ],
    answer: "B",
    explanation: "Toute fonction affine <em>f</em>(<em>x</em>) = <em>ax</em> + <em>b</em> a pour représentation graphique une droite."
  },
  {
    id: 4,
    text: "La fonction <em>f</em>(<em>x</em>) = −3<em>x</em> + 2 est :",
    choices: [
      { label: "A", text: "linéaire" },
      { label: "B", text: "affine mais pas linéaire" },
      { label: "C", text: "ni linéaire ni affine" },
      { label: "D", text: "constante" }
    ],
    answer: "B",
    explanation: "C'est une fonction de la forme <em>ax</em> + <em>b</em> avec <em>b</em> ≠ 0, donc affine mais pas linéaire."
  },
  {
    id: 5,
    text: "La fonction <em>f</em>(<em>x</em>) = 5 est :",
    choices: [
      { label: "A", text: "linéaire" },
      { label: "B", text: "affine (constante)" },
      { label: "C", text: "ni linéaire ni affine" },
      { label: "D", text: "croissante" }
    ],
    answer: "B",
    explanation: "<em>f</em>(<em>x</em>) = 5 = 0 × <em>x</em> + 5, c'est une fonction affine (cas particulier : constante)."
  },
  {
    id: 6,
    text: "On donne le tableau de valeurs suivant :<br><table class=\"qcm-table\"><tr><th><em>x</em></th><td>0</td><td>1</td><td>2</td><td>3</td></tr><tr><th><em>f</em>(<em>x</em>)</th><td>3</td><td>5</td><td>7</td><td>9</td></tr></table><br>La fonction <em>f</em> est :",
    choices: [
      { label: "A", text: "affine" },
      { label: "B", text: "ni affine ni linéaire" },
      { label: "C", text: "du second degré" },
      { label: "D", text: "on ne peut pas conclure" }
    ],
    answer: "A",
    explanation: "Les accroissements de <em>f</em>(<em>x</em>) sont constants (+2 pour chaque pas de 1). La fonction est affine : <em>f</em>(<em>x</em>) = 2<em>x</em> + 3."
  },
  {
    id: 7,
    text: "La droite passant par l'origine et de coefficient directeur 3 est la représentation de la fonction :",
    choices: [
      { label: "A", text: "<em>f</em>(<em>x</em>) = 3" },
      { label: "B", text: "<em>f</em>(<em>x</em>) = <em>x</em> + 3" },
      { label: "C", text: "<em>f</em>(<em>x</em>) = 3<em>x</em>" },
      { label: "D", text: "<em>f</em>(<em>x</em>) = 3<em>x</em> + 3" }
    ],
    answer: "C",
    explanation: "Elle passe par l'origine (<em>b</em> = 0) et a un coefficient directeur de 3 (<em>a</em> = 3), donc <em>f</em>(<em>x</em>) = 3<em>x</em>."
  },
  {
    id: 8,
    text: "Quelle fonction a pour représentation graphique une droite qui ne passe <u>pas</u> par l'origine ?",
    choices: [
      { label: "A", text: "<em>f</em>(<em>x</em>) = 4<em>x</em>" },
      { label: "B", text: "<em>f</em>(<em>x</em>) = −2<em>x</em>" },
      { label: "C", text: "<em>f</em>(<em>x</em>) = <em>x</em> − 1" },
      { label: "D", text: "<em>f</em>(<em>x</em>) = 0" }
    ],
    answer: "C",
    explanation: "<em>f</em>(<em>x</em>) = <em>x</em> − 1 est affine avec <em>b</em> = −1 ≠ 0. La droite ne passe pas par l'origine."
  },
  {
    id: 9,
    text: "On sait que <em>f</em>(0) = 4 et <em>f</em>(1) = 7. Si <em>f</em> est affine, alors <em>f</em>(<em>x</em>) = :",
    choices: [
      { label: "A", text: "3<em>x</em> + 4" },
      { label: "B", text: "4<em>x</em> + 3" },
      { label: "C", text: "7<em>x</em> + 4" },
      { label: "D", text: "4<em>x</em> + 7" }
    ],
    answer: "A",
    explanation: "<em>b</em> = <em>f</em>(0) = 4. Le coefficient directeur <em>a</em> = <em>f</em>(1) − <em>f</em>(0) = 7 − 4 = 3. Donc <em>f</em>(<em>x</em>) = 3<em>x</em> + 4."
  },
  {
    id: 10,
    text: "Soit <em>f</em>(<em>x</em>) = −<em>x</em> + 6. La droite représentant <em>f</em> est :",
    choices: [
      { label: "A", text: "croissante" },
      { label: "B", text: "décroissante" },
      { label: "C", text: "horizontale" },
      { label: "D", text: "verticale" }
    ],
    answer: "B",
    explanation: "Le coefficient directeur est <em>a</em> = −1 < 0, donc la droite est décroissante."
  }
];
