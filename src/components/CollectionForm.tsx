import { fontWeights } from "@/constant/theme";
import { useTheme } from "@/hooks/use-theme";
import { useRef, useState } from "react";
import {
    Alert,
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";

export default function CollectionForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const inputRef = useRef<TextInput>(null);
  const theme = useTheme();

  const handleSubmit = async () => {
    if (!title || !description) {
      alert("Input field is required");
      return;
    }
    if (inputRef.current) {
      inputRef.current.blur();
    }

    try {
      const res = await fetch(
        `${process.env.EXPO_PUBLIC_BASE_URL_LOCAL}/api/collection`,
        {
          method: "POST",
          body: JSON.stringify({ title, description }),
        },
      );
      await res.json();
      Alert.alert("Success", "Collection sent successfully.", [
        { text: "Continue" },
      ]);
    } catch (err) {
      alert("Something went wrong.");
      console.error(err);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
        ref={inputRef}
        autoCapitalize="none"
        style={styles.input}
      />
      <TextInput
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        ref={inputRef}
        autoCapitalize="none"
        style={styles.input}
      />
      <Pressable
        style={[styles.button, { backgroundColor: theme.selectedButton }]}
        onPress={handleSubmit}
      >
        <Text style={[styles.textButton, { fontWeight: fontWeights.medium }]}>
          Submit
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "column",
    paddingTop: 10,
    gap: 10,
  },
  input: {
    width: "100%",
    padding: 12,
    borderRadius: 10,
    borderWidth: 2,
    fontSize: 16,
    borderColor: "#191919",
    color: "#fff",
  },
  button: {
    width: "100%",
    padding: 16,
    borderRadius: 50,
    alignItems: "center",
  },
  textButton: {
    color: "#fff",
  },
});
