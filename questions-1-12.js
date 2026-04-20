// Catégorie 1 – Calcul numérique et algébrique
// Sous-catégorie 1.12 – Effectuer une application numérique d'une formule
const qcmCategory = "Calcul numérique et algébrique";
const qcmSubcategory = "Effectuer une application numérique d'une formule";
const questions = [
  {
    id: 1,
    text: "On considère la formule \\(A = \\pi r^{2}\\). Pour <em>r</em> = 3, la valeur exacte de <em>A</em> est :",
    choices: [
      { label: "A", text: "\\(6\\pi\\)" },
      { label: "B", text: "\\(9\\pi\\)" },
      { label: "C", text: "\\(3\\pi\\)" },
      { label: "D", text: "\\(\\pi^{2} \\times 3\\)" }
    ],
    answer: "B",
    explanation: "\\(A = \\pi \\times 3^{2} = 9\\pi\\)."
  },
  {
    id: 2,
    text: "On considère l'énergie cinétique \\(E_c = \\frac{1}{2}mv^{2}\\). Pour <em>m</em> = 4 kg et <em>v</em> = 5 m/s, on obtient :",
    choices: [
      { label: "A", text: "\\(E_c = 50\\) J" },
      { label: "B", text: "\\(E_c = 10\\) J" },
      { label: "C", text: "\\(E_c = 100\\) J" },
      { label: "D", text: "\\(E_c = 20\\) J" }
    ],
    answer: "A",
    explanation: "\\(E_c = \\frac{1}{2} \\times 4 \\times 5^{2} = \\frac{1}{2} \\times 4 \\times 25 = 50\\) J."
  },
  {
    id: 3,
    text: "La distance parcourue est donnée par <em>d</em> = <em>v</em> × <em>t</em>. Pour <em>v</em> = 80 km/h et <em>t</em> = 1,5 h, on obtient :",
    choices: [
      { label: "A", text: "<em>d</em> = 100 km" },
      { label: "B", text: "<em>d</em> = 120 km" },
      { label: "C", text: "<em>d</em> = 160 km" },
      { label: "D", text: "<em>d</em> = 53,3 km" }
    ],
    answer: "B",
    explanation: "d = 80 × 1,5 = 120 km."
  },
  {
    id: 4,
    text: "Le périmètre d'un cercle est donné par \\(P = 2\\pi r\\). Pour <em>r</em> = 7, la valeur exacte de <em>P</em> est :",
    choices: [
      { label: "A", text: "\\(7\\pi\\)" },
      { label: "B", text: "\\(49\\pi\\)" },
      { label: "C", text: "\\(14\\pi\\)" },
      { label: "D", text: "\\(2\\pi + 7\\)" }
    ],
    answer: "C",
    explanation: "\\(P = 2\\pi \\times 7 = 14\\pi\\)."
  },
  {
    id: 5,
    text: "La loi d'Ohm s'écrit <em>U</em> = <em>R</em> × <em>I</em>. Pour <em>R</em> = 220 Ω et <em>I</em> = 0,5 A, on obtient :",
    choices: [
      { label: "A", text: "<em>U</em> = 440 V" },
      { label: "B", text: "<em>U</em> = 110 V" },
      { label: "C", text: "<em>U</em> = 220,5 V" },
      { label: "D", text: "<em>U</em> = 44 V" }
    ],
    answer: "B",
    explanation: "U = 220 × 0,5 = 110 V."
  },
  {
    id: 6,
    text: "Le volume d'un pavé droit est donné par <em>V</em> = <em>L</em> × <em>l</em> × <em>h</em>. Pour <em>L</em> = 5 cm, <em>l</em> = 3 cm et <em>h</em> = 2 cm, on obtient :",
    choices: [
      { label: "A", text: "<em>V</em> = 10 cm³" },
      { label: "B", text: "<em>V</em> = 30 cm³" },
      { label: "C", text: "<em>V</em> = 20 cm³" },
      { label: "D", text: "<em>V</em> = 15 cm³" }
    ],
    answer: "B",
    explanation: "V = 5 × 3 × 2 = 30 cm³."
  },
  {
    id: 7,
    text: "On considère la formule \\(f(x) = 2x^{2} - 3x + 1\\). Pour <em>x</em> = −1, on obtient :",
    choices: [
      { label: "A", text: "<em>f</em>(−1) = 6" },
      { label: "B", text: "<em>f</em>(−1) = 0" },
      { label: "C", text: "<em>f</em>(−1) = −4" },
      { label: "D", text: "<em>f</em>(−1) = 4" }
    ],
    answer: "A",
    explanation: "\\(f(-1) = 2 \\times (-1)^{2} - 3 \\times (-1) + 1 = 2 + 3 + 1 = 6\\)."
  },
  {
    id: 8,
    text: "La formule de conversion Celsius → Fahrenheit est \\(F = 1{,}8C + 32\\). Pour <em>C</em> = 20 °C, on obtient :",
    choices: [
      { label: "A", text: "<em>F</em> = 52 °F" },
      { label: "B", text: "<em>F</em> = 36 °F" },
      { label: "C", text: "<em>F</em> = 68 °F" },
      { label: "D", text: "<em>F</em> = 56 °F" }
    ],
    answer: "C",
    explanation: "F = 1,8 × 20 + 32 = 36 + 32 = 68 °F."
  },
  {
    id: 9,
    text: "L'indice de masse corporelle est donné par \\(\\text{IMC} = \\frac{m}{t^{2}}\\) (<em>m</em> en kg, <em>t</em> en m). Pour <em>m</em> = 72 kg et <em>t</em> = 1,80 m, on obtient :",
    choices: [
      { label: "A", text: "IMC = 40" },
      { label: "B", text: "IMC ≈ 22,2" },
      { label: "C", text: "IMC = 20" },
      { label: "D", text: "IMC ≈ 25" }
    ],
    answer: "B",
    explanation: "IMC = 72 / (1,80)² = 72 / 3,24 ≈ 22,2."
  },
  {
    id: 10,
    text: "Le volume d'une sphère est donné par \\(V = \\frac{4}{3}\\pi r^{3}\\). Pour <em>r</em> = 3, la valeur exacte de <em>V</em> est :",
    choices: [
      { label: "A", text: "\\(36\\pi\\)" },
      { label: "B", text: "\\(12\\pi\\)" },
      { label: "C", text: "\\(108\\pi\\)" },
      { label: "D", text: "\\(27\\pi\\)" }
    ],
    answer: "A",
    explanation: "\\(V = \\frac{4}{3}\\pi \\times 3^{3} = \\frac{4}{3}\\pi \\times 27 = 36\\pi\\)."
  }
];
