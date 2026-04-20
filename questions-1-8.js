// Catégorie 1 – Calcul numérique et algébrique
// Sous-catégorie 1.8 – Effectuer un calcul littéral élémentaire
const qcmCategory = "Calcul numérique et algébrique";
const qcmSubcategory = "Effectuer un calcul littéral élémentaire";
const questions = [
  {
    id: 1,
    text: "On additionne un nombre réel <em>x</em> avec son triple et son carré. Le résultat est égal à :",
    choices: [
      { label: "A", text: "\\((x + 3x)^{2}\\)" },
      { label: "B", text: "\\(x + (3x)^{2}\\)" },
      { label: "C", text: "\\(1 + 3x^{2}\\)" },
      { label: "D", text: "\\(4x + x^{2}\\)" }
    ],
    answer: "D",
    explanation: "\\(x + 3x + x^{2} = 4x + x^{2}\\)."
  },
  {
    id: 2,
    text: "L'expression \\(-(a + b)\\) est égale à :",
    choices: [
      { label: "A", text: "\\(-a + b\\)" },
      { label: "B", text: "\\(-a - b\\)" },
      { label: "C", text: "\\(a - b\\)" },
      { label: "D", text: "\\(-(ab)\\)" }
    ],
    answer: "B",
    explanation: "\\(-(a + b) = -a - b\\)."
  },
  {
    id: 3,
    text: "L'expression \\(-(a - b)\\) est égale à :",
    choices: [
      { label: "A", text: "\\(-a - b\\)" },
      { label: "B", text: "\\(a + b\\)" },
      { label: "C", text: "\\(b - a\\)" },
      { label: "D", text: "\\(-a + 2b\\)" }
    ],
    answer: "C",
    explanation: "\\(-(a - b) = -a + b = b - a\\)."
  },
  {
    id: 4,
    text: "L'expression \\(\\frac{x}{a}\\) peut aussi s'écrire :",
    choices: [
      { label: "A", text: "\\(x \\times a\\)" },
      { label: "B", text: "\\(\\frac{1}{a} \\times x\\)" },
      { label: "C", text: "\\(\\frac{a}{x}\\)" },
      { label: "D", text: "\\(x - a\\)" }
    ],
    answer: "B",
    explanation: "\\(\\frac{x}{a} = \\frac{1}{a} \\times x\\)."
  },
  {
    id: 5,
    text: "L'expression \\((-1) \\times a\\) est égale à :",
    choices: [
      { label: "A", text: "\\(a\\)" },
      { label: "B", text: "\\(1 - a\\)" },
      { label: "C", text: "\\(-a\\)" },
      { label: "D", text: "\\(a - 1\\)" }
    ],
    answer: "C",
    explanation: "\\((-1) \\times a = -a\\)."
  },
  {
    id: 6,
    text: "L'expression \\(\\frac{ab}{c}\\) est égale à :",
    choices: [
      { label: "A", text: "\\(a \\times \\frac{b}{c}\\)" },
      { label: "B", text: "\\(\\frac{a}{c} + b\\)" },
      { label: "C", text: "\\(\\frac{a + b}{c}\\)" },
      { label: "D", text: "\\(a \\times b \\times c\\)" }
    ],
    answer: "A",
    explanation: "\\(\\frac{ab}{c} = a \\times \\frac{b}{c} = \\frac{a}{c} \\times b\\)."
  },
  {
    id: 7,
    text: "L'expression \\(\\frac{1}{\\frac{1}{a}}\\) (avec \\(a \\neq 0\\)) est égale à :",
    choices: [
      { label: "A", text: "\\(\\frac{1}{a}\\)" },
      { label: "B", text: "\\(a^{2}\\)" },
      { label: "C", text: "\\(a\\)" },
      { label: "D", text: "\\(-a\\)" }
    ],
    answer: "C",
    explanation: "\\(\\frac{1}{\\frac{1}{a}} = 1 \\times a = a\\)."
  },
  {
    id: 8,
    text: "L'expression \\(\\frac{\\frac{1}{a}}{\\frac{1}{b}}\\) (avec \\(a \\neq 0\\) et \\(b \\neq 0\\)) est égale à :",
    choices: [
      { label: "A", text: "\\(\\frac{a}{b}\\)" },
      { label: "B", text: "\\(\\frac{b}{a}\\)" },
      { label: "C", text: "\\(\\frac{1}{ab}\\)" },
      { label: "D", text: "\\(ab\\)" }
    ],
    answer: "B",
    explanation: "\\(\\frac{\\frac{1}{a}}{\\frac{1}{b}} = \\frac{1}{a} \\times \\frac{b}{1} = \\frac{b}{a}\\)."
  },
  {
    id: 9,
    text: "L'expression \\(\\frac{a/b}{c/d}\\) (avec \\(b, c, d \\neq 0\\)) est égale à :",
    choices: [
      { label: "A", text: "\\(\\frac{ac}{bd}\\)" },
      { label: "B", text: "\\(\\frac{ad}{bc}\\)" },
      { label: "C", text: "\\(\\frac{bc}{ad}\\)" },
      { label: "D", text: "\\(\\frac{ab}{cd}\\)" }
    ],
    answer: "B",
    explanation: "\\(\\frac{a/b}{c/d} = \\frac{a}{b} \\times \\frac{d}{c} = \\frac{ad}{bc}\\)."
  },
  {
    id: 10,
    text: "On sait que \\(0 \\times a = 0\\). Que vaut \\(\\frac{0}{a}\\) pour \\(a \\neq 0\\) ?",
    choices: [
      { label: "A", text: "\\(a\\)" },
      { label: "B", text: "1" },
      { label: "C", text: "indéfini" },
      { label: "D", text: "0" }
    ],
    answer: "D",
    explanation: "\\(\\frac{0}{a} = 0\\) pour tout \\(a \\neq 0\\)."
  }
];
