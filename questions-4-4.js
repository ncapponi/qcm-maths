// Catégorie 4 – Fonctions et représentations
// Sous-catégorie 4.4 – Résoudre graphiquement une équation ou une inéquation
const qcmCategory = "Fonctions et représentations";
const qcmSubcategory = "Résoudre graphiquement une équation ou une inéquation";

function _lay44(xRange, yRange) {
  return {
    width: 360, height: 300,
    margin: { l: 45, r: 20, t: 20, b: 45 },
    xaxis: {
      range: xRange, zeroline: true, zerolinecolor: "#333", zerolinewidth: 2,
      showgrid: true, gridcolor: "#dfe6e9", dtick: 1,
      tickfont: { size: 11 }, title: { text: "x", font: { size: 13 } }
    },
    yaxis: {
      range: yRange, zeroline: true, zerolinecolor: "#333", zerolinewidth: 2,
      showgrid: true, gridcolor: "#dfe6e9", dtick: 1,
      tickfont: { size: 11 }, title: { text: "y", font: { size: 13 } }
    },
    paper_bgcolor: "#fff", plot_bgcolor: "#f8f9fc"
  };
}

function _xs44(xMin, xMax, n) {
  const a = [];
  for (let i = 0; i <= n; i++) a.push(xMin + i * (xMax - xMin) / n);
  return a;
}

// Smooth curve trace
function _c44(xs, fn, color) {
  return {
    x: xs, y: xs.map(fn),
    mode: "lines", type: "scatter",
    line: { color: color || "#0f3460", width: 2.5 },
    hoverinfo: "skip", showlegend: false
  };
}

// Red dashed horizontal reference line (for reading solutions)
function _h44(y, xMin, xMax) {
  return {
    x: [xMin, xMax], y: [y, y],
    mode: "lines", type: "scatter",
    line: { color: "#e74c3c", width: 1.5, dash: "dash" },
    hoverinfo: "skip", showlegend: false
  };
}

// Solid orange horizontal line (for function g shown as a line)
function _g44(y, xMin, xMax) {
  return {
    x: [xMin, xMax], y: [y, y],
    mode: "lines", type: "scatter",
    line: { color: "#e67e22", width: 2.5 },
    hoverinfo: "skip", showlegend: false
  };
}

