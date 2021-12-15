import React from "react";
import { View, Text, Image } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Components/Home";
import AboutMe from "./Components/AboutMe";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Group>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="AboutMe" component={AboutMe} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default StackNavigator;
