// Catégorie 7 – Trigonométrie
// Sous-catégorie 7.1 – Cercle trigonométrique : valeurs remarquables
const qcmCategory = "Trigonométrie";
const qcmSubcategory = "Cercle trigonométrique : valeurs remarquables";

// Coordonnées des cinq points placés sur le quart de cercle trigonométrique :
//   A : angle 0       -> (1, 0)
//   B : angle π/6     -> (√3/2, 1/2)
//   C : angle π/4     -> (√2/2, √2/2)
//   D : angle π/3     -> (1/2, √3/2)
//   E : angle π/2     -> (0, 1)
const _ptsX = [1, Math.sqrt(3) / 2, Math.sqrt(2) / 2, 0.5, 0];
const _ptsY = [0, 0.5, Math.sqrt(2) / 2, Math.sqrt(3) / 2, 1];
const _labels = ["A", "B", "C", "D", "E"];

// Arc de cercle (quart de cercle de rayon 1)
const _N = 80;
const _arcX = [];
const _arcY = [];
for (let i = 0; i <= _N; i++) {
  const t = (i / _N) * (Math.PI / 2);
  _arcX.push(Math.cos(t));
  _arcY.push(Math.sin(t));
}

// Rayons (segments du centre vers chaque point)
const _rayShapes = _ptsX.map((x, i) => ({
  type: "line",
  x0: 0, y0: 0,
  x1: x, y1: _ptsY[i],
  line: { color: "#7f8c8d", width: 1, dash: "dot" }
}));

function trigPlot() {
  return {
    data: [
      {
        x: _arcX,
        y: _arcY,
        mode: "lines",
        type: "scatter",
        line: { color: "#0f3460", width: 2 },
        hoverinfo: "skip",
        showlegend: false
      },
      {
        x: _ptsX,
        y: _ptsY,
        mode: "markers+text",
        type: "scatter",
        marker: { size: 10, color: "#e74c3c" },
        text: _labels,
        textposition: "top right",
        textfont: { size: 16, color: "#16213e", family: "system-ui" },
        hoverinfo: "skip",
        showlegend: false,
        cliponaxis: false
      }
    ],
    layout: {
      width: 380,
      height: 380,
      margin: { l: 40, r: 30, t: 20, b: 40 },
      xaxis: {
        range: [-0.15, 1.25],
        zeroline: true,
        zerolinecolor: "#333",
        zerolinewidth: 1,
        showgrid: true,
        gridcolor: "#eee",
        dtick: 0.5,
        title: { text: "x", font: { size: 12 } }
      },
      yaxis: {
        range: [-0.15, 1.25],
        zeroline: true,
        zerolinecolor: "#333",
        zerolinewidth: 1,
        showgrid: true,
        gridcolor: "#eee",
        dtick: 0.5,
        scaleanchor: "x",
        title: { text: "y", font: { size: 12 } }
      },
      shapes: _rayShapes,
      paper_bgcolor: "#fff",
      plot_bgcolor: "#fff",
      showlegend: false
    }
  };
}

// Conteneur HTML inséré dans la question (le plot y est rendu après render)
function trigDiv(id) {
  return `<div id="plot-${id}" style="width:380px;max-width:100%;height:380px;margin:0 auto;"></div>`;
}

