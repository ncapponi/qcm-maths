// Catégorie 1 – Calcul numérique et algébrique
// Sous-catégorie 1.7 – Effectuer des conversions d'unités
const qcmCategory = "Calcul numérique et algébrique";
const qcmSubcategory = "Effectuer des conversions d'unités";
const questions = [
  {
    id: 1,
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
    id: 2,
    text: "3,5 km correspondent à :",
    choices: [
      { label: "A", text: "350 m" },
      { label: "B", text: "3 500 m" },
      { label: "C", text: "35 000 m" },
      { label: "D", text: "3 500 cm" }
    ],
    answer: "B",
    explanation: "1 km = 1 000 m, donc 3,5 km = 3 500 m."
  },
  {
    id: 3,
    text: "Une vitesse de 72 km/h correspond à :",
    choices: [
      { label: "A", text: "7,2 m/s" },
      { label: "B", text: "20 m/s" },
      { label: "C", text: "72 m/s" },
      { label: "D", text: "12 m/s" }
    ],
    answer: "B",
    explanation: "Pour convertir des km/h en m/s, on divise par 3,6. \\(72 \\div 3{,}6 = 20\\) m/s."
  },
  {
    id: 4,
    text: "2,5 L correspondent à :",
    choices: [
      { label: "A", text: "250 mL" },
      { label: "B", text: "25 cL" },
      { label: "C", text: "250 cL" },
      { label: "D", text: "2 500 cL" }
    ],
    answer: "C",
    explanation: "1 L = 100 cL, donc 2,5 L = 250 cL."
  },
  {
    id: 5,
    text: "Une aire de 3 m² correspond à :",
    choices: [
      { label: "A", text: "300 cm²" },
      { label: "B", text: "3 000 cm²" },
      { label: "C", text: "30 000 cm²" },
      { label: "D", text: "300 000 cm²" }
    ],
    answer: "C",
    explanation: "1 m² = 10 000 cm² (car 1 m = 100 cm et \\(100^2 = 10\\,000\\)). Donc 3 m² = 30 000 cm²."
  },
  {
    id: 6,
    text: "Un volume de 0,5 m³ correspond à :",
    choices: [
      { label: "A", text: "50 L" },
      { label: "B", text: "500 L" },
      { label: "C", text: "5 000 L" },
      { label: "D", text: "5 L" }
    ],
    answer: "B",
    explanation: "1 m³ = 1 000 L, donc 0,5 m³ = 500 L."
  },
  {
    id: 7,
    text: "Une masse de 1,2 tonne correspond à :",
    choices: [
      { label: "A", text: "120 kg" },
      { label: "B", text: "1 200 kg" },
      { label: "C", text: "12 000 kg" },
      { label: "D", text: "12 kg" }
    ],
    answer: "B",
    explanation: "1 tonne = 1 000 kg, donc 1,2 t = 1 200 kg."
  },
  {
    id: 8,
    text: "2 h 45 min correspondent à :",
    choices: [
      { label: "A", text: "2,45 h" },
      { label: "B", text: "2,65 h" },
      { label: "C", text: "2,75 h" },
      { label: "D", text: "2,50 h" }
    ],
    answer: "C",
    explanation: "45 min = \\(\\frac{45}{60}\\) h = 0,75 h. Donc 2 h 45 min = 2,75 h."
  },
  {
    id: 9,
    text: "54 km/h correspondent à :",
    choices: [
      { label: "A", text: "5,4 m/s" },
      { label: "B", text: "15 m/s" },
      { label: "C", text: "54 m/s" },
      { label: "D", text: "9 m/s" }
    ],
    answer: "B",
    explanation: "\\(54 \\div 3{,}6 = 15\\) m/s."
  },
  {
    id: 10,
    text: "Une aire de 450 000 cm² correspond à :",
    choices: [
      { label: "A", text: "4,5 m²" },
      { label: "B", text: "45 m²" },
      { label: "C", text: "450 m²" },
      { label: "D", text: "0,45 m²" }
    ],
    answer: "B",
    explanation: "1 m² = 10 000 cm², donc \\(450\\,000 \\div 10\\,000 = 45\\) m²."
  }
];
