import { Size, fontWeights } from "@/constant/theme";
import { useTheme } from "@/hooks/use-theme";
import { StyleSheet, Text, View } from "react-native";

export default function Cards() {
  const theme = useTheme();

  const data = [
    {
      id: 1,
      title: "School",
      color: "#b8e24d",
    },
    {
      id: 2,
      title: "PSA",
      color: "#edd340",
    },
  ];

  return (
    <View style={styles.container}>
      {data.map((d, i) => (
        <View
          key={i}
          style={[styles.cardContainer, { backgroundColor: d.color }]}
        >
          <Text style={[styles.text, { color: theme.background }]}>
            {d.title}
          </Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexWrap: "wrap",
    flexDirection: "row",
    padding: 1,
    gap: 5,
  },
  cardContainer: {
    flex: 1,
    padding: 16,
    height: 200,
    alignItems: "center",
    justifyContent: "center",
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 40,
  },
  text: {
    fontSize: Size.subTitle,
    fontWeight: fontWeights.regular,
  },
});
