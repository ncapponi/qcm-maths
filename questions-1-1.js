// Catégorie 1 – Calcul numérique et algébrique
// Sous-catégorie 1.1 – Comparer deux nombres directement ou par calcul
const qcmCategory = "Calcul numérique et algébrique";
const qcmSubcategory = "Comparer deux nombres directement ou par calcul";
const questions = [
  {
    id: 1,
    text: "Quel est le plus grand des deux nombres : 3,14 et \\(\\frac{22}{7}\\) ?",
    choices: [
      { label: "A", text: "3,14" },
      { label: "B", text: "\\(\\frac{22}{7}\\)" },
      { label: "C", text: "Ils sont égaux" },
      { label: "D", text: "On ne peut pas les comparer" }
    ],
    answer: "B",
    explanation: "\\(\\frac{22}{7}\\) ≈ 3,1428… qui est supérieur à 3,14. Donc \\(\\frac{22}{7}\\) est le plus grand."
  },
  {
    id: 2,
    text: "On compare les nombres <em>a</em> = 5,2 et <em>b</em> = \\(\\frac{26}{5}\\). Quelle affirmation est correcte ?",
    choices: [
      { label: "A", text: "<em>a</em> &lt; <em>b</em>" },
      { label: "B", text: "<em>a</em> &gt; <em>b</em>" },
      { label: "C", text: "<em>a</em> = <em>b</em>" },
      { label: "D", text: "<em>a</em> ≈ <em>b</em> mais ils ne sont pas égaux" }
    ],
    answer: "C",
    explanation: "\\(\\frac{26}{5}\\) = 26 ÷ 5 = 5,2. Donc <em>a</em> = <em>b</em>."
  },
  {
    id: 3,
    text: "On pose <em>a</em> = √2 et <em>b</em> = 1,5. On calcule <em>a</em> − <em>b</em>. Que peut-on en conclure ?",
    choices: [
      { label: "A", text: "<em>a</em> &gt; <em>b</em>" },
      { label: "B", text: "<em>a</em> &lt; <em>b</em>" },
      { label: "C", text: "<em>a</em> = <em>b</em>" },
      { label: "D", text: "On ne peut pas conclure" }
    ],
    answer: "B",
    explanation: "√2 ≈ 1,414. Donc <em>a</em> − <em>b</em> ≈ 1,414 − 1,5 = −0,086 &lt; 0, ce qui signifie <em>a</em> &lt; <em>b</em>."
  },
  {
    id: 4,
    text: "Soient <em>a</em> = \\(\\frac{3}{7}\\) et <em>b</em> = \\(\\frac{5}{12}\\). Pour les comparer, on calcule leur différence. Quel est le signe de <em>a</em> − <em>b</em> ?",
    choices: [
      { label: "A", text: "Positif" },
      { label: "B", text: "Négatif" },
      { label: "C", text: "Nul" },
      { label: "D", text: "On ne peut pas déterminer le signe" }
    ],
    answer: "A",
    explanation: "<em>a</em> − <em>b</em> = \\(\\frac{3}{7}\\) − \\(\\frac{5}{12}\\) = \\(\\frac{36}{84}\\) − \\(\\frac{35}{84}\\) = \\(\\frac{1}{84}\\) &gt; 0. Donc <em>a</em> &gt; <em>b</em>."
  },
  {
    id: 5,
    text: "On considère deux nombres strictement positifs : <em>a</em> = 0,75 et <em>b</em> = 0,8. Que vaut le quotient \\(\\frac{a}{b}\\) ?",
    choices: [
      { label: "A", text: "0,9375" },
      { label: "B", text: "1" },
      { label: "C", text: "1,066…" },
      { label: "D", text: "0,6" }
    ],
    answer: "A",
    explanation: "\\(\\frac{a}{b}\\) = 0,75 ÷ 0,8 = 0,9375 &lt; 1, ce qui confirme que <em>a</em> &lt; <em>b</em>."
  },
  {
    id: 6,
    text: "On veut comparer \\(\\frac{4}{9}\\) et \\(\\frac{5}{11}\\) en comparant leurs quotients à 1. Quelle est la bonne conclusion ?",
    choices: [
      { label: "A", text: "\\(\\frac{4}{9}\\) &gt; \\(\\frac{5}{11}\\)" },
      { label: "B", text: "\\(\\frac{4}{9}\\) &lt; \\(\\frac{5}{11}\\)" },
      { label: "C", text: "\\(\\frac{4}{9}\\) = \\(\\frac{5}{11}\\)" },
      { label: "D", text: "La méthode du quotient ne fonctionne pas ici" }
    ],
    answer: "B",
    explanation: "\\(\\frac{4}{9}\\) ≈ 0,444 et \\(\\frac{5}{11}\\) ≈ 0,454. Leur quotient : (\\(\\frac{4}{9}\\)) ÷ (\\(\\frac{5}{11}\\)) = \\(\\frac{44}{45}\\) &lt; 1, donc \\(\\frac{4}{9}\\) &lt; \\(\\frac{5}{11}\\)."
  },
  {
    id: 7,
    text: "Parmi les nombres suivants, lequel est le plus grand ?",
    choices: [
      { label: "A", text: "\\(\\frac{2}{3}\\)" },
      { label: "B", text: "0,67" },
      { label: "C", text: "\\(\\frac{3}{4}\\)" },
      { label: "D", text: "0,7" }
    ],
    answer: "C",
    explanation: "\\(\\frac{2}{3}\\) ≈ 0,666 ; 0,67 ; 0,7 ; \\(\\frac{3}{4}\\) = 0,75. Le plus grand est \\(\\frac{3}{4}\\)."
  },
  {
    id: 8,
    text: "On compare <em>a</em> = −3,5 et <em>b</em> = −\\(\\frac{10}{3}\\). Quelle affirmation est vraie ?",
    choices: [
      { label: "A", text: "<em>a</em> &gt; <em>b</em>" },
      { label: "B", text: "<em>a</em> &lt; <em>b</em>" },
      { label: "C", text: "<em>a</em> = <em>b</em>" },
      { label: "D", text: "La comparaison n'est pas possible avec des négatifs" }
    ],
    answer: "B",
    explanation: "<em>b</em> = −\\(\\frac{10}{3}\\) ≈ −3,333. On a <em>a</em> − <em>b</em> = −3,5 − (−3,333) = −0,166 &lt; 0, donc <em>a</em> &lt; <em>b</em>."
  },
  {
    id: 9,
    text: "Soient <em>a</em> = √5 et <em>b</em> = \\(\\frac{9}{4}\\). On veut comparer <em>a</em> et <em>b</em>. Quelle méthode est la plus adaptée ?",
    choices: [
      { label: "A", text: "Comparer <em>a</em>² et <em>b</em>²" },
      { label: "B", text: "Calculer <em>a</em> − <em>b</em> directement" },
      { label: "C", text: "Calculer <em>a</em> ÷ <em>b</em>" },
      { label: "D", text: "On ne peut pas comparer un irrationnel et un rationnel" }
    ],
    answer: "A",
    explanation: "<em>a</em> et <em>b</em> sont positifs, on peut comparer leurs carrés : <em>a</em>² = 5 et <em>b</em>² = \\(\\frac{81}{16}\\) = 5,0625. Comme 5 &lt; 5,0625, on a <em>a</em> &lt; <em>b</em>."
  },
  {
    id: 10,
    text: "On considère <em>a</em> = 1 + √3 et <em>b</em> = √7. Quel est l'ordre de ces deux nombres ?",
    choices: [
      { label: "A", text: "<em>a</em> &lt; <em>b</em>" },
      { label: "B", text: "<em>a</em> &gt; <em>b</em>" },
      { label: "C", text: "<em>a</em> = <em>b</em>" },
      { label: "D", text: "On ne peut pas les comparer sans calculatrice" }
    ],
    answer: "B",
    explanation: "<em>a</em> = 1 + √3 ≈ 1 + 1,732 = 2,732 et <em>b</em> = √7 ≈ 2,646. On a <em>a</em> &gt; <em>b</em>. On peut aussi comparer <em>a</em>² = 4 + 2√3 ≈ 7,464 et <em>b</em>² = 7, donc <em>a</em>² &gt; <em>b</em>² et <em>a</em> &gt; <em>b</em>."
  },
  {
    id: 11,
    text: "Voici quatre planètes et leur masse :<br><br><table class='qcm-table'><tr><th>Planète</th><th>Masse</th></tr><tr><td>Terre</td><td>\\(5\\,973 \\times 10^{21}\\) kg</td></tr><tr><td>Mercure</td><td>\\(33{,}02 \\times 10^{22}\\) kg</td></tr><tr><td>Vénus</td><td>\\(48\\,685 \\times 10^{20}\\) kg</td></tr><tr><td>Mars</td><td>\\(6{,}4185 \\times 10^{23}\\) kg</td></tr></table><br>La planète dont la masse est la plus importante est :",
    choices: [
      { label: "A", text: "Terre" },
      { label: "B", text: "Mercure" },
      { label: "C", text: "Vénus" },
      { label: "D", text: "Mars" }
    ],
    answer: "A",
    explanation: "En mettant tout en puissance de \\(10^{24}\\) : Terre ≈ \\(5{,}973 \\times 10^{24}\\) kg, Vénus ≈ \\(4{,}87 \\times 10^{24}\\) kg, Mars ≈ \\(0{,}64 \\times 10^{24}\\) kg, Mercure ≈ \\(0{,}33 \\times 10^{24}\\) kg. La Terre a la masse la plus importante."
  }
];
