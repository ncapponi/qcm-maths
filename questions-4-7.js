// Catégorie 4 – Fonctions et représentations
// Sous-catégorie 4.7 – Lire graphiquement l'équation réduite d'une droite
const qcmCategory = "Fonctions et représentations";
const qcmSubcategory = "Lire graphiquement l'équation réduite d'une droite";

// Shared Plotly layout helper
function _lineLayout(xRange, yRange) {
  return {
    width: 360,
    height: 300,
    margin: { l: 45, r: 20, t: 20, b: 45 },
    xaxis: {
      range: xRange,
      zeroline: true,
      zerolinecolor: "#333",
      zerolinewidth: 2,
      showgrid: true,
      gridcolor: "#dfe6e9",
      dtick: 1,
      tickfont: { size: 11 },
      title: { text: "x", font: { size: 13 } }
    },
    yaxis: {
      range: yRange,
      zeroline: true,
      zerolinecolor: "#333",
      zerolinewidth: 2,
      showgrid: true,
      gridcolor: "#dfe6e9",
      dtick: 1,
      tickfont: { size: 11 },
      title: { text: "y", font: { size: 13 } }
    },
    paper_bgcolor: "#fff",
    plot_bgcolor: "#f8f9fc"
  };
}

// Line trace helper: computes y values from x range endpoints
function _lineData(m, p, xRange) {
  return [{
    x: [xRange[0], xRange[1]],
    y: [m * xRange[0] + p, m * xRange[1] + p],
    mode: "lines",
    type: "scatter",
    line: { color: "#0f3460", width: 2.5 },
    hoverinfo: "skip",
    showlegend: false
  }];
}

