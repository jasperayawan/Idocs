import { StyleSheet, Text, View } from "react-native";

export default function documents() {
  return (
    <View style={styles.container}>
      <Text>Documents</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
