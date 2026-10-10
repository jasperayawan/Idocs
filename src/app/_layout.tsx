import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="documents" options={{ headerShown: false }} />
        <Stack.Screen name="more" options={{ headerShown: false }} />
      </Stack>
    </>
  );
}
