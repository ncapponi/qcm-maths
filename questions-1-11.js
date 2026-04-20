// Catégorie 1 – Calcul numérique et algébrique
// Sous-catégorie 1.11 – Isoler une variable dans une égalité
const qcmCategory = "Calcul numérique et algébrique";
const qcmSubcategory = "Isoler une variable dans une égalité";
const questions = [
  {
    id: 1,
    text: "Voici les notes sur vingt obtenues par un élève en mathématiques :<br><br><table class='qcm-table'><tr><th>Note</th><td>10</td><td>13</td><td>12</td><td><em>x</em></td></tr><tr><th>Coefficient</th><td>1</td><td>1</td><td>1</td><td>2</td></tr></table><br>On cherche ce que doit valoir <em>x</em> pour que la moyenne de l'élève soit égale à 15.",
    choices: [
      { label: "A", text: "<em>x</em> = 20" },
      { label: "B", text: "<em>x</em> = 18" },
      { label: "C", text: "<em>x</em> = 15" },
      { label: "D", text: "Impossible : il faudrait une note strictement supérieure à vingt." }
    ],
    answer: "A",
    explanation: "Moyenne = (10×1 + 13×1 + 12×1 + x×2) / (1+1+1+2) = (35 + 2x) / 5 = 15 ⇒ 35 + 2x = 75 ⇒ 2x = 40 ⇒ x = 20."
  },
  {
    id: 2,
    text: "On considère la relation \\(C = (1 + t)^{2}\\). On cherche à isoler la variable \\(t\\). On a :",
    choices: [
      { label: "A", text: "<em>t</em> = √(<em>C</em> − 1)" },
      { label: "B", text: "<em>t</em> = √<em>C</em> − 1" },
      { label: "C", text: "<em>t</em> = √(1 − <em>C</em>)" },
      { label: "D", text: "<em>t</em> = 1 − √<em>C</em>" }
    ],
    answer: "B",
    explanation: "\\(C = (1 + t)^{2} \\Rightarrow \\sqrt{C} = 1 + t \\Rightarrow t = \\sqrt{C} - 1\\)."
  },
  {
    id: 3,
    text: "On considère la relation <em>d</em> = <em>v</em> × <em>t</em>. On isole <em>v</em> :",
    choices: [
      { label: "A", text: "<em>v</em> = <em>d</em> × <em>t</em>" },
      { label: "B", text: "<em>v</em> = <em>d</em> − <em>t</em>" },
      { label: "C", text: "<em>v</em> = \\(\\frac{d}{t}\\)" },
      { label: "D", text: "<em>v</em> = \\(\\frac{t}{d}\\)" }
    ],
    answer: "C",
    explanation: "d = v × t ⇒ v = d / t."
  },
  {
    id: 4,
    text: "On considère la relation \\(E = \\frac{1}{2}mv^{2}\\). On isole <em>m</em> :",
    choices: [
      { label: "A", text: "<em>m</em> = \\(\\frac{2E}{v^{2}}\\)" },
      { label: "B", text: "<em>m</em> = \\(\\frac{E}{2v^{2}}\\)" },
      { label: "C", text: "<em>m</em> = \\(\\frac{Ev^{2}}{2}\\)" },
      { label: "D", text: "<em>m</em> = \\(2Ev^{2}\\)" }
    ],
    answer: "A",
    explanation: "\\(E = \\frac{1}{2}mv^{2} \\Rightarrow 2E = mv^{2} \\Rightarrow m = \\frac{2E}{v^{2}}\\)."
  },
  {
    id: 5,
    text: "On considère la relation <em>P</em> = <em>F</em> / <em>S</em>. On isole <em>S</em> :",
    choices: [
      { label: "A", text: "<em>S</em> = <em>P</em> × <em>F</em>" },
      { label: "B", text: "<em>S</em> = <em>F</em> − <em>P</em>" },
      { label: "C", text: "<em>S</em> = \\(\\frac{F}{P}\\)" },
      { label: "D", text: "<em>S</em> = \\(\\frac{P}{F}\\)" }
    ],
    answer: "C",
    explanation: "P = F / S ⇒ P × S = F ⇒ S = F / P."
  },
  {
    id: 6,
    text: "On considère la relation \\(A = \\pi r^{2}\\). On isole <em>r</em> (avec <em>r</em> &gt; 0) :",
    choices: [
      { label: "A", text: "<em>r</em> = \\(\\frac{A}{\\pi}\\)" },
      { label: "B", text: "<em>r</em> = \\(\\sqrt{\\frac{A}{\\pi}}\\)" },
      { label: "C", text: "<em>r</em> = \\(\\frac{\\sqrt{A}}{\\pi}\\)" },
      { label: "D", text: "<em>r</em> = \\(\\frac{A}{2\\pi}\\)" }
    ],
    answer: "B",
    explanation: "\\(A = \\pi r^{2} \\Rightarrow r^{2} = \\frac{A}{\\pi} \\Rightarrow r = \\sqrt{\\frac{A}{\\pi}}\\)."
  },
  {
    id: 7,
    text: "On considère la relation <em>y</em> = <em>ax</em> + <em>b</em>. On isole <em>x</em> :",
    choices: [
      { label: "A", text: "<em>x</em> = \\(\\frac{y + b}{a}\\)" },
      { label: "B", text: "<em>x</em> = \\(\\frac{y - b}{a}\\)" },
      { label: "C", text: "<em>x</em> = \\(\\frac{a}{y - b}\\)" },
      { label: "D", text: "<em>x</em> = <em>a</em>(<em>y</em> − <em>b</em>)" }
    ],
    answer: "B",
    explanation: "y = ax + b ⇒ y − b = ax ⇒ x = (y − b) / a."
  },
  {
    id: 8,
    text: "On considère la relation \\(T = 2\\pi\\sqrt{\\frac{L}{g}}\\). On isole <em>L</em> :",
    choices: [
      { label: "A", text: "<em>L</em> = \\(\\frac{T^{2}g}{4\\pi^{2}}\\)" },
      { label: "B", text: "<em>L</em> = \\(\\frac{T^{2}}{4\\pi^{2}g}\\)" },
      { label: "C", text: "<em>L</em> = \\(\\frac{T g}{2\\pi}\\)" },
      { label: "D", text: "<em>L</em> = \\(\\frac{4\\pi^{2}}{T^{2}g}\\)" }
    ],
    answer: "A",
    explanation: "\\(T = 2\\pi\\sqrt{\\frac{L}{g}} \\Rightarrow \\frac{T}{2\\pi} = \\sqrt{\\frac{L}{g}} \\Rightarrow \\frac{T^{2}}{4\\pi^{2}} = \\frac{L}{g} \\Rightarrow L = \\frac{T^{2}g}{4\\pi^{2}}\\)."
  },
  {
    id: 9,
    text: "On considère la relation \\(U = RI\\). On isole <em>R</em> :",
    choices: [
      { label: "A", text: "<em>R</em> = <em>U</em> − <em>I</em>" },
      { label: "B", text: "<em>R</em> = <em>U</em> × <em>I</em>" },
      { label: "C", text: "<em>R</em> = \\(\\frac{I}{U}\\)" },
      { label: "D", text: "<em>R</em> = \\(\\frac{U}{I}\\)" }
    ],
    answer: "D",
    explanation: "U = RI ⇒ R = U / I."
  },
  {
    id: 10,
    text: "On considère la relation \\(V = \\frac{4}{3}\\pi r^{3}\\). On isole <em>r</em> (avec <em>r</em> &gt; 0) :",
    choices: [
      { label: "A", text: "<em>r</em> = \\(\\sqrt[3]{\\frac{3V}{4\\pi}}\\)" },
      { label: "B", text: "<em>r</em> = \\(\\frac{3V}{4\\pi}\\)" },
      { label: "C", text: "<em>r</em> = \\(\\sqrt[3]{\\frac{4\\pi}{3V}}\\)" },
      { label: "D", text: "<em>r</em> = \\(\\sqrt{\\frac{3V}{4\\pi}}\\)" }
    ],
    answer: "A",
    explanation: "\\(V = \\frac{4}{3}\\pi r^{3} \\Rightarrow r^{3} = \\frac{3V}{4\\pi} \\Rightarrow r = \\sqrt[3]{\\frac{3V}{4\\pi}}\\)."
  }
];
