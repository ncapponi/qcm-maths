// Catégorie 1 – Calcul numérique et algébrique
// Sous-catégorie 1.14 – Déterminer le signe d'une expression du premier degré ou factorisée du second degré
const qcmCategory = "Calcul numérique et algébrique";
const qcmSubcategory = "Déterminer le signe d'une expression du premier degré ou factorisée du second degré";
const questions = [
  {
    id: 1,
    text: "On considère une fonction <em>f</em> définie sur ℝ dont le tableau de signes est :<br><br><table class='qcm-table'><tr><th><em>x</em></th><td>−∞</td><td></td><td>2</td><td></td><td>+∞</td></tr><tr><th><em>f</em>(<em>x</em>)</th><td></td><td>+</td><td>0</td><td>−</td><td></td></tr></table><br>Parmi les expressions proposées, une seule est possible pour <em>f</em> :",
    choices: [
      { label: "A", text: "<em>f</em>(<em>x</em>) = −3<em>x</em> + 6" },
      { label: "B", text: "<em>f</em>(<em>x</em>) = <em>x</em> + 2" },
      { label: "C", text: "<em>f</em>(<em>x</em>) = <em>x</em> − 2" },
      { label: "D", text: "<em>f</em>(<em>x</em>) = −4<em>x</em> + 2" }
    ],
    answer: "A",
    explanation: "−3<em>x</em> + 6 = 0 ⇒ <em>x</em> = 2, positif avant et négatif après, ce qui correspond au tableau. Les autres s'annulent en x = −2, x = 2 (mais avec pente positive) ou x = ½."
  },
  {
    id: 2,
    text: "Le signe de l'expression 2<em>x</em> − 8 pour <em>x</em> = 3 est :",
    choices: [
      { label: "A", text: "Positif" },
      { label: "B", text: "Négatif" },
      { label: "C", text: "Nul" },
      { label: "D", text: "On ne peut pas savoir" }
    ],
    answer: "B",
    explanation: "2 × 3 − 8 = 6 − 8 = −2 < 0, donc l'expression est négative."
  },
  {
    id: 3,
    text: "L'expression 5<em>x</em> − 10 est positive pour :",
    choices: [
      { label: "A", text: "\\(x < 2\\)" },
      { label: "B", text: "\\(x > 2\\)" },
      { label: "C", text: "\\(x > -2\\)" },
      { label: "D", text: "\\(x < -2\\)" }
    ],
    answer: "B",
    explanation: "5x − 10 ≥ 0 ⇒ 5x ≥ 10 ⇒ x ≥ 2. L'expression est strictement positive pour x > 2."
  },
  {
    id: 4,
    text: "On considère le tableau de signes suivant :<br><br><table class='qcm-table'><tr><th><em>x</em></th><td>−∞</td><td></td><td>−1</td><td></td><td>+∞</td></tr><tr><th><em>f</em>(<em>x</em>)</th><td></td><td>−</td><td>0</td><td>+</td><td></td></tr></table><br>Une expression possible pour <em>f</em>(<em>x</em>) est :",
    choices: [
      { label: "A", text: "<em>f</em>(<em>x</em>) = −<em>x</em> − 1" },
      { label: "B", text: "<em>f</em>(<em>x</em>) = <em>x</em> + 1" },
      { label: "C", text: "<em>f</em>(<em>x</em>) = <em>x</em> − 1" },
      { label: "D", text: "<em>f</em>(<em>x</em>) = −<em>x</em> + 1" }
    ],
    answer: "B",
    explanation: "x + 1 = 0 ⇒ x = −1. Pour x < −1, x + 1 < 0 (négatif) ; pour x > −1, x + 1 > 0 (positif). Cela correspond au tableau."
  },
  {
    id: 5,
    text: "Le signe de l'expression \\((x - 1)(x + 3)\\) pour \\(x = 0\\) est :",
    choices: [
      { label: "A", text: "Positif" },
      { label: "B", text: "Négatif" },
      { label: "C", text: "Nul" },
      { label: "D", text: "On ne peut pas savoir" }
    ],
    answer: "B",
    explanation: "(0 − 1)(0 + 3) = (−1)(3) = −3 < 0, donc l'expression est négative."
  },
  {
    id: 6,
    text: "L'expression \\((x - 2)(x + 4)\\) est positive pour :",
    choices: [
      { label: "A", text: "\\(x \\in ]-4 \\,;\\, 2[\\)" },
      { label: "B", text: "\\(x \\in ]-\\infty \\,;\\, -4[ \\cup ]2 \\,;\\, +\\infty[\\)" },
      { label: "C", text: "\\(x \\in ]-2 \\,;\\, 4[\\)" },
      { label: "D", text: "\\(x \\in ]-\\infty \\,;\\, -2[ \\cup ]4 \\,;\\, +\\infty[\\)" }
    ],
    answer: "B",
    explanation: "Les racines sont x = 2 et x = −4. Le produit est positif à l'extérieur des racines : x < −4 ou x > 2."
  },
  {
    id: 7,
    text: "Le signe de \\(\\frac{x + 1}{x - 3}\\) pour \\(x = 0\\) est :",
    choices: [
      { label: "A", text: "Positif" },
      { label: "B", text: "Négatif" },
      { label: "C", text: "Nul" },
      { label: "D", text: "Non défini" }
    ],
    answer: "B",
    explanation: "\\(\\frac{0 + 1}{0 - 3} = \\frac{1}{-3} = -\\frac{1}{3} < 0\\), donc l'expression est négative."
  },
  {
    id: 8,
    text: "On considère l'expression −4<em>x</em> + 12. Elle s'annule pour :",
    choices: [
      { label: "A", text: "\\(x = -3\\)" },
      { label: "B", text: "\\(x = 3\\)" },
      { label: "C", text: "\\(x = 12\\)" },
      { label: "D", text: "\\(x = -12\\)" }
    ],
    answer: "B",
    explanation: "−4x + 12 = 0 ⇒ −4x = −12 ⇒ x = 3."
  },
  {
    id: 9,
    text: "L'expression \\((2x - 6)(-x + 1)\\) est positive ou nulle pour :",
    choices: [
      { label: "A", text: "\\(x \\in [1 \\,;\\, 3]\\)" },
      { label: "B", text: "\\(x \\in ]-\\infty \\,;\\, 1] \\cup [3 \\,;\\, +\\infty[\\)" },
      { label: "C", text: "\\(x \\in [-1 \\,;\\, 3]\\)" },
      { label: "D", text: "\\(x \\in [-3 \\,;\\, 1]\\)" }
    ],
    answer: "A",
    explanation: "2x − 6 = 0 ⇒ x = 3 ; −x + 1 = 0 ⇒ x = 1. Le premier facteur est positif pour x > 3, le second pour x < 1. Le produit est positif entre les racines : x ∈ [1 ; 3]."
  },
  {
    id: 10,
    text: "Le signe de l'expression \\(\\frac{(x - 5)(x + 2)}{x - 1}\\) pour \\(x = 3\\) est :",
    choices: [
      { label: "A", text: "Positif" },
      { label: "B", text: "Négatif" },
      { label: "C", text: "Nul" },
      { label: "D", text: "Non défini" }
    ],
    answer: "B",
    explanation: "\\(\\frac{(3 - 5)(3 + 2)}{3 - 1} = \\frac{(-2)(5)}{2} = \\frac{-10}{2} = -5 < 0\\), donc l'expression est négative."
  }
];
