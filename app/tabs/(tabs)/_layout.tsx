import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import { useClientOnlyValue } from "@/components/useClientOnlyValue";

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={20} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
        tabBarStyle: {
          backgroundColor: "#1e293b", // slate-800
          borderTopColor: "#475569", // slate-600
          borderTopWidth: 1,
        },
        tabBarActiveTintColor: "#ffffff",
        tabBarInactiveTintColor: "#94a3b8", // slate-400
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Affirmation",
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          headerStyle: {
            backgroundColor: "#1e293b",
          },
          headerTintColor: "#ffffff",
        }}
      />

      <Tabs.Screen
        name="designations"
        options={{
          title: "Designations",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="calendar" color={color} />
          ),
          headerStyle: {
            backgroundColor: "#1e293b",
          },
          headerTintColor: "#ffffff",
        }}
      />
    </Tabs>
  );
}
