// Catégorie 4 – Fonctions et représentations
// Sous-catégorie 4.8 – Déterminer le coefficient directeur d'une droite à partir de deux points
const qcmCategory = "Fonctions et représentations";
const qcmSubcategory = "Déterminer le coefficient directeur d'une droite à partir de deux points";
const questions = [
  {
    id: 1,
    text: "Le coefficient directeur de la droite passant par A(1 ; 3) et B(4 ; 9) est :",
    choices: [
      { label: "A", text: "2" },
      { label: "B", text: "3" },
      { label: "C", text: "6" },
      { label: "D", text: "\\(\\frac{1}{2}\\)" }
    ],
    answer: "A",
    explanation: "\\(m = \\frac{9-3}{4-1} = \\frac{6}{3} = 2\\)."
  },
  {
    id: 2,
    text: "Le coefficient directeur de la droite passant par A(−2 ; 5) et B(3 ; 0) est :",
    choices: [
      { label: "A", text: "1" },
      { label: "B", text: "−1" },
      { label: "C", text: "5" },
      { label: "D", text: "−5" }
    ],
    answer: "B",
    explanation: "\\(m = \\frac{0-5}{3-(-2)} = \\frac{-5}{5} = -1\\)."
  },
  {
    id: 3,
    text: "Le coefficient directeur de la droite passant par A(0 ; 4) et B(2 ; 4) est :",
    choices: [
      { label: "A", text: "0" },
      { label: "B", text: "2" },
      { label: "C", text: "4" },
      { label: "D", text: "indéfini" }
    ],
    answer: "A",
    explanation: "\\(m = \\frac{4-4}{2-0} = \\frac{0}{2} = 0\\). La droite est horizontale."
  },
  {
    id: 4,
    text: "Le coefficient directeur de la droite passant par A(1 ; −2) et B(3 ; 4) est :",
    choices: [
      { label: "A", text: "1" },
      { label: "B", text: "2" },
      { label: "C", text: "3" },
      { label: "D", text: "6" }
    ],
    answer: "C",
    explanation: "\\(m = \\frac{4-(-2)}{3-1} = \\frac{6}{2} = 3\\)."
  },
  {
    id: 5,
    text: "Le coefficient directeur de la droite passant par A(−1 ; −3) et B(2 ; 6) est :",
    choices: [
      { label: "A", text: "−3" },
      { label: "B", text: "3" },
      { label: "C", text: "9" },
      { label: "D", text: "\\(\\frac{1}{3}\\)" }
    ],
    answer: "B",
    explanation: "\\(m = \\frac{6-(-3)}{2-(-1)} = \\frac{9}{3} = 3\\)."
  },
  {
    id: 6,
    text: "Le coefficient directeur de la droite passant par A(2 ; 7) et B(5 ; 1) est :",
    choices: [
      { label: "A", text: "2" },
      { label: "B", text: "−2" },
      { label: "C", text: "\\(\\frac{1}{2}\\)" },
      { label: "D", text: "\\(-\\frac{1}{2}\\)" }
    ],
    answer: "B",
    explanation: "\\(m = \\frac{1-7}{5-2} = \\frac{-6}{3} = -2\\)."
  },
  {
    id: 7,
    text: "Le coefficient directeur de la droite passant par A(0 ; 0) et B(5 ; 3) est :",
    choices: [
      { label: "A", text: "\\(\\frac{3}{5}\\)" },
      { label: "B", text: "\\(\\frac{5}{3}\\)" },
      { label: "C", text: "3" },
      { label: "D", text: "5" }
    ],
    answer: "A",
    explanation: "\\(m = \\frac{3-0}{5-0} = \\frac{3}{5}\\)."
  },
  {
    id: 8,
    text: "Le coefficient directeur de la droite passant par A(−4 ; 2) et B(−1 ; −7) est :",
    choices: [
      { label: "A", text: "3" },
      { label: "B", text: "−3" },
      { label: "C", text: "\\(\\frac{1}{3}\\)" },
      { label: "D", text: "\\(-\\frac{1}{3}\\)" }
    ],
    answer: "B",
    explanation: "\\(m = \\frac{-7-2}{-1-(-4)} = \\frac{-9}{3} = -3\\)."
  },
  {
    id: 9,
    text: "La droite passant par A(1 ; 2) et B(4 ; 2) a un coefficient directeur de :",
    choices: [
      { label: "A", text: "0" },
      { label: "B", text: "2" },
      { label: "C", text: "1" },
      { label: "D", text: "il n'existe pas" }
    ],
    answer: "A",
    explanation: "\\(m = \\frac{2-2}{4-1} = \\frac{0}{3} = 0\\). La droite est horizontale, son coefficient directeur est 0."
  },
  {
    id: 10,
    text: "Le coefficient directeur de la droite passant par A(−3 ; 1) et B(1 ; 9) est :",
    choices: [
      { label: "A", text: "\\(\\frac{1}{2}\\)" },
      { label: "B", text: "4" },
      { label: "C", text: "2" },
      { label: "D", text: "8" }
    ],
    answer: "C",
    explanation: "\\(m = \\frac{9-1}{1-(-3)} = \\frac{8}{4} = 2\\)."
  }
];
