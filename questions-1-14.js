// Catégorie 1 – Calcul numérique et algébrique
// Sous-catégorie 1.14 – Déterminer le signe d'une expression du premier degré ou factorisée du second degré
const qcmCategory = "Calcul numérique et algébrique";
const qcmSubcategory = "Déterminer le signe d'une expression du premier degré ou factorisée du second degré";
const questions = [
  {
    id: 1,
    text: "On considère une fonction <em>f</em> définie sur ℝ dont le tableau de signes est :<br><br><table class='qcm-table'><tr><th><em>x</em></th><td>−∞</td><td></td><td>2</td><td></td><td>+∞</td></tr><tr><th><em>f</em>(<em>x</em>)</th><td></td><td>+</td><td>0</td><td>−</td><td></td></tr></table><br>Parmi les expressions proposées, une seule est possible pour <em>f</em> :",
    choices: [
      { label: "A", text: "<em>f</em>(<em>x</em>) = −3<em>x</em> + 6" },
      { label: "B", text: "<em>f</em>(<em>x</em>) = <em>x</em> + 2" },
      { label: "C", text: "<em>f</em>(<em>x</em>) = <em>x</em> − 2" },
      { label: "D", text: "<em>f</em>(<em>x</em>) = −4<em>x</em> + 2" }
    ],
    answer: "A",
    explanation: "−3<em>x</em> + 6 = 0 ⇒ <em>x</em> = 2, positif avant et négatif après, ce qui correspond au tableau. Les autres s'annulent en x = −2, x = 2 (mais avec pente positive) ou x = ½."
  }
];
