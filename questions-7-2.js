// Catégorie 7 – Trigonométrie
// Sous-catégorie 7.2 – Variations et représentations graphiques
const qcmCategory = "Trigonométrie";
const qcmSubcategory = "Variations et représentations graphiques";

// ── Données des courbes ───────────────────────────────────────────────────────
const _N2 = 300;
const _xFull = [];   // [-π, π]
const _xHalf = [];   // [0, π]

for (let i = 0; i <= _N2; i++) {
  _xFull.push(-Math.PI + (2 * Math.PI * i / _N2));
}
for (let i = 0; i <= _N2; i++) {
  _xHalf.push(Math.PI * i / _N2);
}

const _cosFullY = _xFull.map(x => Math.cos(x));
const _sinFullY = _xFull.map(x => Math.sin(x));
const _cosHalfY = _xHalf.map(x => Math.cos(x));
const _sinHalfY = _xHalf.map(x => Math.sin(x));

const _ticksFull = {
  tickvals: [-Math.PI, -Math.PI / 2, 0, Math.PI / 2, Math.PI],
  ticktext: ["−π", "−π/2", "0", "π/2", "π"]
};
const _ticksHalf = {
  tickvals: [0, Math.PI / 2, Math.PI],
  ticktext: ["0", "π/2", "π"],
  range: [-0.15, Math.PI + 0.15]
};
const _yAxis = {
  range: [-1.4, 1.4],
  dtick: 0.5,
  zeroline: true,
  zerolinecolor: "#333",
  zerolinewidth: 1,
  showgrid: true,
  gridcolor: "#eee",
  title: { text: "y", font: { size: 12 } }
};

function _xAxis(ticks, extra) {
  return Object.assign({
    zeroline: true,
    zerolinecolor: "#333",
    zerolinewidth: 1,
    showgrid: true,
    gridcolor: "#eee",
    title: { text: "x", font: { size: 12 } }
  }, ticks, extra || {});
}

function _layout(xExtra) {
  return {
    width: 420,
    height: 280,
    margin: { l: 50, r: 30, t: 30, b: 50 },
    paper_bgcolor: "#fff",
    plot_bgcolor: "#fff",
    showlegend: false,
    xaxis: _xAxis(_ticksFull, Object.assign({ range: [-Math.PI - 0.3, Math.PI + 0.3] }, xExtra || {})),
    yaxis: _yAxis
  };
}

function _layoutHalf() {
  return {
    width: 420,
    height: 280,
    margin: { l: 50, r: 30, t: 30, b: 50 },
    paper_bgcolor: "#fff",
    plot_bgcolor: "#fff",
    showlegend: false,
    xaxis: _xAxis(_ticksHalf),
    yaxis: _yAxis
  };
}

// Courbe cosinus sur [-π, π]
function cosFullPlot(annotate) {
  const layout = _layout();
  if (annotate !== false) {
    layout.annotations = [{
      x: Math.PI * 0.55,
      y: Math.cos(Math.PI * 0.55) + 0.2,
      xref: "x",
      yref: "y",
      text: "y = cos x",
      showarrow: false,
      font: { size: 13, color: "#e74c3c" }
    }];
  }
  return {
    data: [{
      x: _xFull,
      y: _cosFullY,
      mode: "lines",
      type: "scatter",
      line: { color: "#e74c3c", width: 2.5 },
      hoverinfo: "skip",
      showlegend: false
    }],
    layout
  };
}

// Courbe cosinus sur [0, π]
function cosHalfPlot() {
  const layout = _layoutHalf();
  layout.annotations = [{
    x: Math.PI * 0.55,
    y: Math.cos(Math.PI * 0.55) + 0.2,
    xref: "x",
    yref: "y",
    text: "y = cos x",
    showarrow: false,
    font: { size: 13, color: "#e74c3c" }
  }];
  return {
    data: [{
      x: _xHalf,
      y: _cosHalfY,
      mode: "lines",
      type: "scatter",
      line: { color: "#e74c3c", width: 2.5 },
      hoverinfo: "skip",
      showlegend: false
    }],
    layout
  };
}

// Courbe sinus sur [-π, π]
function sinFullPlot(annotate) {
  const layout = _layout();
  if (annotate !== false) {
    layout.annotations = [{
      x: Math.PI * 0.4,
      y: Math.sin(Math.PI * 0.4) + 0.2,
      xref: "x",
      yref: "y",
      text: "y = sin x",
      showarrow: false,
      font: { size: 13, color: "#e74c3c" }
    }];
  }
  return {
    data: [{
      x: _xFull,
      y: _sinFullY,
      mode: "lines",
      type: "scatter",
      line: { color: "#e74c3c", width: 2.5 },
      hoverinfo: "skip",
      showlegend: false
    }],
    layout
  };
}

