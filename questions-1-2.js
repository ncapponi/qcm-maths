// Catégorie 1 – Calcul numérique et algébrique
// Sous-catégorie 1.2 – Effectuer des opérations et comparaisons entre fractions simples
const qcmCategory = "Calcul numérique et algébrique";
const qcmSubcategory = "Effectuer des opérations et comparaisons entre fractions simples";
const questions = [
  {
    id: 1,
    text: "On considère <em>A</em> = 2 ÷ (1 − \\(\\frac{2}{3}\\)). On a :",
    choices: [
      { label: "A", text: "<em>A</em> = −1" },
      { label: "B", text: "<em>A</em> = \\(\\frac{2}{3}\\)" },
      { label: "C", text: "<em>A</em> = 6" },
      { label: "D", text: "<em>A</em> = 9" }
    ],
    answer: "C",
    explanation: "1 − 2/3 = 1/3, donc A = 2 ÷ (1/3) = 2 × 3 = 6."
  },
  {
    id: 2,
    text: "On considère <em>A</em> = \\(\\frac{1}{100}\\) + \\(\\frac{1}{1000}\\). On a :",
    choices: [
      { label: "A", text: "<em>A</em> = 100,001" },
      { label: "B", text: "<em>A</em> = \\(\\frac{2}{100\,000}\\)" },
      { label: "C", text: "<em>A</em> = 0,11" },
      { label: "D", text: "<em>A</em> = 0,011" }
    ],
    answer: "D",
    explanation: "1/100 = 0,010 et 1/1000 = 0,001, donc A = 0,010 + 0,001 = 0,011."
  },
  {
    id: 3,
    text: "On considère <em>A</em> = \\(\\frac{2}{3}\\) + \\(\\frac{3}{4}\\). On a :",
    choices: [
      { label: "A", text: "<em>A</em> = \\(\\frac{5}{7}\\)" },
      { label: "B", text: "<em>A</em> = \\(\\frac{17}{12}\\)" },
      { label: "C", text: "<em>A</em> = \\(\\frac{5}{12}\\)" },
      { label: "D", text: "<em>A</em> = \\(\\frac{6}{12}\\)" }
    ],
    answer: "B",
    explanation: "\\(\\frac{2}{3} + \\frac{3}{4} = \\frac{8}{12} + \\frac{9}{12} = \\frac{17}{12}\\)."
  },
  {
    id: 4,
    text: "On considère <em>A</em> = \\(\\frac{5}{6}\\) − \\(\\frac{1}{4}\\). On a :",
    choices: [
      { label: "A", text: "<em>A</em> = \\(\\frac{4}{2}\\)" },
      { label: "B", text: "<em>A</em> = \\(\\frac{7}{12}\\)" },
      { label: "C", text: "<em>A</em> = \\(\\frac{4}{6}\\)" },
      { label: "D", text: "<em>A</em> = \\(\\frac{1}{2}\\)" }
    ],
    answer: "B",
    explanation: "\\(\\frac{5}{6} - \\frac{1}{4} = \\frac{10}{12} - \\frac{3}{12} = \\frac{7}{12}\\)."
  },
  {
    id: 5,
    text: "On considère <em>A</em> = \\(\\frac{3}{5}\\) × \\(\\frac{10}{9}\\). On a :",
    choices: [
      { label: "A", text: "<em>A</em> = \\(\\frac{30}{45}\\)" },
      { label: "B", text: "<em>A</em> = \\(\\frac{2}{3}\\)" },
      { label: "C", text: "<em>A</em> = \\(\\frac{13}{14}\\)" },
      { label: "D", text: "<em>A</em> = \\(\\frac{1}{3}\\)" }
    ],
    answer: "B",
    explanation: "\\(\\frac{3}{5} \\times \\frac{10}{9} = \\frac{30}{45} = \\frac{2}{3}\\)."
  },
  {
    id: 6,
    text: "On considère <em>A</em> = \\(\\frac{7}{3}\\) ÷ \\(\\frac{14}{9}\\). On a :",
    choices: [
      { label: "A", text: "<em>A</em> = \\(\\frac{3}{2}\\)" },
      { label: "B", text: "<em>A</em> = \\(\\frac{98}{27}\\)" },
      { label: "C", text: "<em>A</em> = \\(\\frac{2}{3}\\)" },
      { label: "D", text: "<em>A</em> = \\(\\frac{7}{6}\\)" }
    ],
    answer: "A",
    explanation: "\\(\\frac{7}{3} \\div \\frac{14}{9} = \\frac{7}{3} \\times \\frac{9}{14} = \\frac{63}{42} = \\frac{3}{2}\\)."
  },
  {
    id: 7,
    text: "Parmi ces fractions, laquelle est la plus grande ?",
    choices: [
      { label: "A", text: "\\(\\frac{3}{5}\\)" },
      { label: "B", text: "\\(\\frac{5}{8}\\)" },
      { label: "C", text: "\\(\\frac{7}{11}\\)" },
      { label: "D", text: "\\(\\frac{2}{3}\\)" }
    ],
    answer: "D",
    explanation: "On réduit au même dénominateur (ou on passe en décimal) : 3/5 = 0,6 ; 5/8 = 0,625 ; 7/11 ≈ 0,636 ; 2/3 ≈ 0,667. La plus grande est \\(\\frac{2}{3}\\)."
  },
  {
    id: 8,
    text: "On considère <em>A</em> = \\(\\frac{1}{2}\\) + \\(\\frac{1}{3}\\) + \\(\\frac{1}{6}\\). On a :",
    choices: [
      { label: "A", text: "<em>A</em> = \\(\\frac{3}{11}\\)" },
      { label: "B", text: "<em>A</em> = \\(\\frac{1}{2}\\)" },
      { label: "C", text: "<em>A</em> = 1" },
      { label: "D", text: "<em>A</em> = \\(\\frac{5}{6}\\)" }
    ],
    answer: "C",
    explanation: "\\(\\frac{1}{2} + \\frac{1}{3} + \\frac{1}{6} = \\frac{3}{6} + \\frac{2}{6} + \\frac{1}{6} = \\frac{6}{6} = 1\\)."
  },
  {
    id: 9,
    text: "On considère <em>A</em> = \\(\\frac{4}{5}\\) − \\(\\frac{2}{5}\\) × \\(\\frac{1}{3}\\). On a :",
    choices: [
      { label: "A", text: "<em>A</em> = \\(\\frac{2}{15}\\)" },
      { label: "B", text: "<em>A</em> = \\(\\frac{10}{15}\\)" },
      { label: "C", text: "<em>A</em> = \\(\\frac{2}{5}\\)" },
      { label: "D", text: "<em>A</em> = \\(\\frac{14}{15}\\)" }
    ],
    answer: "B",
    explanation: "On effectue d'abord la multiplication : \\(\\frac{2}{5} \\times \\frac{1}{3} = \\frac{2}{15}\\). Puis \\(\\frac{4}{5} - \\frac{2}{15} = \\frac{12}{15} - \\frac{2}{15} = \\frac{10}{15} = \\frac{2}{3}\\)."
  },
  {
    id: 10,
    text: "Quelle est l'écriture simplifiée de \\(\\frac{36}{48}\\) ?",
    choices: [
      { label: "A", text: "\\(\\frac{9}{16}\\)" },
      { label: "B", text: "\\(\\frac{6}{8}\\)" },
      { label: "C", text: "\\(\\frac{3}{4}\\)" },
      { label: "D", text: "\\(\\frac{12}{16}\\)" }
    ],
    answer: "C",
    explanation: "PGCD(36, 48) = 12. Donc \\(\\frac{36}{48} = \\frac{36 \\div 12}{48 \\div 12} = \\frac{3}{4}\\)."
  }
];
