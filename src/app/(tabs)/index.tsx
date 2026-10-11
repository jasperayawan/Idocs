import Cards from "@/components/Cards";
import { Size, fontWeights } from "@/constant/theme";
import { useTheme } from "@/hooks/use-theme";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

export default function HomeScreen() {
  const theme = useTheme();
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView
      style={[
        styles.container,
        {
          flex: 1,
          paddingTop: insets.top,
          paddingLeft: insets.left,
          paddingRight: insets.right,
          backgroundColor: theme.background,
        },
      ]}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Text style={[styles.text, { color: theme.text }]}>Idocs</Text>
          <Cards />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  text: {
    fontSize: Size.title,
    fontWeight: fontWeights.semibold,
  },
  content: {
    flexDirection: "column",
    gap: 10,
  },
});