// Courbe sinus sur [0, π]
function sinHalfPlot() {
  const layout = _layoutHalf();
  layout.annotations = [{
    x: Math.PI / 2,
    y: 1.15,
    xref: "x",
    yref: "y",
    text: "y = sin x",
    showarrow: false,
    font: { size: 13, color: "#e74c3c" }
  }];
  return {
    data: [{
      x: _xHalf,
      y: _sinHalfY,
      mode: "lines",
      type: "scatter",
      line: { color: "#e74c3c", width: 2.5 },
      hoverinfo: "skip",
      showlegend: false
    }],
    layout
  };
}

// Les deux courbes, sans étiquette, pour identification
function bothUnlabelledPlot() {
  const layout = _layout();
  layout.showlegend = true;
  layout.legend = { x: 0.02, y: 0.98, bgcolor: "rgba(255,255,255,0.8)" };
  return {
    data: [
      {
        x: _xFull,
        y: _cosFullY,
        mode: "lines",
        type: "scatter",
        line: { color: "#e74c3c", width: 2.5 },
        name: "Courbe rouge",
        hoverinfo: "skip"
      },
      {
        x: _xFull,
        y: _sinFullY,
        mode: "lines",
        type: "scatter",
        line: { color: "#0f3460", width: 2.5 },
        name: "Courbe bleue",
        hoverinfo: "skip"
      }
    ],
    layout
  };
}

function plotDiv(id) {
  return `<div id="plot-${id}" style="width:420px;max-width:100%;height:280px;margin:0 auto;"></div>`;
}

