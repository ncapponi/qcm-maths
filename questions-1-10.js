// Catégorie 1 – Calcul numérique et algébrique
// Sous-catégorie 1.10 – Résoudre une équation ou inéquation du premier degré
const qcmCategory = "Calcul numérique et algébrique";
const qcmSubcategory = "Résoudre une équation ou inéquation du premier degré";
const questions = [
  {
    id: 1,
    text: "La solution de l'équation 3<em>x</em> = 0 est :",
    choices: [
      { label: "A", text: "<em>x</em> = −3" },
      { label: "B", text: "<em>x</em> = 1/3" },
      { label: "C", text: "<em>x</em> = −1/3" },
      { label: "D", text: "<em>x</em> = 0" }
    ],
    answer: "D",
    explanation: "3x = 0 ⇒ x = 0 ÷ 3 = 0."
  },
  {
    id: 2,
    text: "La solution de l'équation \\(\\frac{144}{x}\\) = 9 est :",
    choices: [
      { label: "A", text: "<em>x</em> = 144 × 9" },
      { label: "B", text: "<em>x</em> = \\(\\frac{9}{144}\\)" },
      { label: "C", text: "<em>x</em> = \\(\\frac{144}{9}\\)" },
      { label: "D", text: "<em>x</em> = −16" }
    ],
    answer: "C",
    explanation: "144/x = 9 ⇒ x = 144/9 = 16."
  },
  {
    id: 3,
    text: "La solution de l'équation 5<em>x</em> − 3 = 2<em>x</em> + 9 est :",
    choices: [
      { label: "A", text: "<em>x</em> = 4" },
      { label: "B", text: "<em>x</em> = 2" },
      { label: "C", text: "<em>x</em> = −4" },
      { label: "D", text: "<em>x</em> = 6" }
    ],
    answer: "A",
    explanation: "5x − 3 = 2x + 9 ⇒ 3x = 12 ⇒ x = 4."
  },
  {
    id: 4,
    text: "L'ensemble des solutions de l'inéquation 2<em>x</em> + 1 &gt; 7 est :",
    choices: [
      { label: "A", text: "\\(x > 4\\)" },
      { label: "B", text: "\\(x > 3\\)" },
      { label: "C", text: "\\(x < 3\\)" },
      { label: "D", text: "\\(x \\geq 3\\)" }
    ],
    answer: "B",
    explanation: "2x + 1 > 7 ⇒ 2x > 6 ⇒ x > 3."
  },
  {
    id: 5,
    text: "La solution de l'équation \\(x^{2} = 49\\) est :",
    choices: [
      { label: "A", text: "<em>x</em> = 7 uniquement" },
      { label: "B", text: "<em>x</em> = −7 uniquement" },
      { label: "C", text: "<em>x</em> = 7 ou <em>x</em> = −7" },
      { label: "D", text: "<em>x</em> = \\(\\frac{49}{2}\\)" }
    ],
    answer: "C",
    explanation: "\\(x^{2} = 49 \\Rightarrow x = 7\\) ou \\(x = -7\\)."
  },
  {
    id: 6,
    text: "L'ensemble des solutions de l'inéquation −3<em>x</em> + 6 ≤ 0 est :",
    choices: [
      { label: "A", text: "\\(x \\leq 2\\)" },
      { label: "B", text: "\\(x \\geq 2\\)" },
      { label: "C", text: "\\(x \\leq -2\\)" },
      { label: "D", text: "\\(x \\geq -2\\)" }
    ],
    answer: "B",
    explanation: "−3x + 6 ≤ 0 ⇒ −3x ≤ −6 ⇒ x ≥ 2 (on divise par −3, on change le sens)."
  },
  {
    id: 7,
    text: "La solution de l'équation \\(\\frac{5}{x}\\) = 20 est :",
    choices: [
      { label: "A", text: "<em>x</em> = 100" },
      { label: "B", text: "<em>x</em> = 4" },
      { label: "C", text: "<em>x</em> = \\(\\frac{1}{4}\\)" },
      { label: "D", text: "<em>x</em> = 15" }
    ],
    answer: "C",
    explanation: "5/x = 20 ⇒ x = 5/20 = 1/4."
  },
  {
    id: 8,
    text: "La solution de l'équation 4<em>x</em> + 5 = 3 est :",
    choices: [
      { label: "A", text: "<em>x</em> = 2" },
      { label: "B", text: "<em>x</em> = −\\(\\frac{1}{2}\\)" },
      { label: "C", text: "<em>x</em> = \\(\\frac{1}{2}\\)" },
      { label: "D", text: "<em>x</em> = −2" }
    ],
    answer: "B",
    explanation: "4x + 5 = 3 ⇒ 4x = −2 ⇒ x = −1/2."
  },
  {
    id: 9,
    text: "L'ensemble des solutions de l'inéquation \\(\\frac{x}{2}\\) − 1 &lt; 3 est :",
    choices: [
      { label: "A", text: "\\(x < 8\\)" },
      { label: "B", text: "\\(x < 4\\)" },
      { label: "C", text: "\\(x > 8\\)" },
      { label: "D", text: "\\(x < 6\\)" }
    ],
    answer: "A",
    explanation: "x/2 − 1 < 3 ⇒ x/2 < 4 ⇒ x < 8."
  },
  {
    id: 10,
    text: "La solution de l'équation \\(x^{2} = 5\\) est :",
    choices: [
      { label: "A", text: "<em>x</em> = \\(\\frac{5}{2}\\)" },
      { label: "B", text: "<em>x</em> = \\(\\sqrt{5}\\) uniquement" },
      { label: "C", text: "<em>x</em> = \\(\\sqrt{5}\\) ou <em>x</em> = \\(-\\sqrt{5}\\)" },
      { label: "D", text: "Pas de solution" }
    ],
    answer: "C",
    explanation: "\\(x^{2} = 5 \\Rightarrow x = \\sqrt{5}\\) ou \\(x = -\\sqrt{5}\\)."
  }
];
