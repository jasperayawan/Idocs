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
          paddingLeft: insets.left + 15,
          paddingRight: insets.right + 15,
          backgroundColor: theme.background,
        },
      ]}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <View style={{ flexDirection: "column", gap: 5 }}>
            <Text style={[styles.text, { color: theme.text }]}>
              <Text style={{ color: theme.selectedButton }}>I</Text>
              docs
            </Text>
            <Text style={[styles.subTitle, { color: "#999999" }]}>
              YOUR COLLECTIONS
            </Text>
          </View>
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
  subTitle: {
    fontSize: 10,
    fontWeight: fontWeights.regular,
  },
  content: {
    flexDirection: "column",
    gap: 20,
  },
});
