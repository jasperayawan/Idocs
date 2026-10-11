import { Colors } from "@/constant/theme";
import { useColorScheme } from "@/hooks/use-color-theme";

export function useTheme() {
  const scheme = useColorScheme();
  const theme = scheme === "unspecified" ? "light" : scheme;

  return Colors[theme];
}
