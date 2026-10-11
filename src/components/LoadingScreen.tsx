import { StyleSheet, Text, View } from "react-native";
import Logo from "../../../assets/svgs/idocsLogo.svg";

export default function LoadingScreen() {
  return (
    <View style={styles.container}>
      <Logo width={100} height={100} />
      <Text style={styles.title}>idocs</Text>
      <Text style={styles.text}>
        Your identity. Your documents. {"\n"}One Place.
      </Text>

      <View style={styles.bottomContainer}>
        <Text style={styles.bottomText}>
          All your documents and Ids {"\n"} are available in one place.
        </Text>
      </View>
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
    position: "relative",
  },
  title: {
    color: "#A1CB35",
    fontSize: 38,
    fontWeight: "bold",
  },
  text: {
    color: "#ebf3d5",
    fontSize: 18,
    textAlign: "center",
  },
  bottomContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomText: {
    color: "#ebf3d5",
    fontSize: 14,
  },
});
