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
    background: "#000000",
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
