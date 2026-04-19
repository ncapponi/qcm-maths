// Catégorie 1 – Calcul numérique et algébrique
// Sous-catégorie 1.8 – Effectuer un calcul littéral élémentaire
const qcmCategory = "Calcul numérique et algébrique";
const qcmSubcategory = "Effectuer un calcul littéral élémentaire";
const questions = [
  {
    id: 1,
    text: "On additionne un nombre réel <em>x</em> avec son triple et son carré. Le résultat est égal à :",
    choices: [
      { label: "A", text: "\\((x + 3x)^{2}\\)" },
      { label: "B", text: "\\(x + (3x)^{2}\\)" },
      { label: "C", text: "\\(1 + 3x^{2}\\)" },
      { label: "D", text: "\\(4x + x^{2}\\)" }
    ],
    answer: "D",
    explanation: "\\(x + 3x + x^{2} = 4x + x^{2}\\)."
  }
];
