import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <ScrollView
      style={[styles.container, { backgroundColor: "#000000" }]}
      contentContainerStyle={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
      showsVerticalScrollIndicator={false}
    >
      <View>
        <Text style={styles.text}>Hello World</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  text: {
    color: "#ffffff",
  },
});
