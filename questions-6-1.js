// Catégorie 6 – Probabilités
// Sous-catégorie 6.1 – Savoir qu'une probabilité est un nombre entre 0 et 1
const qcmCategory = "Probabilités";
const qcmSubcategory = "Savoir qu'une probabilité est un nombre entre 0 et 1";
const questions = [
  {
    id: 1,
    text: "Parmi les valeurs suivantes, laquelle <strong>peut</strong> être une probabilité ?",
    choices: [
      { label: "A", text: "−0,3" },
      { label: "B", text: "1,2" },
      { label: "C", text: "0,75" },
      { label: "D", text: "\\(\\frac{5}{4}\\)" }
    ],
    answer: "C",
    explanation: "Une probabilité est toujours comprise entre 0 et 1 inclus. Seul 0,75 appartient à [0 ; 1]."
  },
  {
    id: 2,
    text: "L'événement « il est certain que cet événement se produise » a pour probabilité :",
    choices: [
      { label: "A", text: "0" },
      { label: "B", text: "0,5" },
      { label: "C", text: "1" },
      { label: "D", text: "100" }
    ],
    answer: "C",
    explanation: "Un événement certain a une probabilité égale à 1."
  },
  {
    id: 3,
    text: "L'événement « il est impossible que cet événement se produise » a pour probabilité :",
    choices: [
      { label: "A", text: "−1" },
      { label: "B", text: "0" },
      { label: "C", text: "0,5" },
      { label: "D", text: "1" }
    ],
    answer: "B",
    explanation: "Un événement impossible a une probabilité égale à 0."
  },
  {
    id: 4,
    text: "Parmi les affirmations suivantes, laquelle est <em>vraie</em> ?",
    choices: [
      { label: "A", text: "Une probabilité peut être supérieure à 1." },
      { label: "B", text: "Une probabilité peut être négative." },
      { label: "C", text: "Une probabilité est toujours comprise entre 0 et 1." },
      { label: "D", text: "Une probabilité peut valoir 2." }
    ],
    answer: "C",
    explanation: "Par définition, toute probabilité \\(p\\) vérifie \\(0 \\leq p \\leq 1\\)."
  },
  {
    id: 5,
    text: "On attribue à un événement la valeur \\(p = 1{,}05\\). Que peut-on dire de cette valeur ?",
    choices: [
      { label: "A", text: "C'est une probabilité valide car elle est proche de 1." },
      { label: "B", text: "C'est une probabilité valide car elle est positive." },
      { label: "C", text: "Ce n'est pas une probabilité valide car elle est supérieure à 1." },
      { label: "D", text: "Ce n'est pas une probabilité valide car elle est inférieure à 2." }
    ],
    answer: "C",
    explanation: "Une probabilité est obligatoirement un nombre entre 0 et 1 inclus. La valeur 1,05 est supérieure à 1, donc elle ne peut pas être une probabilité."
  },
  {
    id: 6,
    text: "Parmi les valeurs suivantes, lesquelles sont des probabilités valides ? \\(0\\) ; \\(1\\) ; \\(−0{,}1\\) ; \\(0{,}5\\) ; \\(1{,}5\\)",
    choices: [
      { label: "A", text: "0 ; 1 seulement" },
      { label: "B", text: "0 ; 0,5 ; 1" },
      { label: "C", text: "0 ; 0,5 ; 1 ; 1,5" },
      { label: "D", text: "Toutes les valeurs" }
    ],
    answer: "B",
    explanation: "Les probabilités appartiennent à [0 ; 1]. Donc 0, 0,5 et 1 sont valides. −0,1 est négatif et 1,5 est supérieur à 1, ce sont des valeurs exclues."
  },
  {
    id: 7,
    text: "On dit qu'un événement est « équitable » lorsque ses chances de se produire ou non sont identiques. Sa probabilité est :",
    choices: [
      { label: "A", text: "0" },
      { label: "B", text: "0,25" },
      { label: "C", text: "0,5" },
      { label: "D", text: "1" }
    ],
    answer: "C",
    explanation: "Si un événement a autant de chances de se produire que de ne pas se produire, sa probabilité est \\(\\frac{1}{2} = 0{,}5\\)."
  },
  {
    id: 8,
    text: "Un joueur dit : « La probabilité que je gagne est de 120 %. » Cette affirmation est :",
    choices: [
      { label: "A", text: "Vraie, car il est très confiant." },
      { label: "B", text: "Fausse, car une probabilité ne peut pas dépasser 1 (100 %)." },
      { label: "C", text: "Vraie, car 120 % est un pourcentage valide." },
      { label: "D", text: "Fausse, car les probabilités ne s'expriment jamais en pourcentages." }
    ],
    answer: "B",
    explanation: "Une probabilité est un nombre entre 0 et 1 inclus. Exprimée en pourcentage, elle est entre 0 % et 100 %. Une valeur de 120 % est impossible."
  },
  {
    id: 9,
    text: "Soit \\(p\\) la probabilité d'un événement \\(A\\). Quelle inégalité est toujours vraie ?",
    choices: [
      { label: "A", text: "\\(p > 0\\)" },
      { label: "B", text: "\\(0 < p < 1\\)" },
      { label: "C", text: "\\(0 \\leq p \\leq 1\\)" },
      { label: "D", text: "\\(p \\geq 1\\)" }
    ],
    answer: "C",
    explanation: "La propriété fondamentale des probabilités impose \\(0 \\leq p \\leq 1\\). Les bornes 0 et 1 sont atteintes respectivement pour un événement impossible et un événement certain."
  },
  {
    id: 10,
    text: "Un sac contient des billes rouges et bleues. On tire une bille au hasard. La probabilité de tirer une bille verte est :",
    choices: [
      { label: "A", text: "0,5" },
      { label: "B", text: "0,1" },
      { label: "C", text: "1" },
      { label: "D", text: "0" }
    ],
    answer: "D",
    explanation: "Le sac ne contient pas de billes vertes. L'événement « tirer une bille verte » est impossible, sa probabilité est donc 0."
  }
];
