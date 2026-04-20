// Catégorie 1 – Calcul numérique et algébrique
// Sous-catégorie 1.5 – Estimer un ordre de grandeur
const qcmCategory = "Calcul numérique et algébrique";
const qcmSubcategory = "Estimer un ordre de grandeur";
const questions = [
  {
    id: 1,
    text: "\\(10^{30} + 10^{-30}\\) est environ égal à :",
    choices: [
      { label: "A", text: "\\(10^{0}\\)" },
      { label: "B", text: "0" },
      { label: "C", text: "\\(10^{30}\\)" },
      { label: "D", text: "\\(20^{30}\\)" }
    ],
    answer: "C",
    explanation: "\\(10^{-30}\\) est un nombre extrêmement petit (quasi nul). Donc \\(10^{30} + 10^{-30} \\approx 10^{30}\\)."
  },
  {
    id: 2,
    text: "L'ordre de grandeur de \\(4\\,987 \\times 0{,}021\\) est :",
    choices: [
      { label: "A", text: "1" },
      { label: "B", text: "10" },
      { label: "C", text: "100" },
      { label: "D", text: "1 000" }
    ],
    answer: "C",
    explanation: "\\(4\\,987 \\approx 5\\,000\\) et \\(0{,}021 \\approx 0{,}02\\). Donc \\(5\\,000 \\times 0{,}02 = 100\\)."
  },
  {
    id: 3,
    text: "L'ordre de grandeur de \\(\\frac{612}{0{,}031}\\) est :",
    choices: [
      { label: "A", text: "200" },
      { label: "B", text: "2 000" },
      { label: "C", text: "20 000" },
      { label: "D", text: "200 000" }
    ],
    answer: "C",
    explanation: "\\(\\frac{612}{0{,}031} \\approx \\frac{600}{0{,}03} = \\frac{600}{3/100} = 600 \\times \\frac{100}{3} = 20\\,000\\)."
  },
  {
    id: 4,
    text: "L'ordre de grandeur du nombre d'habitants d'une ville de 78 542 habitants est :",
    choices: [
      { label: "A", text: "\\(10^{3}\\)" },
      { label: "B", text: "\\(10^{4}\\)" },
      { label: "C", text: "\\(10^{5}\\)" },
      { label: "D", text: "\\(10^{6}\\)" }
    ],
    answer: "C",
    explanation: "78 542 est plus proche de \\(10^5 = 100\\,000\\) que de \\(10^4 = 10\\,000\\). L'ordre de grandeur est \\(10^5\\)."
  },
  {
    id: 5,
    text: "L'ordre de grandeur de \\(3{,}14 \\times 10^{4} + 2{,}7 \\times 10^{2}\\) est :",
    choices: [
      { label: "A", text: "\\(10^{2}\\)" },
      { label: "B", text: "\\(10^{3}\\)" },
      { label: "C", text: "\\(10^{4}\\)" },
      { label: "D", text: "\\(10^{6}\\)" }
    ],
    answer: "C",
    explanation: "\\(3{,}14 \\times 10^{4} = 31\\,400\\) domine largement \\(2{,}7 \\times 10^{2} = 270\\). L'ordre de grandeur est \\(10^{4}\\)."
  },
  {
    id: 6,
    text: "On estime que la distance Terre–Lune est d'environ 384 400 km. L'ordre de grandeur de cette distance en mètres est :",
    choices: [
      { label: "A", text: "\\(10^{7}\\) m" },
      { label: "B", text: "\\(10^{8}\\) m" },
      { label: "C", text: "\\(10^{9}\\) m" },
      { label: "D", text: "\\(10^{10}\\) m" }
    ],
    answer: "C",
    explanation: "384 400 km = 384 400 000 m \\(\\approx 4 \\times 10^{8}\\) m. L'ordre de grandeur est \\(10^{9}\\) (car \\(4 \\times 10^{8}\\) est plus proche de \\(10^{9}\\) que de \\(10^{8}\\))."
  },
  {
    id: 7,
    text: "L'ordre de grandeur de \\(\\frac{0{,}0048}{0{,}000 015}\\) est :",
    choices: [
      { label: "A", text: "\\(10^{1}\\)" },
      { label: "B", text: "\\(10^{2}\\)" },
      { label: "C", text: "\\(10^{3}\\)" },
      { label: "D", text: "\\(10^{4}\\)" }
    ],
    answer: "B",
    explanation: "\\(\\frac{0{,}0048}{0{,}000\\,015} \\approx \\frac{5 \\times 10^{-3}}{1{,}5 \\times 10^{-5}} \\approx 3{,}3 \\times 10^{2}\\). L'ordre de grandeur est \\(10^{2}\\)."
  },
  {
    id: 8,
    text: "L'ordre de grandeur de \\(\\sqrt{90}\\) est :",
    choices: [
      { label: "A", text: "3" },
      { label: "B", text: "10" },
      { label: "C", text: "30" },
      { label: "D", text: "45" }
    ],
    answer: "B",
    explanation: "\\(9^2 = 81\\) et \\(10^2 = 100\\), donc \\(\\sqrt{90}\\) est entre 9 et 10. L'ordre de grandeur est 10."
  },
  {
    id: 9,
    text: "L'ordre de grandeur de \\(198 \\times 52\\) est :",
    choices: [
      { label: "A", text: "1 000" },
      { label: "B", text: "10 000" },
      { label: "C", text: "100 000" },
      { label: "D", text: "1 000 000" }
    ],
    answer: "B",
    explanation: "\\(198 \\approx 200\\) et \\(52 \\approx 50\\), donc \\(200 \\times 50 = 10\\,000\\)."
  },
  {
    id: 10,
    text: "Un cheveu a un diamètre d'environ 70 µm. L'ordre de grandeur de ce diamètre en mètres est :",
    choices: [
      { label: "A", text: "\\(10^{-3}\\) m" },
      { label: "B", text: "\\(10^{-4}\\) m" },
      { label: "C", text: "\\(10^{-5}\\) m" },
      { label: "D", text: "\\(10^{-6}\\) m" }
    ],
    answer: "B",
    explanation: "70 µm = \\(70 \\times 10^{-6}\\) m = \\(7 \\times 10^{-5}\\) m. L'ordre de grandeur est \\(10^{-4}\\) (car \\(7 \\times 10^{-5}\\) est plus proche de \\(10^{-4}\\) que de \\(10^{-5}\\))."
  }
];