const questions = [
  {
    id: 1,
    text: "La droite <em>y</em> = 2 (en pointillés rouges) est tracée sur le graphique. Résoudre graphiquement <em>f</em>(<em>x</em>) = 2.",
    plotly: {
      data: [
        {
          x: [-1, 0, 1, 2, 3, 4],
          y: [1, 0, 1, 2, 1, 0],
          mode: "lines", type: "scatter",
          line: { color: "#0f3460", width: 2.5 },
          hoverinfo: "skip", showlegend: false
        },
        _h44(2, -1.5, 4.5)
      ],
      layout: _lay44([-1.5, 4.5], [-0.5, 3])
    },
    choices: [
      { label: "A", text: "<em>x</em> = 2" },
      { label: "B", text: "<em>x</em> = 2 ou <em>x</em> = 3" },
      { label: "C", text: "<em>x</em> = 1 ou <em>x</em> = 3" },
      { label: "D", text: "pas de solution" }
    ],
    answer: "A",
    explanation: "La droite <em>y</em> = 2 est tangente au sommet de la courbe au point (2 ; 2). La seule solution est <em>x</em> = 2."
  },
  {
    id: 2,
    text: "La droite <em>y</em> = 1 (en pointillés rouges) est tracée sur le graphique. L'ensemble des solutions de <em>f</em>(<em>x</em>) > 1 est :",
    plotly: {
      data: [
        _c44(_xs44(-2, 4, 120), x => -x * x + 2 * x + 4),
        _h44(1, -2, 4)
      ],
      layout: _lay44([-2, 4], [-3, 6])
    },
    choices: [
      { label: "A", text: "]−1 ; 3[" },
      { label: "B", text: "[−1 ; 3]" },
      { label: "C", text: "]−∞ ; −1[ ∪ ]3 ; +∞[" },
      { label: "D", text: "{−1 ; 3}" }
    ],
    answer: "A",
    explanation: "La parabole est strictement au-dessus de la droite <em>y</em> = 1 entre <em>x</em> = −1 et <em>x</em> = 3. L'ensemble des solutions est ]−1 ; 3[."
  },
  {
    id: 3,
    text: "Le graphique ci-dessous représente deux fonctions  — <em>f</em> en bleu et <em>g</em> en orange. Les solutions de <em>f</em>(<em>x</em>) = <em>g</em>(<em>x</em>) sont :",
    plotly: {
      data: [
        _c44(_xs44(-2.5, 3, 120), x => x * x - 2, "#0f3460"),
        _c44(_xs44(-2.5, 3, 120), x => x, "#e67e22")
      ],
      layout: _lay44([-2.5, 3], [-3, 5])
    },
    choices: [
      { label: "A", text: "<em>x</em> = −1 ou <em>x</em> = 2" },
      { label: "B", text: "<em>x</em> = 0 ou <em>x</em> = 2" },
      { label: "C", text: "<em>x</em> = −2 ou <em>x</em> = 1" },
      { label: "D", text: "<em>x</em> = 2 seulement" }
    ],
    answer: "A",
    explanation: "Les courbes se croisent aux abscisses des points d'intersection. On vérifie : <em>f</em>(−1) = 1 − 2 = −1 = <em>g</em>(−1) ✓ et <em>f</em>(2) = 4 − 2 = 2 = <em>g</em>(2) ✓. Les solutions sont <em>x</em> = −1 et <em>x</em> = 2."
  },
  {
    id: 4,
    text: "D'après le graphique ci-dessous, les solutions de <em>f</em>(<em>x</em>) = 0 sont :",
    plotly: {
      data: [_c44(_xs44(-5, 3, 120), x => x * x + 2 * x - 3)],
      layout: _lay44([-5, 3], [-5, 6])
    },
    choices: [
      { label: "A", text: "<em>x</em> = 0" },
      { label: "B", text: "<em>x</em> = −3 ou <em>x</em> = 1" },
      { label: "C", text: "<em>x</em> = 3 ou <em>x</em> = −1" },
      { label: "D", text: "il n'y a pas de solution" }
    ],
    answer: "B",
    explanation: "La courbe coupe l'axe des abscisses (<em>y</em> = 0) aux points d'abscisses −3 et 1. Vérification : <em>f</em>(−3) = 9 − 6 − 3 = 0 et <em>f</em>(1) = 1 + 2 − 3 = 0."
  },
  {
    id: 5,
    text: "D'après le graphique ci-dessous, l'ensemble des solutions de <em>f</em>(<em>x</em>) < 0 est :",
    plotly: {
      data: [_c44(_xs44(0, 7, 120), x => (x - 2) * (x - 5))],
      layout: _lay44([0, 7], [-3, 6])
    },
    choices: [
      { label: "A", text: "]2 ; 5[" },
      { label: "B", text: "[2 ; 5]" },
      { label: "C", text: "]−∞ ; 2[ ∪ ]5 ; +∞[" },
      { label: "D", text: "{2 ; 5}" }
    ],
    answer: "A",
    explanation: "La courbe est strictement sous l'axe des abscisses entre <em>x</em> = 2 et <em>x</em> = 5. L'ensemble des solutions de <em>f</em>(<em>x</em>) < 0 est ]2 ; 5[."
  },
  {
    id: 6,
    text: "La droite <em>y</em> = 4 (en pointillés rouges) est tracée sur le graphique. Combien de solutions a l'équation <em>f</em>(<em>x</em>) = 4 ?",
    plotly: {
      data: [
        _c44(_xs44(-2, 4, 120), x => -(x - 1) * (x - 1) + 3),
        _h44(4, -2, 4)
      ],
      layout: _lay44([-2, 4], [-2, 5])
    },
    choices: [
      { label: "A", text: "Aucune solution" },
      { label: "B", text: "Une unique solution" },
      { label: "C", text: "Deux solutions" },
      { label: "D", text: "Trois solutions" }
    ],
    answer: "A",
    explanation: "Le maximum de la courbe est 3 (atteint en <em>x</em> = 1). La droite <em>y</em> = 4 est au-dessus du maximum et ne coupe jamais la courbe. L'équation n'a aucune solution."
  },
  {
    id: 7,
    text: "Le graphique ci-dessous représente <em>f</em> (en bleu) et <em>g</em> (en orange). L'ensemble des solutions de <em>f</em>(<em>x</em>) ≥ <em>g</em>(<em>x</em>) est :",
    plotly: {
      data: [
        _c44(_xs44(-0.5, 5.5, 120), x => -(x - 1) * (x - 4) + 1, "#0f3460"),
        _g44(1, -0.5, 5.5)
      ],
      layout: _lay44([-0.5, 5.5], [-1, 5])
    },
    choices: [
      { label: "A", text: "]1 ; 4[" },
      { label: "B", text: "[1 ; 4]" },
      { label: "C", text: "]−∞ ; 1] ∪ [4 ; +∞[" },
      { label: "D", text: "]−∞ ; 1[ ∪ ]4 ; +∞[" }
    ],
    answer: "B",
    explanation: "La courbe de <em>f</em> est au-dessus de la droite <em>g</em> pour <em>x</em> ∈ ]1 ; 4[ et les deux coïncident aux bornes (<em>f</em>(1) = <em>g</em>(1) = 1 et <em>f</em>(4) = <em>g</em>(4) = 1). L'ensemble est [1 ; 4]."
  },
  {
    id: 8,
    text: "La droite <em>y</em> = −1 (en pointillés rouges) est tracée sur le graphique. Les solutions de <em>f</em>(<em>x</em>) = −1 sont :",
    plotly: {
      data: [
        _c44(_xs44(2, 8, 120), x => (x - 5) * (x - 5) - 1),
        _h44(-1, 2, 8)
      ],
      layout: _lay44([2, 8], [-2, 7])
    },
    choices: [
      { label: "A", text: "aucune solution" },
      { label: "B", text: "<em>x</em> = 5, unique solution" },
      { label: "C", text: "<em>x</em> = 4 ou <em>x</em> = 6" },
      { label: "D", text: "<em>x</em> = −1" }
    ],
    answer: "B",
    explanation: "La parabole a son minimum en (5 ; −1). La droite <em>y</em> = −1 est tangente en ce seul point. L'unique solution est <em>x</em> = 5."
  },
  {
    id: 9,
    text: "D'après le graphique ci-dessous, l'ensemble des solutions de <em>f</em>(<em>x</em>) > 0 est :",
    plotly: {
      data: [_c44(_xs44(-4, 5, 120), x => (x + 2) * (x - 3))],
      layout: _lay44([-4, 5], [-8, 6])
    },
    choices: [
      { label: "A", text: "]−2 ; 3[" },
      { label: "B", text: "]−∞ ; −2[ ∪ ]3 ; +∞[" },
      { label: "C", text: "[−2 ; 3]" },
      { label: "D", text: "{−2 ; 3}" }
    ],
    answer: "B",
    explanation: "La courbe est au-dessus de l'axe des abscisses pour <em>x</em> < −2 et pour <em>x</em> > 3. L'ensemble des solutions de <em>f</em>(<em>x</em>) > 0 est ]−∞ ; −2[ ∪ ]3 ; +∞[."
  },
  {
    id: 10,
    text: "Le graphique ci-dessous représente <em>f</em> (en bleu) et <em>g</em> (en orange). Les solutions de <em>f</em>(<em>x</em>) = <em>g</em>(<em>x</em>) sont :",
    plotly: {
      data: [
        _c44(_xs44(-2.5, 5.5, 120), x => -x * x + 3 * x + 6, "#0f3460"),
        _g44(2, -2.5, 5.5)
      ],
      layout: _lay44([-2.5, 5.5], [-1, 10])
    },
    choices: [
      { label: "A", text: "<em>x</em> = −1 seulement" },
      { label: "B", text: "<em>x</em> = 4 seulement" },
      { label: "C", text: "<em>x</em> = −1 ou <em>x</em> = 4" },
      { label: "D", text: "<em>x</em> ∈ [−1 ; 4]" }
    ],
    answer: "C",
    explanation: "La parabole et la droite <em>g</em> se coupent en deux points. Vérification : <em>f</em>(−1) = −1 − 3 + 6 = 2 = <em>g</em>(−1) ✓ et <em>f</em>(4) = −16 + 12 + 6 = 2 = <em>g</em>(4) ✓. Les solutions sont <em>x</em> = −1 et <em>x</em> = 4."
  }
];
