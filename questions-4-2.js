// Catégorie 4 – Fonctions et représentations
// Sous-catégorie 4.2 – Exploiter une équation de courbe
const qcmCategory = "Fonctions et représentations";
const qcmSubcategory = "Exploiter une équation de courbe";
const questions = [
  {
    id: 1,
    text: "Soit <em>f</em>(<em>x</em>) = 2<em>x</em> − 3. Le point (4 ; 5) appartient-il à la courbe de <em>f</em> ?",
    choices: [
      { label: "A", text: "Oui" },
      { label: "B", text: "Non" },
      { label: "C", text: "On ne peut pas savoir" },
      { label: "D", text: "Seulement si <em>x</em> > 0" }
    ],
    answer: "A",
    explanation: "<em>f</em>(4) = 2 × 4 − 3 = 5. Donc le point (4 ; 5) est bien sur la courbe."
  },
  {
    id: 2,
    text: "Soit <em>f</em>(<em>x</em>) = <em>x</em>² − 1. Le point (2 ; 5) appartient-il à la courbe de <em>f</em> ?",
    choices: [
      { label: "A", text: "Oui" },
      { label: "B", text: "Non" },
      { label: "C", text: "On ne peut pas savoir" },
      { label: "D", text: "Seulement si <em>x</em> ≥ 0" }
    ],
    answer: "B",
    explanation: "<em>f</em>(2) = 2² − 1 = 3 ≠ 5. Le point (2 ; 5) n'est pas sur la courbe."
  },
  {
    id: 3,
    text: "Soit <em>f</em>(<em>x</em>) = 3<em>x</em> + 1. L'image de −2 par <em>f</em> est :",
    choices: [
      { label: "A", text: "−5" },
      { label: "B", text: "−7" },
      { label: "C", text: "5" },
      { label: "D", text: "7" }
    ],
    answer: "A",
    explanation: "<em>f</em>(−2) = 3 × (−2) + 1 = −6 + 1 = −5."
  },
  {
    id: 4,
    text: "Soit <em>f</em>(<em>x</em>) = <em>x</em>² + 2<em>x</em>. Le ou les antécédent(s) de 0 par <em>f</em> sont :",
    choices: [
      { label: "A", text: "0 seulement" },
      { label: "B", text: "−2 seulement" },
      { label: "C", text: "0 et −2" },
      { label: "D", text: "il n'y en a pas" }
    ],
    answer: "C",
    explanation: "<em>f</em>(<em>x</em>) = 0 ⟺ <em>x</em>(<em>x</em> + 2) = 0 ⟺ <em>x</em> = 0 ou <em>x</em> = −2."
  },
  {
    id: 5,
    text: "Soit <em>f</em>(<em>x</em>) = −<em>x</em>² + 4. Quelle est la valeur de <em>f</em>(3) ?",
    choices: [
      { label: "A", text: "−5" },
      { label: "B", text: "−13" },
      { label: "C", text: "5" },
      { label: "D", text: "13" }
    ],
    answer: "A",
    explanation: "<em>f</em>(3) = −3² + 4 = −9 + 4 = −5."
  },
  {
    id: 6,
    text: "La courbe d'une fonction <em>f</em> a pour équation <em>y</em> = \\(\\frac{1}{x}\\). Le point \\(\\left(2\\,;\\,\\frac{1}{2}\\right)\\) appartient-il à cette courbe ?",
    choices: [
      { label: "A", text: "Oui" },
      { label: "B", text: "Non" },
      { label: "C", text: "Seulement si <em>x</em> > 0" },
      { label: "D", text: "On ne peut pas savoir" }
    ],
    answer: "A",
    explanation: "\\(f(2) = \\frac{1}{2}\\). Le point \\((2\\,;\\,\\frac{1}{2})\\) vérifie l'équation."
  },
  {
    id: 7,
    text: "Soit <em>f</em>(<em>x</em>) = 2<em>x</em>² − 3<em>x</em> + 1. Quelle est la valeur de <em>f</em>(1) ?",
    choices: [
      { label: "A", text: "0" },
      { label: "B", text: "1" },
      { label: "C", text: "−2" },
      { label: "D", text: "6" }
    ],
    answer: "A",
    explanation: "<em>f</em>(1) = 2(1)² − 3(1) + 1 = 2 − 3 + 1 = 0."
  },
  {
    id: 8,
    text: "Soit <em>f</em>(<em>x</em>) = <em>x</em>² − 4. Pour quelle(s) valeur(s) de <em>x</em> a-t-on <em>f</em>(<em>x</em>) = 0 ?",
    choices: [
      { label: "A", text: "<em>x</em> = 4" },
      { label: "B", text: "<em>x</em> = 2 ou <em>x</em> = −2" },
      { label: "C", text: "<em>x</em> = 2 seulement" },
      { label: "D", text: "<em>x</em> = 0" }
    ],
    answer: "B",
    explanation: "<em>x</em>² − 4 = 0 ⟺ (<em>x</em> − 2)(<em>x</em> + 2) = 0 ⟺ <em>x</em> = 2 ou <em>x</em> = −2."
  },
  {
    id: 9,
    text: "Soit <em>f</em>(<em>x</em>) = 5 − 2<em>x</em>. L'ordonnée à l'origine de la courbe de <em>f</em> est :",
    choices: [
      { label: "A", text: "−2" },
      { label: "B", text: "2" },
      { label: "C", text: "5" },
      { label: "D", text: "−5" }
    ],
    answer: "C",
    explanation: "L'ordonnée à l'origine est <em>f</em>(0) = 5 − 2 × 0 = 5."
  },
  {
    id: 10,
    text: "La courbe de <em>f</em>(<em>x</em>) = <em>x</em>² passe par le point (−3 ; <em>k</em>). La valeur de <em>k</em> est :",
    choices: [
      { label: "A", text: "−9" },
      { label: "B", text: "−3" },
      { label: "C", text: "6" },
      { label: "D", text: "9" }
    ],
    answer: "D",
    explanation: "<em>f</em>(−3) = (−3)² = 9, donc <em>k</em> = 9."
  }
];
