// Atelier Form design tokens and animation curves

export const COLORS = {
  bordeaux: "#4A1A23",
  hunter: "#233126",
  sage: "#6A7657",
  bone: "#D8D0C2",
  cedar: "#8C603E",
} as const;

export const SPACING = {
  base: "16px",
  "2x": "32px",
  "3x": "48px",
  "4x": "64px",
  "5x": "80px",
  "6x": "96px",
  "8x": "128px",
  "10x": "160px",
} as const;

export const EASING = {
  architectural: [0.22, 1, 0.36, 1] as [number, number, number, number],
  editorialReveal: [0.16, 1, 0.3, 1] as [number, number, number, number],
};
