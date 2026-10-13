import { svgs } from "@/constant/svgs";
import { fontWeights } from "@/constant/theme";
import { useTheme } from "@/hooks/use-theme";
import { CardDataProps } from "@/types/type";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

export default function Cards({}) {
  const theme = useTheme();

  const data: CardDataProps[] = [
    {
      id: 1,
      title: "School",
      subTitle: "Academic redocs & IDs",
      color: "#9DBB50",
    },
    {
      id: 2,
      title: "PSA",
      subTitle: "Birth, marriage & more",
      color: "#BBB850",
    },
  ];

  return (
    <View style={styles.container}>
      {data.map((d, i) => (
        <View
          key={i}
          style={[styles.cardContainer, { backgroundColor: d.color }]}
        >
          {d.id === 1 ? (
            <svgs.docu width={100} height={100} />
          ) : (
            <svgs.card width={100} height={100} />
          )}

          <View style={styles.bottomContainerContent}>
            <View style={styles.bottomContent}>
              <Text style={[styles.text, { color: theme.background }]}>
                {d.title}
              </Text>
              <Text style={[styles.subTitle, { color: theme.background }]}>
                {d.subTitle}
              </Text>
            </View>
            <Ionicons name="arrow-forward" size={20} />
          </View>
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
    gap: 10,
  },
  cardContainer: {
    position: "relative",
    flex: 1,
    height: 174,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 14,
    gap: 10,
  },
  bottomContainerContent: {
    paddingLeft: 10,
    paddingRight: 10,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  bottomContent: {
    flexDirection: "column",
    gap: 5,
  },
  text: {
    fontSize: 16,
    fontWeight: fontWeights.bold,
  },
  subTitle: {
    fontSize: 10,
    fontWeight: fontWeights.regular,
  },
});
