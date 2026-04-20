// Catégorie 1 – Calcul numérique et algébrique
// Sous-catégorie 1.6 – S'assurer de la vraisemblance et de la cohérence d'un résultat
const qcmCategory = "Calcul numérique et algébrique";
const qcmSubcategory = "S'assurer de la vraisemblance et de la cohérence d'un résultat";
const questions = [
  {
    id: 1,
    text: "Un élève trouve qu'un rectangle de 5 cm sur 3 cm a une aire de 150 cm². Ce résultat est :",
    choices: [
      { label: "A", text: "vraisemblable" },
      { label: "B", text: "trop grand" },
      { label: "C", text: "trop petit" },
      { label: "D", text: "correct mais mal arrondi" }
    ],
    answer: "B",
    explanation: "L'aire d'un rectangle de 5 cm sur 3 cm est \\(5 \\times 3 = 15\\) cm². Le résultat 150 cm² est dix fois trop grand."
  },
  {
    id: 2,
    text: "On calcule la vitesse moyenne d'un cycliste sur 30 km en 1 h 30 min. Un élève trouve 200 km/h. Ce résultat est :",
    choices: [
      { label: "A", text: "vraisemblable" },
      { label: "B", text: "trop grand" },
      { label: "C", text: "trop petit" },
      { label: "D", text: "correct" }
    ],
    answer: "B",
    explanation: "\\(v = \\frac{30}{1{,}5} = 20\\) km/h. 200 km/h est incohérent : c'est la vitesse d'une voiture sur autoroute, pas d'un cycliste."
  },
  {
    id: 3,
    text: "Un élève calcule que 15 % de 200 € font 3 €. Ce résultat est :",
    choices: [
      { label: "A", text: "vraisemblable" },
      { label: "B", text: "trop grand" },
      { label: "C", text: "trop petit" },
      { label: "D", text: "correct" }
    ],
    answer: "C",
    explanation: "15 % de 200 = \\(0{,}15 \\times 200 = 30\\) €. Le résultat 3 € est dix fois trop petit."
  },
  {
    id: 4,
    text: "On demande la taille moyenne d'un adulte. Un élève propose 17,5 m. Ce résultat est :",
    choices: [
      { label: "A", text: "vraisemblable" },
      { label: "B", text: "incohérent car trop grand" },
      { label: "C", text: "incohérent car trop petit" },
      { label: "D", text: "correct mais mal exprimé" }
    ],
    answer: "B",
    explanation: "La taille moyenne d'un adulte est environ 1,75 m. 17,5 m est dix fois trop grand ; il y a probablement une erreur de virgule."
  },
  {
    id: 5,
    text: "Un élève calcule que \\((-3)^2 = -9\\). Ce résultat est :",
    choices: [
      { label: "A", text: "correct" },
      { label: "B", text: "incorrect, le résultat devrait être positif" },
      { label: "C", text: "incorrect, le résultat devrait être 6" },
      { label: "D", text: "incorrect, le résultat devrait être −6" }
    ],
    answer: "B",
    explanation: "\\((-3)^2 = (-3) \\times (-3) = 9\\). Le carré d'un nombre est toujours positif ou nul."
  },
  {
    id: 6,
    text: "Un élève résout \\(2x + 5 = 3\\) et trouve \\(x = 4\\). Pour vérifier, on remplace :",
    choices: [
      { label: "A", text: "\\(2 \\times 4 + 5 = 13 \\neq 3\\) donc le résultat est faux" },
      { label: "B", text: "\\(2 \\times 4 + 5 = 11 \\neq 3\\) donc le résultat est faux" },
      { label: "C", text: "\\(2 \\times 4 + 5 = 3\\) donc le résultat est correct" },
      { label: "D", text: "on ne peut pas vérifier" }
    ],
    answer: "A",
    explanation: "\\(2 \\times 4 + 5 = 8 + 5 = 13 \\neq 3\\). La solution correcte est \\(x = -1\\)."
  },
  {
    id: 7,
    text: "Un réservoir de voiture contient 50 L. Un élève calcule qu'après avoir consommé 20 % il reste 10 L. Ce résultat est :",
    choices: [
      { label: "A", text: "vraisemblable" },
      { label: "B", text: "trop grand" },
      { label: "C", text: "trop petit" },
      { label: "D", text: "correct" }
    ],
    answer: "C",
    explanation: "20 % de 50 = 10 L consommés, donc il reste \\(50 - 10 = 40\\) L. Le résultat 10 L est beaucoup trop petit."
  },
  {
    id: 8,
    text: "Un élève affirme que \\(\\frac{3}{7} > 1\\). Ce résultat est :",
    choices: [
      { label: "A", text: "vraisemblable" },
      { label: "B", text: "faux, car le numérateur est inférieur au dénominateur" },
      { label: "C", text: "faux, car 3 et 7 sont premiers" },
      { label: "D", text: "vrai, car \\(3 + 7 > 1\\)" }
    ],
    answer: "B",
    explanation: "Lorsque le numérateur est strictement inférieur au dénominateur (les deux positifs), la fraction est strictement inférieure à 1. \\(\\frac{3}{7} \\approx 0{,}43 < 1\\)."
  },
  {
    id: 9,
    text: "Un terrain rectangulaire de 12 m sur 8 m a un périmètre de 96 m d'après un élève. Ce résultat est :",
    choices: [
      { label: "A", text: "correct" },
      { label: "B", text: "trop grand" },
      { label: "C", text: "trop petit" },
      { label: "D", text: "vraisemblable mais imprécis" }
    ],
    answer: "B",
    explanation: "Le périmètre est \\(2 \\times (12 + 8) = 40\\) m. L'élève a sans doute calculé l'aire (\\(12 \\times 8 = 96\\)) au lieu du périmètre."
  },
  {
    id: 10,
    text: "Un lycée compte 800 élèves. Un élève affirme que 60 % des élèves représentent 120 élèves. Ce résultat est :",
    choices: [
      { label: "A", text: "vraisemblable" },
      { label: "B", text: "trop grand" },
      { label: "C", text: "trop petit" },
      { label: "D", text: "correct" }
    ],
    answer: "C",
    explanation: "60 % de 800 = \\(0{,}6 \\times 800 = 480\\) élèves. 120 élèves ne représentent que 15 % de l'effectif."
  }
];
