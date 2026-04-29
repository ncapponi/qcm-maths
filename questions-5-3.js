// Catégorie 5 – Statistiques
// Sous-catégorie 5.3 – Comparer des distributions à l'aide de boîtes à moustaches
const qcmCategory = "Statistiques";
const qcmSubcategory = "Comparer des distributions à l'aide de boîtes à moustaches";
const questions = [
  {
    id: 1,
    text: "Voici la boîte à moustaches d'une série : Min = 2, \\(Q_1 = 5\\), Me = 8, \\(Q_3 = 12\\), Max = 18. L'écart interquartile est :",
    choices: [
      { label: "A", text: "3" },
      { label: "B", text: "7" },
      { label: "C", text: "10" },
      { label: "D", text: "16" }
    ],
    answer: "B",
    explanation: "L'écart interquartile est \\(Q_3 - Q_1 = 12 - 5 = 7\\)."
  },
  {
    id: 2,
    text: "On compare deux boîtes à moustaches. La série A a une médiane de 15 et la série B une médiane de 12. On peut dire que :",
    choices: [
      { label: "A", text: "toutes les valeurs de A sont supérieures à celles de B" },
      { label: "B", text: "la moitié des valeurs de A est au-dessus de 15" },
      { label: "C", text: "la moyenne de A vaut 15" },
      { label: "D", text: "A a plus de valeurs que B" }
    ],
    answer: "B",
    explanation: "La médiane sépare la série en deux moitiés égales : 50 % des valeurs sont au-dessus et 50 % en dessous."
  },
  {
    id: 3,
    text: "La boîte à moustaches de la série C a un écart interquartile de 4 et celle de la série D un écart interquartile de 12. Quelle série est la plus dispersée autour de la médiane ?",
    choices: [
      { label: "A", text: "La série C" },
      { label: "B", text: "La série D" },
      { label: "C", text: "On ne peut pas savoir" },
      { label: "D", text: "Les deux séries ont la même dispersion" }
    ],
    answer: "B",
    explanation: "Plus l'écart interquartile est grand, plus les valeurs centrales (50 % des données) sont dispersées. Ici D est plus dispersée."
  },
  {
    id: 4,
    text: "Sur un diagramme en boîte, on lit : Min = 0, \\(Q_1 = 4\\), Me = 7, \\(Q_3 = 10\\), Max = 20. L'étendue de la série est :",
    choices: [
      { label: "A", text: "6" },
      { label: "B", text: "10" },
      { label: "C", text: "16" },
      { label: "D", text: "20" }
    ],
    answer: "D",
    explanation: "L'étendue est Max − Min = 20 − 0 = 20."
  },
  {
    id: 5,
    text: "On compare deux diagrammes en boîte. La boîte de la série E est entièrement à droite de la boîte de la série F. On peut affirmer que :",
    choices: [
      { label: "A", text: "la moyenne de E est supérieure à celle de F" },
      { label: "B", text: "au moins 75 % des valeurs de E sont supérieures à \\(Q_1\\) de E" },
      { label: "C", text: "la médiane de E est supérieure à la médiane de F" },
      { label: "D", text: "toutes les valeurs de E sont le double de celles de F" }
    ],
    answer: "C",
    explanation: "Si la boîte de E est entièrement à droite de celle de F, tous les indicateurs de E (dont la médiane) sont supérieurs à ceux de F."
  },
  {
    id: 6,
    text: "Une boîte à moustaches est symétrique par rapport à la médiane. Cela signifie que :",
    choices: [
      { label: "A", text: "la moyenne est égale à la médiane" },
      { label: "B", text: "\\(Q_3 - \\text{Me} = \\text{Me} - Q_1\\)" },
      { label: "C", text: "toutes les valeurs sont identiques" },
      { label: "D", text: "l'étendue est nulle" }
    ],
    answer: "B",
    explanation: "La symétrie de la boîte signifie que la médiane est centrée entre \\(Q_1\\) et \\(Q_3\\), soit \\(Q_3 - \\text{Me} = \\text{Me} - Q_1\\)."
  },
  {
    id: 7,
    text: "La série G a la boîte à moustaches suivante : Min = 10, \\(Q_1 = 12\\), Me = 14, \\(Q_3 = 16\\), Max = 25. La « moustache droite » (de \\(Q_3\\) à Max) est plus longue que la « moustache gauche ». Cela indique :",
    choices: [
      { label: "A", text: "une distribution symétrique" },
      { label: "B", text: "une asymétrie vers les grandes valeurs" },
      { label: "C", text: "que la médiane est mal calculée" },
      { label: "D", text: "que l'étendue est trop petite" }
    ],
    answer: "B",
    explanation: "Une moustache droite plus longue indique que les valeurs extrêmes hautes sont plus éloignées, ce qui traduit une asymétrie vers les grandes valeurs."
  },
  {
    id: 8,
    text: "Deux séries ont la même médiane mais la série H a un écart interquartile de 2 et la série I un écart interquartile de 10. Quelle affirmation est correcte ?",
    choices: [
      { label: "A", text: "La série H est plus homogène que la série I" },
      { label: "B", text: "La série I est plus homogène que la série H" },
      { label: "C", text: "Les deux séries sont identiques" },
      { label: "D", text: "On ne peut rien conclure" }
    ],
    answer: "A",
    explanation: "Un écart interquartile plus petit signifie que les 50 % centraux des données sont plus concentrés : la série H est plus homogène."
  },
  {
    id: 9,
    text: "Sur un diagramme en boîte, quelle proportion des données se trouve entre \\(Q_1\\) et \\(Q_3\\) ?",
    choices: [
      { label: "A", text: "25 %" },
      { label: "B", text: "50 %" },
      { label: "C", text: "75 %" },
      { label: "D", text: "100 %" }
    ],
    answer: "B",
    explanation: "Par définition, 50 % des données se trouvent entre le premier quartile \\(Q_1\\) et le troisième quartile \\(Q_3\\)."
  },
  {
    id: 10,
    text: "On compare les résultats de deux classes à un examen à l'aide de boîtes à moustaches. La classe A a : \\(Q_1 = 8\\), Me = 12, \\(Q_3 = 15\\). La classe B a : \\(Q_1 = 10\\), Me = 11, \\(Q_3 = 13\\). Quelle classe a les résultats les plus homogènes ?",
    choices: [
      { label: "A", text: "La classe A" },
      { label: "B", text: "La classe B" },
      { label: "C", text: "Les deux classes ont la même homogénéité" },
      { label: "D", text: "On ne peut pas comparer" }
    ],
    answer: "B",
    explanation: "L'écart interquartile de la classe A est \\(15 - 8 = 7\\) et celui de la classe B est \\(13 - 10 = 3\\). La classe B, avec un écart interquartile plus petit, est plus homogène."
  }
];
