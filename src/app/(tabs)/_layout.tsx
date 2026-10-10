import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { View } from "react-native";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#A1CB35",
        tabBarShowLabel: false,
        tabBarInactiveTintColor: "#8E8E93",
        tabBarStyle: {
          backgroundColor: "#0f0f0f",
          borderTopColor: "#000000",
          justifyContent: "center",
          alignItems: "center",
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          borderTopWidth: 1,
          position: "absolute",
          bottom: 0,
          left: 10,
          right: 10,
          height: 75,
          elevation: 0,
        },
        tabBarItemStyle: {
          paddingVertical: 75 / 2 - 32 / 1.6,
        },
        tabBarIconStyle: {
          alignItems: "center",
        },
        tabBarLabelStyle: {
          fontSize: 10,
          fontWeight: "bold",
          color: "#000",
        },
        headerTitleStyle: {
          fontWeight: "600",
          color: "#A1CB35",
          fontSize: 20,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => (
            <View
              style={{
                backgroundColor: focused ? "#A1CB35" : "",
                borderRadius: 17,
                height: 50,
                width: 70,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Ionicons
                name="home"
                size={size}
                color={focused ? "A1CB35" : "#41493a"}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="documents"
        options={{
          title: "Documents",
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => (
            <View
              style={{
                backgroundColor: focused ? "#A1CB35" : "",
                borderRadius: 17,
                height: 50,
                width: 70,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Ionicons
                name="document"
                size={size}
                color={focused ? "A1CB35" : "#41493a"}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="more"
        options={{
          title: "More",
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => (
            <View
              style={{
                backgroundColor: focused ? "#A1CB35" : "",
                borderRadius: 17,
                height: 50,
                width: 70,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Ionicons
                name="menu"
                size={size}
                color={focused ? "A1CB35" : "#41493a"}
              />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}
