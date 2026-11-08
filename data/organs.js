// Anatomy reference data. General educational information only — not medical advice.
window.SYSTEMS = {
  nervous: { name: "Nervous", color: "#8b5cf6" },
  cardiovascular: { name: "Cardiovascular", color: "#e11d48" },
  respiratory: { name: "Respiratory", color: "#0ea5e9" },
  digestive: { name: "Digestive", color: "#f59e0b" },
  urinary: { name: "Urinary", color: "#14b8a6" },
  endocrine: { name: "Endocrine", color: "#ec4899" },
  lymphatic: { name: "Lymphatic / Immune", color: "#22c55e" },
};

window.ORGANS = [
  {
    id: "brain", name: "Brain", system: "nervous",
    shape: { type: "ellipse", cx: 200, cy: 62, rx: 34, ry: 28 },
    weight: "About 1.3–1.4 kg in adults",
    summary: "The control centre of the body. It processes sensory information, coordinates movement, and is responsible for thought, memory, emotion and language.",
    facts: [
      "Contains roughly 86 billion neurons.",
      "Uses about 20% of the body's energy while making up ~2% of its mass.",
      "Main regions: cerebrum, cerebellum and brainstem.",
    ],
  },
  {
    id: "thyroid", name: "Thyroid", system: "endocrine",
    shape: { type: "ellipse", cx: 200, cy: 138, rx: 14, ry: 6 },
    weight: "About 20–25 g",
    summary: "A butterfly-shaped gland in the neck that produces hormones (T3 and T4) regulating metabolism, heart rate and body temperature.",
    facts: [
      "Needs iodine from the diet to make its hormones.",
      "Also produces calcitonin, which helps regulate calcium.",
    ],
  },
  {
    id: "lung-left", name: "Lungs", system: "respiratory",
    shape: { type: "path", d: "M150 170 C125 180 118 230 122 285 C135 295 165 292 178 282 L180 190 C175 175 162 168 150 170 Z M250 170 C275 180 282 230 278 285 C265 295 235 292 222 282 L220 190 C225 175 238 168 250 170 Z" },
    weight: "About 1.1–1.3 kg combined",
    summary: "The pair of organs where gas exchange happens: oxygen moves into the blood and carbon dioxide moves out, across millions of tiny air sacs called alveoli.",
    facts: [
      "The right lung has three lobes; the left has two, leaving room for the heart.",
      "Around 300–500 million alveoli give a surface area roughly the size of a tennis court.",
      "An adult breathes about 12–20 times a minute at rest.",
    ],
  },
  {
    id: "heart", name: "Heart", system: "cardiovascular",
    shape: { type: "path", d: "M200 205 C190 190 168 195 170 215 C172 235 195 250 205 262 C215 248 232 232 230 214 C228 196 208 192 200 205 Z" },
    weight: "About 250–350 g",
    summary: "A muscular pump with four chambers that circulates blood through the body, delivering oxygen and nutrients and removing waste.",
    facts: [
      "Beats around 100,000 times a day.",
      "Pumps roughly 5 litres of blood per minute at rest.",
      "Has its own electrical system, starting at the sinoatrial (SA) node.",
    ],
  },
  {
    id: "liver", name: "Liver", system: "digestive",
    shape: { type: "path", d: "M140 300 C150 288 215 286 240 296 C236 318 205 330 170 330 C152 328 140 318 140 300 Z" },
    weight: "About 1.4–1.6 kg",
    summary: "The largest internal organ. It filters blood, processes nutrients, stores glycogen and vitamins, makes bile and breaks down many drugs and toxins.",
    facts: [
      "Performs hundreds of distinct functions.",
      "Can regenerate after part of it is removed.",
      "Receives blood from both the hepatic artery and the portal vein.",
    ],
  },
  {
    id: "stomach", name: "Stomach", system: "digestive",
    shape: { type: "path", d: "M228 300 C255 298 265 320 258 340 C250 360 222 362 212 350 C222 340 238 335 236 322 C235 312 228 308 228 300 Z" },
    weight: "Holds about 1–1.5 litres when full",
    summary: "A muscular J-shaped organ that mixes food with acid and enzymes, beginning protein digestion before passing it to the small intestine.",
    facts: [
      "Stomach acid has a pH of about 1.5–3.5.",
      "Its lining renews itself every few days to protect against the acid.",
    ],
  },
  {
    id: "pancreas", name: "Pancreas", system: "endocrine",
    shape: { type: "path", d: "M178 352 C195 345 230 345 248 350 C246 358 230 362 210 362 C192 362 180 360 178 352 Z" },
    weight: "About 70–100 g",
    summary: "A gland with two jobs: it releases digestive enzymes into the small intestine and produces hormones, including insulin and glucagon, that control blood sugar.",
    facts: [
      "Insulin is made by beta cells in the islets of Langerhans.",
      "Produces about 1–1.5 litres of digestive juice a day.",
    ],
  },
  {
    id: "spleen", name: "Spleen", system: "lymphatic",
    shape: { type: "ellipse", cx: 268, cy: 318, rx: 10, ry: 18 },
    weight: "About 150–200 g",
    summary: "Filters the blood, removes old red blood cells and helps the immune system fight certain bacteria.",
    facts: [
      "People can live without a spleen, though infection risk rises.",
      "Stores a reserve of blood and platelets.",
    ],
  },
  {
    id: "kidneys", name: "Kidneys", system: "urinary",
    shape: { type: "path", d: "M150 360 C140 362 136 385 142 400 C150 410 162 404 162 392 C160 384 164 372 150 360 Z M250 360 C260 362 264 385 258 400 C250 410 238 404 238 392 C240 384 236 372 250 360 Z" },
    weight: "About 120–170 g each",
    summary: "Two bean-shaped organs that filter waste and excess water from the blood to make urine, and help control blood pressure and red blood cell production.",
    facts: [
      "Together they filter about 180 litres of blood plasma a day.",
      "Each contains around a million filtering units called nephrons.",
    ],
  },
  {
    id: "intestines", name: "Intestines", system: "digestive",
    shape: { type: "path", d: "M160 372 C150 380 150 450 165 462 C185 470 215 470 235 462 C250 450 250 380 240 372 C232 380 168 380 160 372 Z" },
    weight: "Small ~6–7 m long; large ~1.5 m long",
    summary: "The small intestine absorbs most nutrients from food; the large intestine absorbs water and salts and forms stool. Together they host trillions of gut bacteria.",
    facts: [
      "Villi and microvilli massively increase the small intestine's absorbing surface.",
      "The gut microbiome contains roughly as many bacterial cells as the body has human cells.",
    ],
  },
  {
    id: "bladder", name: "Bladder", system: "urinary",
    shape: { type: "ellipse", cx: 200, cy: 488, rx: 18, ry: 13 },
    weight: "Holds about 400–600 ml",
    summary: "A stretchy, muscular sac that stores urine from the kidneys until it is released.",
    facts: [
      "The urge to urinate usually starts at about 150–300 ml.",
      "Its wall is made of the detrusor muscle.",
    ],
  },
];