const questions = [
  {
    id: 1,
    text: "Sur le quart de cercle trigonométrique ci-dessous, les points A, B, C, D, E correspondent aux angles 0, \\(\\frac{\\pi}{6}\\), \\(\\frac{\\pi}{4}\\), \\(\\frac{\\pi}{3}\\) et \\(\\frac{\\pi}{2}\\). Quel point correspond à l'angle \\(\\frac{\\pi}{4}\\) ?",
    questionImage: trigDiv(1),
    plotly: trigPlot(),
    choices: [
      { label: "A", text: "Le point A" },
      { label: "B", text: "Le point B" },
      { label: "C", text: "Le point C" },
      { label: "D", text: "Le point D" }
    ],
    answer: "C",
    explanation: "Les angles sont placés dans l'ordre croissant : A=0, B=\\(\\frac{\\pi}{6}\\), C=\\(\\frac{\\pi}{4}\\), D=\\(\\frac{\\pi}{3}\\), E=\\(\\frac{\\pi}{2}\\). Le point C correspond donc à \\(\\frac{\\pi}{4}\\)."
  },
  {
    id: 2,
    text: "Quelles sont les coordonnées du point A (angle 0) ?",
    questionImage: trigDiv(2),
    plotly: trigPlot(),
    choices: [
      { label: "A", text: "(0 ; 1)" },
      { label: "B", text: "(1 ; 0)" },
      { label: "C", text: "(1 ; 1)" },
      { label: "D", text: "(0 ; 0)" }
    ],
    answer: "B",
    explanation: "Pour un angle \\(\\theta\\) sur le cercle trigonométrique, les coordonnées sont (cos \\(\\theta\\) ; sin \\(\\theta\\)). En 0 : (cos 0 ; sin 0) = (1 ; 0). C'est le point A."
  },
  {
    id: 3,
    text: "Quelle est la valeur de cos\\(\\left(\\frac{\\pi}{3}\\right)\\) ? On peut s'aider du point D sur le graphique.",
    questionImage: trigDiv(3),
    plotly: trigPlot(),
    choices: [
      { label: "A", text: "\\(\\frac{1}{2}\\)" },
      { label: "B", text: "\\(\\frac{\\sqrt{2}}{2}\\)" },
      { label: "C", text: "\\(\\frac{\\sqrt{3}}{2}\\)" },
      { label: "D", text: "1" }
    ],
    answer: "A",
    explanation: "Le point D, associé à l'angle \\(\\frac{\\pi}{3}\\), a pour coordonnées \\(\\left(\\frac{1}{2} ; \\frac{\\sqrt{3}}{2}\\right)\\). Or l'abscisse d'un point du cercle est son cosinus, donc cos\\(\\left(\\frac{\\pi}{3}\\right) = \\frac{1}{2}\\)."
  },
  {
    id: 4,
    text: "Quelle est la valeur de sin\\(\\left(\\frac{\\pi}{6}\\right)\\) ? On peut s'aider du point B.",
    questionImage: trigDiv(4),
    plotly: trigPlot(),
    choices: [
      { label: "A", text: "\\(\\frac{\\sqrt{3}}{2}\\)" },
      { label: "B", text: "\\(\\frac{\\sqrt{2}}{2}\\)" },
      { label: "C", text: "\\(\\frac{1}{2}\\)" },
      { label: "D", text: "0" }
    ],
    answer: "C",
    explanation: "Le point B, associé à l'angle \\(\\frac{\\pi}{6}\\), a pour coordonnées \\(\\left(\\frac{\\sqrt{3}}{2} ; \\frac{1}{2}\\right)\\). L'ordonnée d'un point du cercle est son sinus, donc sin\\(\\left(\\frac{\\pi}{6}\\right) = \\frac{1}{2}\\)."
  },
  {
    id: 5,
    text: "Quelles sont les coordonnées du point C (angle \\(\\frac{\\pi}{4}\\)) ?",
    questionImage: trigDiv(5),
    plotly: trigPlot(),
    choices: [
      { label: "A", text: "\\(\\left(\\frac{1}{2} ; \\frac{\\sqrt{3}}{2}\\right)\\)" },
      { label: "B", text: "\\(\\left(\\frac{\\sqrt{3}}{2} ; \\frac{1}{2}\\right)\\)" },
      { label: "C", text: "\\(\\left(\\frac{\\sqrt{2}}{2} ; \\frac{\\sqrt{2}}{2}\\right)\\)" },
      { label: "D", text: "(1 ; 1)" }
    ],
    answer: "C",
    explanation: "Pour \\(\\theta = \\frac{\\pi}{4}\\) : cos\\(\\left(\\frac{\\pi}{4}\\right) = \\sin\\left(\\frac{\\pi}{4}\\right) = \\frac{\\sqrt{2}}{2}\\). Le point C est donc situé sur la première bissectrice avec abscisse égale à ordonnée."
  },
  {
    id: 6,
    text: "Quel point a pour coordonnées (0 ; 1) ?",
    questionImage: trigDiv(6),
    plotly: trigPlot(),
    choices: [
      { label: "A", text: "Le point A" },
      { label: "B", text: "Le point C" },
      { label: "C", text: "Le point D" },
      { label: "D", text: "Le point E" }
    ],
    answer: "D",
    explanation: "Le point E correspond à l'angle \\(\\frac{\\pi}{2}\\). Or cos\\(\\left(\\frac{\\pi}{2}\\right) = 0\\) et sin\\(\\left(\\frac{\\pi}{2}\\right) = 1\\), donc E a pour coordonnées (0 ; 1)."
  },
  {
    id: 7,
    text: "Quel angle correspond au point dont l'ordonnée vaut \\(\\frac{\\sqrt{3}}{2}\\) ?",
    questionImage: trigDiv(7),
    plotly: trigPlot(),
    choices: [
      { label: "A", text: "\\(\\frac{\\pi}{6}\\)" },
      { label: "B", text: "\\(\\frac{\\pi}{4}\\)" },
      { label: "C", text: "\\(\\frac{\\pi}{3}\\)" },
      { label: "D", text: "\\(\\frac{\\pi}{2}\\)" }
    ],
    answer: "C",
    explanation: "L'ordonnée d'un point sur le cercle est son sinus. Or sin\\(\\left(\\frac{\\pi}{3}\\right) = \\frac{\\sqrt{3}}{2}\\). C'est le point D, associé à l'angle \\(\\frac{\\pi}{3}\\)."
  },
  {
    id: 8,
    text: "On lit l'abscisse du point B. Quelle valeur trouve-t-on ?",
    questionImage: trigDiv(8),
    plotly: trigPlot(),
    choices: [
      { label: "A", text: "\\(\\frac{1}{2}\\)" },
      { label: "B", text: "\\(\\frac{\\sqrt{2}}{2}\\)" },
      { label: "C", text: "\\(\\frac{\\sqrt{3}}{2}\\)" },
      { label: "D", text: "1" }
    ],
    answer: "C",
    explanation: "Le point B est associé à l'angle \\(\\frac{\\pi}{6}\\). Son abscisse est cos\\(\\left(\\frac{\\pi}{6}\\right) = \\frac{\\sqrt{3}}{2} \\approx 0{,}866\\)."
  },
  {
    id: 9,
    text: "Pour quel point l'abscisse est égale à l'ordonnée ?",
    questionImage: trigDiv(9),
    plotly: trigPlot(),
    choices: [
      { label: "A", text: "Le point A" },
      { label: "B", text: "Le point B" },
      { label: "C", text: "Le point C" },
      { label: "D", text: "Le point D" }
    ],
    answer: "C",
    explanation: "Le point C correspond à l'angle \\(\\frac{\\pi}{4}\\). On a cos\\(\\left(\\frac{\\pi}{4}\\right) = \\sin\\left(\\frac{\\pi}{4}\\right) = \\frac{\\sqrt{2}}{2}\\), donc le point C est situé sur la première bissectrice (y = x)."
  },
  {
    id: 10,
    text: "Quelle est la valeur de cos\\(\\left(\\frac{\\pi}{2}\\right)\\) ? On peut s'aider du point E.",
    questionImage: trigDiv(10),
    plotly: trigPlot(),
    choices: [
      { label: "A", text: "0" },
      { label: "B", text: "\\(\\frac{1}{2}\\)" },
      { label: "C", text: "\\(\\frac{\\sqrt{2}}{2}\\)" },
      { label: "D", text: "1" }
    ],
    answer: "A",
    explanation: "Le point E, associé à \\(\\frac{\\pi}{2}\\), a pour coordonnées (0 ; 1). L'abscisse étant le cosinus, cos\\(\\left(\\frac{\\pi}{2}\\right) = 0\\)."
  },
  // ── Nouvelles questions ───────────────────────────────────────────────────

  // sin manquants
  {
    id: 11,
    text: "Quelle est la valeur de sin(0) ? On peut s'aider du point A.",
    questionImage: trigDiv(11),
    plotly: trigPlot(),
    choices: [
      { label: "A", text: "0" },
      { label: "B", text: "\\(\\frac{1}{2}\\)" },
      { label: "C", text: "\\(\\frac{\\sqrt{2}}{2}\\)" },
      { label: "D", text: "1" }
    ],
    answer: "A",
    explanation: "Le point A (angle 0) a pour coordonnées (1 ; 0). L'ordonnée étant le sinus, sin(0) = 0."
  },
  {
    id: 12,
    text: "Quelle est la valeur de sin\\(\\left(\\frac{\\pi}{4}\\right)\\) ? On peut s'aider du point C.",
    questionImage: trigDiv(12),
    plotly: trigPlot(),
    choices: [
      { label: "A", text: "\\(\\frac{1}{2}\\)" },
      { label: "B", text: "\\(\\frac{\\sqrt{2}}{2}\\)" },
      { label: "C", text: "\\(\\frac{\\sqrt{3}}{2}\\)" },
      { label: "D", text: "1" }
    ],
    answer: "B",
    explanation: "Le point C (angle \\(\\frac{\\pi}{4}\\)) a pour ordonnée sin\\(\\left(\\frac{\\pi}{4}\\right) = \\frac{\\sqrt{2}}{2} \\approx 0{,}707\\)."
  },
  {
    id: 13,
    text: "Quelle est la valeur de sin\\(\\left(\\frac{\\pi}{3}\\right)\\) ? On peut s'aider du point D.",
    questionImage: trigDiv(13),
    plotly: trigPlot(),
    choices: [
      { label: "A", text: "\\(\\frac{1}{2}\\)" },
      { label: "B", text: "\\(\\frac{\\sqrt{2}}{2}\\)" },
      { label: "C", text: "\\(\\frac{\\sqrt{3}}{2}\\)" },
      { label: "D", text: "0" }
    ],
    answer: "C",
    explanation: "Le point D (angle \\(\\frac{\\pi}{3}\\)) a pour coordonnées \\(\\left(\\frac{1}{2} ; \\frac{\\sqrt{3}}{2}\\right)\\). L'ordonnée est le sinus, donc sin\\(\\left(\\frac{\\pi}{3}\\right) = \\frac{\\sqrt{3}}{2}\\)."
  },
  {
    id: 14,
    text: "Quelle est la valeur de sin\\(\\left(\\frac{\\pi}{2}\\right)\\) ? On peut s'aider du point E.",
    questionImage: trigDiv(14),
    plotly: trigPlot(),
    choices: [
      { label: "A", text: "0" },
      { label: "B", text: "\\(\\frac{1}{2}\\)" },
      { label: "C", text: "\\(\\frac{\\sqrt{3}}{2}\\)" },
      { label: "D", text: "1" }
    ],
    answer: "D",
    explanation: "Le point E (angle \\(\\frac{\\pi}{2}\\)) a pour coordonnées (0 ; 1). L'ordonnée étant le sinus, sin\\(\\left(\\frac{\\pi}{2}\\right) = 1\\)."
  },

  // cos manquants
  {
    id: 15,
    text: "Quelle est la valeur de cos(0) ? On peut s'aider du point A.",
    questionImage: trigDiv(15),
    plotly: trigPlot(),
    choices: [
      { label: "A", text: "0" },
      { label: "B", text: "\\(\\frac{\\sqrt{2}}{2}\\)" },
      { label: "C", text: "\\(\\frac{\\sqrt{3}}{2}\\)" },
      { label: "D", text: "1" }
    ],
    answer: "D",
    explanation: "Le point A (angle 0) a pour coordonnées (1 ; 0). L'abscisse étant le cosinus, cos(0) = 1."
  },
  {
    id: 16,
    text: "Quelle est la valeur de cos\\(\\left(\\frac{\\pi}{4}\\right)\\) ? On peut s'aider du point C.",
    questionImage: trigDiv(16),
    plotly: trigPlot(),
    choices: [
      { label: "A", text: "\\(\\frac{1}{2}\\)" },
      { label: "B", text: "\\(\\frac{\\sqrt{2}}{2}\\)" },
      { label: "C", text: "\\(\\frac{\\sqrt{3}}{2}\\)" },
      { label: "D", text: "1" }
    ],
    answer: "B",
    explanation: "Le point C (angle \\(\\frac{\\pi}{4}\\)) a pour abscisse cos\\(\\left(\\frac{\\pi}{4}\\right) = \\frac{\\sqrt{2}}{2} \\approx 0{,}707\\)."
  },

  // Coordonnées manquantes
  {
    id: 17,
    text: "Quelles sont les coordonnées du point B (angle \\(\\frac{\\pi}{6}\\)) ?",
    questionImage: trigDiv(17),
    plotly: trigPlot(),
    choices: [
      { label: "A", text: "\\(\\left(\\frac{1}{2} ; \\frac{\\sqrt{3}}{2}\\right)\\)" },
      { label: "B", text: "\\(\\left(\\frac{\\sqrt{3}}{2} ; \\frac{1}{2}\\right)\\)" },
      { label: "C", text: "\\(\\left(\\frac{\\sqrt{2}}{2} ; \\frac{\\sqrt{2}}{2}\\right)\\)" },
      { label: "D", text: "(0 ; 1)" }
    ],
    answer: "B",
    explanation: "Pour \\(\\theta = \\frac{\\pi}{6}\\) : cos\\(\\left(\\frac{\\pi}{6}\\right) = \\frac{\\sqrt{3}}{2}\\) et sin\\(\\left(\\frac{\\pi}{6}\\right) = \\frac{1}{2}\\). Le point B a donc pour coordonnées \\(\\left(\\frac{\\sqrt{3}}{2} ; \\frac{1}{2}\\right)\\)."
  },
  {
    id: 18,
    text: "Quelles sont les coordonnées du point D (angle \\(\\frac{\\pi}{3}\\)) ?",
    questionImage: trigDiv(18),
    plotly: trigPlot(),
    choices: [
      { label: "A", text: "\\(\\left(\\frac{\\sqrt{3}}{2} ; \\frac{1}{2}\\right)\\)" },
      { label: "B", text: "\\(\\left(\\frac{\\sqrt{2}}{2} ; \\frac{\\sqrt{2}}{2}\\right)\\)" },
      { label: "C", text: "\\(\\left(\\frac{1}{2} ; \\frac{\\sqrt{3}}{2}\\right)\\)" },
      { label: "D", text: "(1 ; 0)" }
    ],
    answer: "C",
    explanation: "Pour \\(\\theta = \\frac{\\pi}{3}\\) : cos\\(\\left(\\frac{\\pi}{3}\\right) = \\frac{1}{2}\\) et sin\\(\\left(\\frac{\\pi}{3}\\right) = \\frac{\\sqrt{3}}{2}\\). Le point D a donc pour coordonnées \\(\\left(\\frac{1}{2} ; \\frac{\\sqrt{3}}{2}\\right)\\)."
  },

  // Conversions radians → degrés
  {
    id: 19,
    text: "Combien de degrés vaut l'angle \\(\\frac{\\pi}{6}\\) radian ?",
    questionImage: trigDiv(19),
    plotly: trigPlot(),
    choices: [
      { label: "A", text: "15°" },
      { label: "B", text: "30°" },
      { label: "C", text: "45°" },
      { label: "D", text: "60°" }
    ],
    answer: "B",
    explanation: "La correspondance est : \\(\\pi\\) rad = 180°. Donc \\(\\frac{\\pi}{6}\\) vaut \\(\\frac{180}{6} = 30°\\). C'est l'angle du point B."
  },
  {
    id: 20,
    text: "Combien de degrés vaut l'angle \\(\\frac{\\pi}{4}\\) radian ?",
    questionImage: trigDiv(20),
    plotly: trigPlot(),
    choices: [
      { label: "A", text: "30°" },
      { label: "B", text: "40°" },
      { label: "C", text: "45°" },
      { label: "D", text: "60°" }
    ],
    answer: "C",
    explanation: "\\(\\frac{\\pi}{4}\\) vaut \\(\\frac{180}{4} = 45°\\). C'est l'angle du point C."
  },
  {
    id: 21,
    text: "Combien de degrés vaut l'angle \\(\\frac{\\pi}{3}\\) radian ?",
    questionImage: trigDiv(21),
    plotly: trigPlot(),
    choices: [
      { label: "A", text: "30°" },
      { label: "B", text: "45°" },
      { label: "C", text: "60°" },
      { label: "D", text: "90°" }
    ],
    answer: "C",
    explanation: "\\(\\frac{\\pi}{3}\\) vaut \\(\\frac{180}{3} = 60°\\). C'est l'angle du point D."
  },
  {
    id: 22,
    text: "Combien de degrés vaut l'angle \\(\\frac{\\pi}{2}\\) radian ?",
    questionImage: trigDiv(22),
    plotly: trigPlot(),
    choices: [
      { label: "A", text: "45°" },
      { label: "B", text: "60°" },
      { label: "C", text: "90°" },
      { label: "D", text: "180°" }
    ],
    answer: "C",
    explanation: "\\(\\frac{\\pi}{2}\\) vaut \\(\\frac{180}{2} = 90°\\). C'est l'angle du point E, qui est donc un angle droit."
  },

  // Conversions degrés → radians
  {
    id: 23,
    text: "Quelle est la mesure en radians d'un angle de 30° ?",
    questionImage: trigDiv(23),
    plotly: trigPlot(),
    choices: [
      { label: "A", text: "\\(\\frac{\\pi}{2}\\)" },
      { label: "B", text: "\\(\\frac{\\pi}{3}\\)" },
      { label: "C", text: "\\(\\frac{\\pi}{4}\\)" },
      { label: "D", text: "\\(\\frac{\\pi}{6}\\)" }
    ],
    answer: "D",
    explanation: "On divise par 180 et on multiplie par \\(\\pi\\) : \\(30 \\times \\frac{\\pi}{180} = \\frac{\\pi}{6}\\). Le point B du graphique est à 30° = \\(\\frac{\\pi}{6}\\)."
  },
  {
    id: 24,
    text: "Quelle est la mesure en radians d'un angle de 45° ?",
    questionImage: trigDiv(24),
    plotly: trigPlot(),
    choices: [
      { label: "A", text: "\\(\\frac{\\pi}{6}\\)" },
      { label: "B", text: "\\(\\frac{\\pi}{4}\\)" },
      { label: "C", text: "\\(\\frac{\\pi}{3}\\)" },
      { label: "D", text: "\\(\\frac{\\pi}{2}\\)" }
    ],
    answer: "B",
    explanation: "\\(45 \\times \\frac{\\pi}{180} = \\frac{\\pi}{4}\\). Le point C du graphique est à 45° = \\(\\frac{\\pi}{4}\\)."
  },
  {
    id: 25,
    text: "Quelle est la mesure en radians d'un angle de 60° ?",
    questionImage: trigDiv(25),
    plotly: trigPlot(),
    choices: [
      { label: "A", text: "\\(\\frac{\\pi}{6}\\)" },
      { label: "B", text: "\\(\\frac{\\pi}{4}\\)" },
      { label: "C", text: "\\(\\frac{\\pi}{3}\\)" },
      { label: "D", text: "\\(\\frac{\\pi}{2}\\)" }
    ],
    answer: "C",
    explanation: "\\(60 \\times \\frac{\\pi}{180} = \\frac{\\pi}{3}\\). Le point D du graphique est à 60° = \\(\\frac{\\pi}{3}\\)."
  },
  {
    id: 26,
    text: "Quelle est la mesure en radians d'un angle de 90° ?",
    questionImage: trigDiv(26),
    plotly: trigPlot(),
    choices: [
      { label: "A", text: "\\(\\frac{\\pi}{6}\\)" },
      { label: "B", text: "\\(\\frac{\\pi}{4}\\)" },
      { label: "C", text: "\\(\\frac{\\pi}{3}\\)" },
      { label: "D", text: "\\(\\frac{\\pi}{2}\\)" }
    ],
    answer: "D",
    explanation: "\\(90 \\times \\frac{\\pi}{180} = \\frac{\\pi}{2}\\). Le point E du graphique est à 90° = \\(\\frac{\\pi}{2}\\), c'est un angle droit."
  },

  // Identification de points par leur angle en degrés
  {
    id: 27,
    text: "Quel point sur le graphique correspond à un angle de 30° ?",
    questionImage: trigDiv(27),
    plotly: trigPlot(),
    choices: [
      { label: "A", text: "Le point A" },
      { label: "B", text: "Le point B" },
      { label: "C", text: "Le point C" },
      { label: "D", text: "Le point D" }
    ],
    answer: "B",
    explanation: "30° = \\(\\frac{\\pi}{6}\\) radian. Dans l'ordre A=0°, B=30°, C=45°, D=60°, E=90°. Le point B est à 30°."
  },
  {
    id: 28,
    text: "Quel point sur le graphique correspond à un angle de 45° ?",
    questionImage: trigDiv(28),
    plotly: trigPlot(),
    choices: [
      { label: "A", text: "Le point A" },
      { label: "B", text: "Le point B" },
      { label: "C", text: "Le point C" },
      { label: "D", text: "Le point D" }
    ],
    answer: "C",
    explanation: "45° = \\(\\frac{\\pi}{4}\\) radian. Dans l'ordre A=0°, B=30°, C=45°, D=60°, E=90°. Le point C est à 45°."
  },
  {
    id: 29,
    text: "Quel point sur le graphique correspond à un angle de 60° ?",
    questionImage: trigDiv(29),
    plotly: trigPlot(),
    choices: [
      { label: "A", text: "Le point B" },
      { label: "B", text: "Le point C" },
      { label: "C", text: "Le point D" },
      { label: "D", text: "Le point E" }
    ],
    answer: "C",
    explanation: "60° = \\(\\frac{\\pi}{3}\\) radian. Dans l'ordre A=0°, B=30°, C=45°, D=60°, E=90°. Le point D est à 60°."
  },
  {
    id: 30,
    text: "Quel point sur le graphique correspond à un angle de 90° ?",
    questionImage: trigDiv(30),
    plotly: trigPlot(),
    choices: [
      { label: "A", text: "Le point B" },
      { label: "B", text: "Le point C" },
      { label: "C", text: "Le point D" },
      { label: "D", text: "Le point E" }
    ],
    answer: "D",
    explanation: "90° = \\(\\frac{\\pi}{2}\\) radian. Dans l'ordre A=0°, B=30°, C=45°, D=60°, E=90°. Le point E est à 90°."
  }
];