// ── Questions ─────────────────────────────────────────────────────────────────
const questions = [
  {
    id: 1,
    text: "Quelle propriété de parité possède la fonction cosinus ?",
    choices: [
      { label: "A", text: "Elle est <strong>impaire</strong> : cos(−x) = −cos x" },
      { label: "B", text: "Elle est <strong>paire</strong> : cos(−x) = cos x" },
      { label: "C", text: "Elle n'est ni paire ni impaire" },
      { label: "D", text: "Elle est paire uniquement sur [0, π]" }
    ],
    answer: "B",
    explanation: "La fonction cosinus est <strong>paire</strong> : pour tout réel x, cos(−x) = cos x. Sa courbe représentative est donc symétrique par rapport à l'axe des ordonnées."
  },
  {
    id: 2,
    text: "Quelle propriété de parité possède la fonction sinus ?",
    choices: [
      { label: "A", text: "Elle est <strong>paire</strong> : sin(−x) = sin x" },
      { label: "B", text: "Elle est <strong>impaire</strong> : sin(−x) = −sin x" },
      { label: "C", text: "Elle n'est ni paire ni impaire" },
      { label: "D", text: "Elle est impaire uniquement sur [0, π]" }
    ],
    answer: "B",
    explanation: "La fonction sinus est <strong>impaire</strong> : pour tout réel x, sin(−x) = −sin x. Sa courbe représentative est donc symétrique par rapport à l'origine du repère."
  },
  {
    id: 3,
    text: "En utilisant la parité du cosinus, calculer \\(\\cos\\!\\left(-\\dfrac{\\pi}{3}\\right)\\).",
    choices: [
      { label: "A", text: "\\(-\\dfrac{1}{2}\\)" },
      { label: "B", text: "\\(\\dfrac{\\sqrt{3}}{2}\\)" },
      { label: "C", text: "\\(\\dfrac{1}{2}\\)" },
      { label: "D", text: "\\(-\\dfrac{\\sqrt{3}}{2}\\)" }
    ],
    answer: "C",
    explanation: "Le cosinus est une fonction paire, donc \\(\\cos\\!\\left(-\\dfrac{\\pi}{3}\\right) = \\cos\\!\\left(\\dfrac{\\pi}{3}\\right) = \\dfrac{1}{2}\\)."
  },
  {
    id: 4,
    text: "En utilisant la parité du sinus, calculer \\(\\sin\\!\\left(-\\dfrac{\\pi}{4}\\right)\\).",
    choices: [
      { label: "A", text: "\\(\\dfrac{\\sqrt{2}}{2}\\)" },
      { label: "B", text: "\\(-\\dfrac{\\sqrt{2}}{2}\\)" },
      { label: "C", text: "\\(\\dfrac{1}{2}\\)" },
      { label: "D", text: "\\(-\\dfrac{1}{2}\\)" }
    ],
    answer: "B",
    explanation: "Le sinus est une fonction impaire, donc \\(\\sin\\!\\left(-\\dfrac{\\pi}{4}\\right) = -\\sin\\!\\left(\\dfrac{\\pi}{4}\\right) = -\\dfrac{\\sqrt{2}}{2}\\)."
  },
  {
    id: 5,
    text: "Sur l'intervalle \\([0\\,;\\,\\pi]\\), comment varie la fonction cosinus ?",
    questionImage: plotDiv(5),
    plotly: cosHalfPlot(),
    choices: [
      { label: "A", text: "Elle est croissante sur \\([0\\,;\\,\\pi]\\)" },
      { label: "B", text: "Elle est décroissante sur \\([0\\,;\\,\\pi]\\)" },
      { label: "C", text: "Elle est croissante sur \\([0\\,;\\,\\pi/2]\\) puis décroissante" },
      { label: "D", text: "Elle est constante" }
    ],
    answer: "B",
    explanation: "Sur \\([0\\,;\\,\\pi]\\), la fonction cosinus est <strong>décroissante</strong> : elle passe de cos(0) = 1 à cos(π) = −1. Son tableau de variations sur cet intervalle est strictement décroissant."
  },
  {
    id: 6,
    text: "Sur l'intervalle \\([0\\,;\\,\\pi]\\), quelle est la valeur maximale de la fonction cosinus et en quel point est-elle atteinte ?",
    questionImage: plotDiv(6),
    plotly: cosHalfPlot(),
    choices: [
      { label: "A", text: "Maximum 0 en \\(x = \\pi/2\\)" },
      { label: "B", text: "Maximum 1 en \\(x = 0\\)" },
      { label: "C", text: "Maximum −1 en \\(x = \\pi\\)" },
      { label: "D", text: "Maximum \\(\\sqrt{2}/2\\) en \\(x = \\pi/4\\)" }
    ],
    answer: "B",
    explanation: "Le cosinus est décroissant sur \\([0\\,;\\,\\pi]\\). Son maximum est donc atteint à gauche de l'intervalle : \\(\\cos(0) = 1\\)."
  },
  {
    id: 7,
    text: "Sur l'intervalle \\([0\\,;\\,\\pi]\\), comment varie la fonction sinus ?",
    questionImage: plotDiv(7),
    plotly: sinHalfPlot(),
    choices: [
      { label: "A", text: "Elle est toujours croissante sur \\([0\\,;\\,\\pi]\\)" },
      { label: "B", text: "Elle est toujours décroissante sur \\([0\\,;\\,\\pi]\\)" },
      { label: "C", text: "Elle est croissante sur \\([0\\,;\\,\\pi/2]\\) puis décroissante sur \\([\\pi/2\\,;\\,\\pi]\\)" },
      { label: "D", text: "Elle est décroissante sur \\([0\\,;\\,\\pi/2]\\) puis croissante sur \\([\\pi/2\\,;\\,\\pi]\\)" }
    ],
    answer: "C",
    explanation: "Sur \\([0\\,;\\,\\pi/2]\\) le sinus croît de 0 à 1, puis sur \\([\\pi/2\\,;\\,\\pi]\\) il décroît de 1 à 0. Son maximum 1 est atteint en \\(x = \\pi/2\\)."
  },
  {
    id: 8,
    text: "Sur l'intervalle \\([0\\,;\\,\\pi]\\), où la fonction sinus atteint-elle son maximum ?",
    questionImage: plotDiv(8),
    plotly: sinHalfPlot(),
    choices: [
      { label: "A", text: "En \\(x = 0\\)" },
      { label: "B", text: "En \\(x = \\pi/4\\)" },
      { label: "C", text: "En \\(x = \\pi/2\\), valant 1" },
      { label: "D", text: "En \\(x = \\pi\\)" }
    ],
    answer: "C",
    explanation: "La fonction sinus atteint son maximum de valeur 1 en \\(x = \\pi/2\\) : \\(\\sin(\\pi/2) = 1\\). C'est le sommet de la courbe sur cet intervalle."
  },
  {
    id: 9,
    text: "Les deux courbes ci-dessous représentent \\(y = \\cos x\\) (courbe rouge) et \\(y = \\sin x\\) (courbe bleue). En \\(x = 0\\), quelle valeur prend la courbe rouge ?",
    questionImage: plotDiv(9),
    plotly: bothUnlabelledPlot(),
    choices: [
      { label: "A", text: "0" },
      { label: "B", text: "1" },
      { label: "C", text: "−1" },
      { label: "D", text: "\\(\\dfrac{\\sqrt{2}}{2}\\)" }
    ],
    answer: "B",
    explanation: "La courbe rouge est \\(y = \\cos x\\). En \\(x = 0\\), \\(\\cos(0) = 1\\). On vérifie bien que la courbe rouge passe par le point (0 ; 1), contrairement à la courbe bleue (\\(\\sin(0) = 0\\))."
  },
  {
    id: 10,
    text: "D'après le graphique de \\(y = \\cos x\\) ci-dessous, quelle est la valeur de \\(\\cos(\\pi)\\) ?",
    questionImage: plotDiv(10),
    plotly: cosFullPlot(),
    choices: [
      { label: "A", text: "0" },
      { label: "B", text: "1" },
      { label: "C", text: "−1" },
      { label: "D", text: "\\(\\dfrac{1}{2}\\)" }
    ],
    answer: "C",
    explanation: "Sur le graphique, en \\(x = \\pi\\), la courbe \\(y = \\cos x\\) atteint la valeur −1. On a donc \\(\\cos(\\pi) = -1\\)."
  }
];
