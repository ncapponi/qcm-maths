// Catégorie 6 – Probabilités
// Sous-catégorie 6.6 – Distinguer P(A ∩ B), P_A(B) et P_B(A)
const qcmCategory = "Probabilités";
const qcmSubcategory = "Distinguer P(A ∩ B), P_A(B) et P_B(A)";
const questions = [
  {
    id: 1,
    text: "Dans un groupe de 100 personnes, 40 pratiquent la natation (N) et 30 pratiquent le vélo (V). Parmi les nageurs, 15 font aussi du vélo. Quelle est la valeur de \\(P(N \\cap V)\\) ?",
    choices: [
      { label: "A", text: "\\(\\frac{15}{40}\\)" },
      { label: "B", text: "\\(\\frac{15}{30}\\)" },
      { label: "C", text: "\\(\\frac{15}{100}\\)" },
      { label: "D", text: "\\(\\frac{30}{100}\\)" }
    ],
    answer: "C",
    explanation: "\\(P(N \\cap V)\\) est la probabilité d'appartenir à la fois à N et à V. Il y a 15 personnes sur 100 dans cette situation : \\(P(N \\cap V) = \\frac{15}{100}\\)."
  },
  {
    id: 2,
    text: "En reprenant la situation précédente (100 personnes, 40 nageurs, 15 font natation et vélo), quelle est la valeur de \\(P_N(V)\\) ?",
    choices: [
      { label: "A", text: "\\(\\frac{15}{100}\\)" },
      { label: "B", text: "\\(\\frac{15}{30}\\)" },
      { label: "C", text: "\\(\\frac{15}{40}\\)" },
      { label: "D", text: "\\(\\frac{40}{100}\\)" }
    ],
    answer: "C",
    explanation: "\\(P_N(V) = P(V|N)\\) est la probabilité qu'une personne fasse du vélo, <em>sachant</em> qu'elle fait de la natation. Parmi les 40 nageurs, 15 font aussi du vélo : \\(P_N(V) = \\frac{15}{40}\\)."
  },
  {
    id: 3,
    text: "On dispose de la formule \\(P(A \\cap B) = P(A) \\times P_A(B)\\). Si \\(P(A) = 0{,}5\\) et \\(P_A(B) = 0{,}4\\), quelle est la valeur de \\(P(A \\cap B)\\) ?",
    choices: [
      { label: "A", text: "0,04" },
      { label: "B", text: "0,20" },
      { label: "C", text: "0,40" },
      { label: "D", text: "0,50" }
    ],
    answer: "B",
    explanation: "\\(P(A \\cap B) = P(A) \\times P_A(B) = 0{,}5 \\times 0{,}4 = 0{,}20\\)."
  },
  {
    id: 4,
    text: "On sait que \\(P(A \\cap B) = 0{,}12\\) et \\(P(A) = 0{,}3\\). Quelle est la valeur de \\(P_A(B)\\) ?",
    choices: [
      { label: "A", text: "0,036" },
      { label: "B", text: "0,12" },
      { label: "C", text: "0,40" },
      { label: "D", text: "0,42" }
    ],
    answer: "C",
    explanation: "\\(P_A(B) = \\frac{P(A \\cap B)}{P(A)} = \\frac{0{,}12}{0{,}3} = 0{,}40\\)."
  },
  {
    id: 5,
    text: "Dans le tableau :<br><table class='qcm-table'><tr><th></th><th>B</th><th>\\(\\bar{B}\\)</th><th>Total</th></tr><tr><td>A</td><td>20</td><td>30</td><td>50</td></tr><tr><td>\\(\\bar{A}\\)</td><td>10</td><td>40</td><td>50</td></tr><tr><td>Total</td><td>30</td><td>70</td><td>100</td></tr></table>Quelle est la valeur de \\(P_B(A)\\) (probabilité de A sachant B) ?",
    choices: [
      { label: "A", text: "\\(\\frac{20}{100}\\)" },
      { label: "B", text: "\\(\\frac{20}{50}\\)" },
      { label: "C", text: "\\(\\frac{20}{30}\\)" },
      { label: "D", text: "\\(\\frac{30}{100}\\)" }
    ],
    answer: "C",
    explanation: "\\(P_B(A) = P(A|B) = \\frac{\\text{Card}(A \\cap B)}{\\text{Card}(B)} = \\frac{20}{30} = \\frac{2}{3}\\)."
  },
  {
    id: 6,
    text: "En reprenant le tableau précédent, laquelle de ces affirmations est correcte concernant \\(P_A(B)\\) ?",
    choices: [
      { label: "A", text: "\\(P_A(B) = \\frac{20}{30}\\)" },
      { label: "B", text: "\\(P_A(B) = \\frac{20}{50}\\)" },
      { label: "C", text: "\\(P_A(B) = \\frac{20}{100}\\)" },
      { label: "D", text: "\\(P_A(B) = \\frac{30}{100}\\)" }
    ],
    answer: "B",
    explanation: "\\(P_A(B) = P(B|A) = \\frac{\\text{Card}(A \\cap B)}{\\text{Card}(A)} = \\frac{20}{50} = \\frac{2}{5}\\). Les dénominateurs diffèrent pour \\(P_A(B)\\) et \\(P_B(A)\\)."
  },
  {
    id: 7,
    text: "Soit \\(P(A) = 0{,}6\\), \\(P(B) = 0{,}5\\) et \\(P(A \\cap B) = 0{,}3\\). Quelle est la valeur de \\(P_A(B)\\) ?",
    choices: [
      { label: "A", text: "0,3" },
      { label: "B", text: "0,5" },
      { label: "C", text: "0,6" },
      { label: "D", text: "0,18" }
    ],
    answer: "B",
    explanation: "\\(P_A(B) = \\frac{P(A \\cap B)}{P(A)} = \\frac{0{,}3}{0{,}6} = 0{,}5\\)."
  },
  {
    id: 8,
    text: "Avec les mêmes données (\\(P(A) = 0{,}6\\), \\(P(B) = 0{,}5\\), \\(P(A \\cap B) = 0{,}3\\)), quelle est la valeur de \\(P_B(A)\\) ?",
    choices: [
      { label: "A", text: "0,3" },
      { label: "B", text: "0,5" },
      { label: "C", text: "0,6" },
      { label: "D", text: "0,18" }
    ],
    answer: "C",
    explanation: "\\(P_B(A) = \\frac{P(A \\cap B)}{P(B)} = \\frac{0{,}3}{0{,}5} = 0{,}6\\). Remarque : \\(P_A(B) \\neq P_B(A)\\) en général."
  },
  {
    id: 9,
    text: "Parmi les égalités suivantes, laquelle est <em>toujours vraie</em> ?",
    choices: [
      { label: "A", text: "\\(P_A(B) = P_B(A)\\)" },
      { label: "B", text: "\\(P(A \\cap B) = P(A) + P(B)\\)" },
      { label: "C", text: "\\(P(A \\cap B) = P(A) \\times P_A(B)\\)" },
      { label: "D", text: "\\(P(A \\cap B) = P_A(B) - P(A)\\)" }
    ],
    answer: "C",
    explanation: "La formule des probabilités composées donne toujours \\(P(A \\cap B) = P(A) \\times P_A(B) = P(B) \\times P_B(A)\\). Les autres égalités sont fausses en général."
  },
  {
    id: 10,
    text: "On sait que \\(P(B) = 0{,}4\\) et \\(P_B(A) = 0{,}25\\). Quelle est la valeur de \\(P(A \\cap B)\\) ?",
    choices: [
      { label: "A", text: "0,10" },
      { label: "B", text: "0,25" },
      { label: "C", text: "0,40" },
      { label: "D", text: "0,65" }
    ],
    answer: "A",
    explanation: "\\(P(A \\cap B) = P(B) \\times P_B(A) = 0{,}4 \\times 0{,}25 = 0{,}10\\)."
  }
];
