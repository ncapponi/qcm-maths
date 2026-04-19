/**
 * QCM Questions Data
 *
 * Each question object has:
 *   - id: unique identifier
 *   - text: the question text
 *   - choices: array of { label, text } objects
 *   - answer: the label of the correct choice (e.g. "A")
 *   - explanation: (optional) explanation shown on correction
 *
 * To add more questions, simply append to this array.
 * To create variations, duplicate a question and modify the values.
 */
const questions = [
  {
    id: 1,
    text: "Une tablette coûte 200 euros. Son prix diminue de 30%. Le prix après cette diminution est :",
    choices: [
      { label: "A", text: "140 euros" },
      { label: "B", text: "170 euros" },
      { label: "C", text: "194 euros" },
      { label: "D", text: "197 euros" }
    ],
    answer: "A",
    explanation: "200 × (1 − 0,30) = 200 × 0,70 = 140 euros."
  },
  {
    id: 2,
    text: "Une réduction de 50% suivie d'une augmentation de 50% équivaut à :",
    choices: [
      { label: "A", text: "une réduction de 50%" },
      { label: "B", text: "une réduction de 25%" },
      { label: "C", text: "une augmentation de 25%" },
      { label: "D", text: "une augmentation de 75%" }
    ],
    answer: "B",
    explanation: "Prix × 0,50 × 1,50 = Prix × 0,75, soit une réduction de 25%."
  },
  {
    id: 3,
    text: "Dans un lycée, le quart des élèves sont internes, parmi eux, la moitié sont des filles. La proportion des filles internes par rapport à l'ensemble des élèves du lycée est égale à :",
    choices: [
      { label: "A", text: "4%" },
      { label: "B", text: "12,5%" },
      { label: "C", text: "25%" },
      { label: "D", text: "50%" }
    ],
    answer: "B",
    explanation: "1/4 × 1/2 = 1/8 = 12,5%."
  },
  {
    id: 4,
    text: "Une durée de 75 minutes correspond à :",
    choices: [
      { label: "A", text: "1,15 heure" },
      { label: "B", text: "1,25 heure" },
      { label: "C", text: "0,75 heure" },
      { label: "D", text: "1,4 heure" }
    ],
    answer: "B",
    explanation: "75 minutes = 75 ÷ 60 = 1,25 heure."
  },
  {
    id: 5,
    text: "10<sup>30</sup> + 10<sup>−30</sup> est environ égal à :",
    choices: [
      { label: "A", text: "10<sup>0</sup>" },
      { label: "B", text: "0" },
      { label: "C", text: "10<sup>30</sup>" },
      { label: "D", text: "20<sup>30</sup>" }
    ],
    answer: "C",
    explanation: "10<sup>−30</sup> est un nombre extrêmement petit (quasi nul). Donc 10<sup>30</sup> + 10<sup>−30</sup> ≈ 10<sup>30</sup>."
  },
  {
    id: 6,
    text: "La seule droite pouvant correspondre à l'équation <em>y</em> = −2<em>x</em> + 5 est :",
    image: true,
    choices: [
      { label: "A", text: "la droite D<sub>1</sub>", image: '<svg width="200" height="200" viewBox="0 0 200 200"><line x1="10" y1="100" x2="190" y2="100" stroke="#333" stroke-width="1.5"/><polygon points="190,100 184,96 184,104" fill="#333"/><line x1="100" y1="190" x2="100" y2="10" stroke="#333" stroke-width="1.5"/><polygon points="100,10 96,16 104,16" fill="#333"/><line x1="20" y1="190" x2="180" y2="78" stroke="#0f3460" stroke-width="2.5"/></svg>' },
      { label: "B", text: "la droite D<sub>2</sub>", image: '<svg width="200" height="200" viewBox="0 0 200 200"><line x1="10" y1="100" x2="190" y2="100" stroke="#333" stroke-width="1.5"/><polygon points="190,100 184,96 184,104" fill="#333"/><line x1="100" y1="190" x2="100" y2="10" stroke="#333" stroke-width="1.5"/><polygon points="100,10 96,16 104,16" fill="#333"/><line x1="77" y1="4" x2="165" y2="180" stroke="#0f3460" stroke-width="2.5"/></svg>' },
      { label: "C", text: "la droite D<sub>3</sub>", image: '<svg width="200" height="200" viewBox="0 0 200 200"><line x1="10" y1="100" x2="190" y2="100" stroke="#333" stroke-width="1.5"/><polygon points="190,100 184,96 184,104" fill="#333"/><line x1="100" y1="190" x2="100" y2="10" stroke="#333" stroke-width="1.5"/><polygon points="100,10 96,16 104,16" fill="#333"/><line x1="20" y1="113" x2="180" y2="17" stroke="#0f3460" stroke-width="2.5"/></svg>' },
      { label: "D", text: "la droite D<sub>4</sub>", image: '<svg width="200" height="200" viewBox="0 0 200 200"><line x1="10" y1="100" x2="190" y2="100" stroke="#333" stroke-width="1.5"/><polygon points="190,100 184,96 184,104" fill="#333"/><line x1="100" y1="190" x2="100" y2="10" stroke="#333" stroke-width="1.5"/><polygon points="100,10 96,16 104,16" fill="#333"/><line x1="20" y1="60" x2="150" y2="190" stroke="#0f3460" stroke-width="2.5"/></svg>' }
    ],
    answer: "B",
    explanation: "L'équation y = −2x + 5 a une pente négative (−2) et une ordonnée à l'origine positive (+5). La droite descend de gauche à droite et coupe l'axe des ordonnées au-dessus de l'origine. Seule D<sub>2</sub> correspond."
  },
  {
    id: 7,
    text: "La solution de l'équation 3<em>x</em> = 0 est :",
    choices: [
      { label: "A", text: "<em>x</em> = −3" },
      { label: "B", text: "<em>x</em> = 1/3" },
      { label: "C", text: "<em>x</em> = −1/3" },
      { label: "D", text: "<em>x</em> = 0" }
    ],
    answer: "D",
    explanation: "3x = 0 ⇒ x = 0 ÷ 3 = 0."
  },
  {
    id: 8,
    text: "La solution de l'équation <sup>144</sup>⁄<sub><em>x</em></sub> = 9 est :",
    choices: [
      { label: "A", text: "<em>x</em> = 144 × 9" },
      { label: "B", text: "<em>x</em> = <sup>9</sup>⁄<sub>144</sub>" },
      { label: "C", text: "<em>x</em> = <sup>144</sup>⁄<sub>9</sub>" },
      { label: "D", text: "<em>x</em> = −16" }
    ],
    answer: "C",
    explanation: "144/x = 9 ⇒ x = 144/9 = 16."
  },
  {
    id: 9,
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
    id: 10,
    text: "Un article coûte 400 euros. Le prix augmente de 20%. Le nouveau prix est :",
    choices: [
      { label: "A", text: "420 euros" },
      { label: "B", text: "480 euros" },
      { label: "C", text: "500 euros" },
      { label: "D", text: "320 euros" }
    ],
    answer: "B",
    explanation: "400 × (1 + 0,20) = 400 × 1,20 = 480 euros."
  },
  {
    id: 11,
    text: "Un sac coûte 130 euros. Le prix baisse de 10%. Le nouveau prix est :",
    choices: [
      { label: "A", text: "130 × 0,1" },
      { label: "B", text: "130 × (−<sup>10</sup>⁄<sub>100</sub>)" },
      { label: "C", text: "130 × (1 + <sup>10</sup>⁄<sub>100</sub>)" },
      { label: "D", text: "130 × 0,9" }
    ],
    answer: "D",
    explanation: "Une baisse de 10% revient à multiplier par (1 − 0,10) = 0,9. Donc le nouveau prix est 130 × 0,9 = 117 euros."
  },
  {
    id: 12,
    text: "Le prix d'un article est noté <em>P</em>. Il connaît deux augmentations de 20%. Le prix après ces augmentations est :",
    choices: [
      { label: "A", text: "<em>P</em> × (1 + (<sup>20</sup>⁄<sub>100</sub>))<sup>2</sup>" },
      { label: "B", text: "<em>P</em> × 1,40" },
      { label: "C", text: "<sup><em>P</em></sup>⁄<sub>1,44</sub>" },
      { label: "D", text: "<em>P</em> × 1,2<sup>2</sup>" }
    ],
    answer: "D",
    explanation: "Deux augmentations successives de 20% : P × 1,20 × 1,20 = P × 1,2² = P × 1,44."
  },
  {
    id: 13,
    text: "Lors d'une élection, le quart des électeurs a voté pour A, 20% a voté pour B, un tiers a voté pour C, et le reste a voté pour D. Le candidat ayant recueilli le <u>moins</u> de votes est :",
    choices: [
      { label: "A", text: "A" },
      { label: "B", text: "B" },
      { label: "C", text: "C" },
      { label: "D", text: "D" }
    ],
    answer: "B",
    explanation: "A = 1/4 = 25%, B = 20%, C = 1/3 ≈ 33,3%, D = 100% − 25% − 20% − 33,3% ≈ 21,7%. B a le moins de votes avec 20%."
  },
  {
    id: 14,
    text: "On considère <em>A</em> = <sup>2</sup>⁄<sub>1 − <sup>2</sup>⁄<sub>3</sub></sub>. On a :",
    choices: [
      { label: "A", text: "<em>A</em> = −1" },
      { label: "B", text: "<em>A</em> = <sup>2</sup>⁄<sub>3</sub>" },
      { label: "C", text: "<em>A</em> = 6" },
      { label: "D", text: "<em>A</em> = 9" }
    ],
    answer: "C",
    explanation: "A = 2 / (1 − 2/3) = 2 / (1/3) = 2 × 3 = 6."
  },
  {
    id: 15,
    text: "On considère <em>A</em> = <sup>1</sup>⁄<sub>100</sub> + <sup>1</sup>⁄<sub>1000</sub>. On a :",
    choices: [
      { label: "A", text: "<em>A</em> = 100,001" },
      { label: "B", text: "<em>A</em> = <sup>2</sup>⁄<sub>100 000</sub>" },
      { label: "C", text: "<em>A</em> = 0,11" },
      { label: "D", text: "<em>A</em> = 0,011" }
    ],
    answer: "D",
    explanation: "A = 1/100 + 1/1000 = 0,01 + 0,001 = 0,011."
  }
];
