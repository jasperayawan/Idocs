import { StyleSheet, Text, View } from "react-native";
import Logo from "../../assets/svgs/idocsLogo.svg";

export default function Index() {
  return (
    <View style={styles.container}>
      <Logo width={100} height={100} />
      <Text style={styles.title}>idocs</Text>
      <Text style={styles.text}>
        Your identity. Your documents. {"\n"}One Place.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000000",
    flexDirection: "column",
    gap: 15,
  },
  title: {
    color: "#A1CB35",
    fontSize: 38,
    fontWeight: "bold",
  },
  text: {
    color: "#ebf3d5",
    fontSize: 16,
    textAlign: "center",
  },
});
