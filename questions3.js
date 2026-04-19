const questions = [
  {
    id: 1,
    text: "Voici quatre planètes et leur masse :<br><br><table class='qcm-table'><tr><th>Planète</th><th>Masse</th></tr><tr><td>Terre</td><td>\\(5\\,973 \\times 10^{21}\\) kg</td></tr><tr><td>Mercure</td><td>\\(33{,}02 \\times 10^{22}\\) kg</td></tr><tr><td>Vénus</td><td>\\(48\\,685 \\times 10^{20}\\) kg</td></tr><tr><td>Mars</td><td>\\(6{,}4185 \\times 10^{23}\\) kg</td></tr></table><br>La planète dont la masse est la plus importante est :",
    choices: [
      { label: "A", text: "Terre" },
      { label: "B", text: "Mercure" },
      { label: "C", text: "Vénus" },
      { label: "D", text: "Mars" }
    ],
    answer: "A",
    explanation: "En mettant tout en puissance de \\(10^{24}\\) : Terre ≈ \\(5{,}973 \\times 10^{24}\\) kg, Vénus ≈ \\(4{,}87 \\times 10^{24}\\) kg, Mars ≈ \\(0{,}64 \\times 10^{24}\\) kg, Mercure ≈ \\(0{,}33 \\times 10^{24}\\) kg. La Terre a la masse la plus importante."
  },
  {
    id: 2,
    text: "On additionne un nombre réel <em>x</em> avec son triple et son carré. Le résultat est égal à :",
    choices: [
      { label: "A", text: "\\((x + 3x)^{2}\\)" },
      { label: "B", text: "\\(x + (3x)^{2}\\)" },
      { label: "C", text: "\\(1 + 3x^{2}\\)" },
      { label: "D", text: "\\(4x + x^{2}\\)" }
    ],
    answer: "D",
    explanation: "\\(x + 3x + x^{2} = 4x + x^{2}\\)."
  },
  {
    id: 3,
    text: "On considère une fonction <em>f</em> définie sur ℝ dont le tableau de signes est :<br><br><table class='qcm-table'><tr><th><em>x</em></th><td>−∞</td><td></td><td>2</td><td></td><td>+∞</td></tr><tr><th><em>f</em>(<em>x</em>)</th><td></td><td>+</td><td>0</td><td>−</td><td></td></tr></table><br>Parmi les expressions proposées, une seule est possible pour <em>f</em> :",
    choices: [
      { label: "A", text: "<em>f</em>(<em>x</em>) = −3<em>x</em> + 6" },
      { label: "B", text: "<em>f</em>(<em>x</em>) = <em>x</em> + 2" },
      { label: "C", text: "<em>f</em>(<em>x</em>) = <em>x</em> − 2" },
      { label: "D", text: "<em>f</em>(<em>x</em>) = −4<em>x</em> + 2" }
    ],
    answer: "A",
    explanation: "−3<em>x</em> + 6 = 0 ⇒ <em>x</em> = 2, positif avant et négatif après, ce qui correspond au tableau. Les autres s'annulent en x = −2, x = 2 (mais avec pente positive) ou x = ½."
  },
  {
    id: 4,
    text: "On considère la relation \\(C = (1 + t)^{2}\\). On cherche à isoler la variable \\(t\\). On a :",
    choices: [
      { label: "A", text: "<em>t</em> = √(<em>C</em> − 1)" },
      { label: "B", text: "<em>t</em> = √<em>C</em> − 1" },
      { label: "C", text: "<em>t</em> = √(1 − <em>C</em>)" },
      { label: "D", text: "<em>t</em> = 1 − √<em>C</em>" }
    ],
    answer: "B",
    explanation: "\\(C = (1 + t)^{2} \\Rightarrow \\sqrt{C} = 1 + t \\Rightarrow t = \\sqrt{C} - 1\\)."
  },
  {
    id: 5,
    text: "Le diagramme en barres ci-contre donne la production d'électricité en France, en TWh (térawatt-heure), selon son origine (source : INSEE). L'année où la production d'électricité d'origine hydraulique était la plus importante est :",
    questionImage: '<svg width="360" height="280" viewBox="0 0 360 280"><rect width="360" height="280" fill="#fafafa" rx="6"/><text x="15" y="20" font-size="10" fill="#333" transform="rotate(-90,15,140)">Production d\'électricité en France (en TWh)</text><line x1="50" y1="250" x2="340" y2="250" stroke="#333" stroke-width="1"/><line x1="50" y1="250" x2="50" y2="20" stroke="#333" stroke-width="1"/><text x="40" y="254" font-size="9" fill="#666" text-anchor="end">0</text><text x="40" y="222" font-size="9" fill="#666" text-anchor="end">100</text><text x="40" y="190" font-size="9" fill="#666" text-anchor="end">200</text><text x="40" y="158" font-size="9" fill="#666" text-anchor="end">300</text><text x="40" y="126" font-size="9" fill="#666" text-anchor="end">400</text><text x="40" y="94" font-size="9" fill="#666" text-anchor="end">500</text><text x="40" y="62" font-size="9" fill="#666" text-anchor="end">600</text><text x="40" y="30" font-size="9" fill="#666" text-anchor="end">700</text><line x1="50" y1="222" x2="340" y2="222" stroke="#eee" stroke-width="0.5"/><line x1="50" y1="190" x2="340" y2="190" stroke="#eee" stroke-width="0.5"/><line x1="50" y1="158" x2="340" y2="158" stroke="#eee" stroke-width="0.5"/><line x1="50" y1="126" x2="340" y2="126" stroke="#eee" stroke-width="0.5"/><line x1="50" y1="94" x2="340" y2="94" stroke="#eee" stroke-width="0.5"/><line x1="50" y1="62" x2="340" y2="62" stroke="#eee" stroke-width="0.5"/><rect x="65" y="120" width="40" height="130" fill="#3498db"/><rect x="65" y="88" width="40" height="32" fill="#e67e22"/><rect x="65" y="68" width="40" height="20" fill="#2ecc71"/><rect x="125" y="100" width="40" height="150" fill="#3498db"/><rect x="125" y="68" width="40" height="32" fill="#e67e22"/><rect x="125" y="42" width="40" height="26" fill="#2ecc71"/><rect x="185" y="100" width="40" height="150" fill="#3498db"/><rect x="185" y="74" width="40" height="26" fill="#e67e22"/><rect x="185" y="56" width="40" height="18" fill="#2ecc71"/><rect x="245" y="108" width="40" height="142" fill="#3498db"/><rect x="245" y="82" width="40" height="26" fill="#e67e22"/><rect x="245" y="70" width="40" height="12" fill="#2ecc71"/><rect x="305" y="110" width="40" height="140" fill="#3498db"/><rect x="305" y="86" width="40" height="24" fill="#e67e22"/><rect x="305" y="74" width="40" height="12" fill="#2ecc71"/><text x="85" y="264" font-size="10" fill="#333" text-anchor="middle">1995</text><text x="145" y="264" font-size="10" fill="#333" text-anchor="middle">2001</text><text x="205" y="264" font-size="10" fill="#333" text-anchor="middle">2006</text><text x="265" y="264" font-size="10" fill="#333" text-anchor="middle">2011</text><text x="325" y="264" font-size="10" fill="#333" text-anchor="middle">2016</text><rect x="240" y="10" width="12" height="12" fill="#2ecc71"/><text x="256" y="20" font-size="10" fill="#333">Hydraulique</text><rect x="240" y="26" width="12" height="12" fill="#e67e22"/><text x="256" y="36" font-size="10" fill="#333">Thermique</text><rect x="240" y="42" width="12" height="12" fill="#3498db"/><text x="256" y="52" font-size="10" fill="#333">Nucléaire</text></svg>',
    choices: [
      { label: "A", text: "1995" },
      { label: "B", text: "2001" },
      { label: "C", text: "2011" },
      { label: "D", text: "2016" }
    ],
    answer: "B",
    explanation: "D'après le diagramme, la part hydraulique (barre du bas) est la plus grande en 2001."
  }
];
