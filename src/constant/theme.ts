import "@/global.css";

export const Colors = {
  light: {
    background: "#ffffff",
    text: "#000000",
    highlightedText: "#ebf3d5",
    selectedButton: "#A1CB35",
    secondaryBackground: "#A1CB35",
    transparent: "",
  },
  dark: {
    background: "#131313",
    text: "#ffffff",
    highlightedText: "#ebf3d5",
    selectedButton: "#A1CB35",
    secondaryBackground: "#A1CB35",
    transparent: "",
  },
};

export type ThemeColor = keyof typeof Colors.dark & keyof typeof Colors.light;

export const Spacing = {
  half: 2,
  one: 4,
  two: 8,
  three: 16,
  four: 24,
  five: 32,
  six: 64,
} as const;

export const Size = {
  title: 36,
  subTitle: 20,
  text: 16,
} as const;

export const fontWeights = {
  regular: "400" as const,
  medium: "500" as const,
  semibold: "600" as const,
  bold: "700" as const,
};
