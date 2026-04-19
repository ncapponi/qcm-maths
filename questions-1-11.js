// Catégorie 1 – Calcul numérique et algébrique
// Sous-catégorie 1.11 – Isoler une variable dans une égalité
const qcmCategory = "Calcul numérique et algébrique";
const qcmSubcategory = "Isoler une variable dans une égalité";
const questions = [
  {
    id: 1,
    text: "Voici les notes sur vingt obtenues par un élève en mathématiques :<br><br><table class='qcm-table'><tr><th>Note</th><td>10</td><td>13</td><td>12</td><td><em>x</em></td></tr><tr><th>Coefficient</th><td>1</td><td>1</td><td>1</td><td>2</td></tr></table><br>On cherche ce que doit valoir <em>x</em> pour que la moyenne de l'élève soit égale à 15.",
    choices: [
      { label: "A", text: "<em>x</em> = 20" },
      { label: "B", text: "<em>x</em> = 18" },
      { label: "C", text: "<em>x</em> = 15" },
      { label: "D", text: "Impossible : il faudrait une note strictement supérieure à vingt." }
    ],
    answer: "A",
    explanation: "Moyenne = (10×1 + 13×1 + 12×1 + x×2) / (1+1+1+2) = (35 + 2x) / 5 = 15 ⇒ 35 + 2x = 75 ⇒ 2x = 40 ⇒ x = 20."
  },
  {
    id: 2,
    text: "On considère la relation \\(C = (1 + t)^{2}\\). On cherche à isoler la variable \\(t\\). On a :",
    choices: [
      { label: "A", text: "<em>t</em> = √(<em>C</em> − 1)" },
      { label: "B", text: "<em>t</em> = √<em>C</em> − 1" },
      { label: "C", text: "<em>t</em> = √(1 − <em>C</em>)" },
      { label: "D", text: "<em>t</em> = 1 − √<em>C</em>" }
    ],
    answer: "B",
    explanation: "\\(C = (1 + t)^{2} \\Rightarrow \\sqrt{C} = 1 + t \\Rightarrow t = \\sqrt{C} - 1\\)."
  }
];