const questions = [
  {
    id: 1,
    text: "D'après le graphique ci-dessous, quelle est l'équation réduite de cette droite ?",
    plotly: {
      data: _lineData(2, 1, [-2, 2.5]),
      layout: _lineLayout([-2, 2.5], [-3, 7])
    },
    choices: [
      { label: "A", text: "<em>y</em> = 2<em>x</em> + 1" },
      { label: "B", text: "<em>y</em> = <em>x</em> + 1" },
      { label: "C", text: "<em>y</em> = 2<em>x</em> − 1" },
      { label: "D", text: "<em>y</em> = −2<em>x</em> + 1" }
    ],
    answer: "A",
    explanation: "La droite coupe l'axe des ordonnées en 1 (<em>p</em> = 1). En allant d'un carré vers la droite, elle monte de 2 (<em>m</em> = 2). L'équation est <em>y</em> = 2<em>x</em> + 1."
  },
  {
    id: 2,
    text: "D'après le graphique ci-dessous, quelle est l'équation réduite de cette droite ?",
    plotly: {
      data: _lineData(-1, 3, [-1, 5]),
      layout: _lineLayout([-1, 5], [-3, 5])
    },
    choices: [
      { label: "A", text: "<em>y</em> = <em>x</em> + 3" },
      { label: "B", text: "<em>y</em> = −<em>x</em> + 3" },
      { label: "C", text: "<em>y</em> = −2<em>x</em> + 3" },
      { label: "D", text: "<em>y</em> = −<em>x</em> − 3" }
    ],
    answer: "B",
    explanation: "La droite coupe l'axe des ordonnées en 3 (<em>p</em> = 3). Elle descend d'une unité par carré vers la droite (<em>m</em> = −1). L'équation est <em>y</em> = −<em>x</em> + 3."
  },
  {
    id: 3,
    text: "D'après le graphique ci-dessous, quelle est l'équation réduite de cette droite ?",
    plotly: {
      data: _lineData(0.5, -2, [-2, 6]),
      layout: _lineLayout([-2, 6], [-4, 2])
    },
    choices: [
      { label: "A", text: "\\(y = \\frac{1}{2}x + 2\\)" },
      { label: "B", text: "<em>y</em> = 2<em>x</em> − 2" },
      { label: "C", text: "\\(y = \\frac{1}{2}x - 2\\)" },
      { label: "D", text: "\\(y = -\\frac{1}{2}x - 2\\)" }
    ],
    answer: "C",
    explanation: "La droite coupe l'axe des ordonnées en −2 (<em>p</em> = −2). Pour 2 carrés vers la droite, elle monte de 1 : coefficient directeur \\(m = \\frac{1}{2}\\). L'équation est \\(y = \\frac{1}{2}x - 2\\)."
  },
  {
    id: 4,
    text: "D'après le graphique ci-dessous, quelle est l'équation réduite de cette droite ?",
    plotly: {
      data: [{
        x: [-4, 4],
        y: [-3, -3],
        mode: "lines",
        type: "scatter",
        line: { color: "#0f3460", width: 2.5 },
        hoverinfo: "skip",
        showlegend: false
      }],
      layout: _lineLayout([-4, 4], [-5, 2])
    },
    choices: [
      { label: "A", text: "<em>y</em> = −3" },
      { label: "B", text: "<em>y</em> = 3" },
      { label: "C", text: "<em>x</em> = −3" },
      { label: "D", text: "<em>y</em> = −3<em>x</em>" }
    ],
    answer: "A",
    explanation: "La droite est horizontale (coefficient directeur nul) et passe par l'ordonnée −3. Son équation est <em>y</em> = −3."
  },
  {
    id: 5,
    text: "D'après le graphique ci-dessous, quelle est l'équation réduite de cette droite ?",
    plotly: {
      data: _lineData(2, 0, [-2, 3]),
      layout: _lineLayout([-2, 3], [-5, 7])
    },
    choices: [
      { label: "A", text: "\\(y = \\frac{1}{2}x\\)" },
      { label: "B", text: "<em>y</em> = −2<em>x</em>" },
      { label: "C", text: "<em>y</em> = 2<em>x</em> + 1" },
      { label: "D", text: "<em>y</em> = 2<em>x</em>" }
    ],
    answer: "D",
    explanation: "La droite passe par l'origine (<em>p</em> = 0) et monte de 2 unités pour chaque carré vers la droite (<em>m</em> = 2). L'équation est <em>y</em> = 2<em>x</em>."
  },
  {
    id: 6,
    text: "D'après le graphique ci-dessous, quelle est l'équation réduite de cette droite ?",
    plotly: {
      data: _lineData(-2, 2, [-1, 3.5]),
      layout: _lineLayout([-1, 3.5], [-6, 5])
    },
    choices: [
      { label: "A", text: "<em>y</em> = 2<em>x</em> + 2" },
      { label: "B", text: "<em>y</em> = −<em>x</em> + 2" },
      { label: "C", text: "<em>y</em> = −2<em>x</em> − 2" },
      { label: "D", text: "<em>y</em> = −2<em>x</em> + 2" }
    ],
    answer: "D",
    explanation: "La droite coupe l'axe des ordonnées en 2 (<em>p</em> = 2) et descend de 2 par carré vers la droite (<em>m</em> = −2). L'équation est <em>y</em> = −2<em>x</em> + 2."
  },
  {
    id: 7,
    text: "D'après le graphique ci-dessous, quelle est l'équation réduite de cette droite ?",
    plotly: {
      data: _lineData(1, 2, [-4, 3]),
      layout: _lineLayout([-4, 3], [-3, 6])
    },
    choices: [
      { label: "A", text: "<em>y</em> = <em>x</em> + 2" },
      { label: "B", text: "<em>y</em> = 2<em>x</em> + 1" },
      { label: "C", text: "<em>y</em> = −<em>x</em> + 2" },
      { label: "D", text: "<em>y</em> = <em>x</em> − 2" }
    ],
    answer: "A",
    explanation: "La droite coupe l'axe des ordonnées en 2 (<em>p</em> = 2). Elle monte d'une unité par carré vers la droite (<em>m</em> = 1). L'équation est <em>y</em> = <em>x</em> + 2."
  },
  {
    id: 8,
    text: "D'après le graphique ci-dessous, quelle est l'équation réduite de cette droite ?",
    plotly: {
      data: _lineData(-3, 1, [-1, 2]),
      layout: _lineLayout([-1, 2], [-6, 5])
    },
    choices: [
      { label: "A", text: "<em>y</em> = 3<em>x</em> + 1" },
      { label: "B", text: "<em>y</em> = −3<em>x</em> + 1" },
      { label: "C", text: "<em>y</em> = −3<em>x</em> − 1" },
      { label: "D", text: "<em>y</em> = −<em>x</em> + 1" }
    ],
    answer: "B",
    explanation: "La droite coupe l'axe des ordonnées en 1 (<em>p</em> = 1) et descend de 3 unités par carré vers la droite (<em>m</em> = −3). L'équation est <em>y</em> = −3<em>x</em> + 1."
  },
  {
    id: 9,
    text: "D'après le graphique ci-dessous, quelle est l'équation réduite de cette droite ?",
    plotly: {
      data: _lineData(1/3, 1, [-3, 6]),
      layout: _lineLayout([-3, 6], [-1, 4])
    },
    choices: [
      { label: "A", text: "<em>y</em> = 3<em>x</em> + 1" },
      { label: "B", text: "\\(y = \\frac{1}{3}x - 1\\)" },
      { label: "C", text: "\\(y = \\frac{1}{3}x + 1\\)" },
      { label: "D", text: "\\(y = -\\frac{1}{3}x + 1\\)" }
    ],
    answer: "C",
    explanation: "La droite coupe l'axe des ordonnées en 1 (<em>p</em> = 1). Pour 3 carrés vers la droite, elle monte de 1 : coefficient directeur \\(m = \\frac{1}{3}\\). L'équation est \\(y = \\frac{1}{3}x + 1\\)."
  },
  {
    id: 10,
    text: "D'après le graphique ci-dessous, quelle est l'équation réduite de cette droite ?",
    plotly: {
      data: _lineData(-0.5, 3, [-2, 7]),
      layout: _lineLayout([-2, 7], [-1, 5])
    },
    choices: [
      { label: "A", text: "\\(y = \\frac{1}{2}x + 3\\)" },
      { label: "B", text: "\\(y = -\\frac{1}{2}x - 3\\)" },
      { label: "C", text: "<em>y</em> = −<em>x</em> + 3" },
      { label: "D", text: "\\(y = -\\frac{1}{2}x + 3\\)" }
    ],
    answer: "D",
    explanation: "La droite coupe l'axe des ordonnées en 3 (<em>p</em> = 3). Pour 2 carrés vers la droite, elle descend de 1 : coefficient directeur \\(m = -\\frac{1}{2}\\). L'équation est \\(y = -\\frac{1}{2}x + 3\\)."
  }
];
