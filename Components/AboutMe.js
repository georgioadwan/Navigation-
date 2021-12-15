import React from "react";
import { View, Text } from "react-native";

const AboutMe = () => {
  return (
    <View
      style={{
        flex: 1,
        alignTexts: "center",
        justifyContent: "center",
        paddingLeft: "25%",
      }}
    >
      <Text>My E-mail: gnadwan@hotmail.com</Text>
      <Text>My Phone Number: 76/650559</Text>
      <Text>Job: IT Technician</Text>
    </View>
  );
};

export default AboutMe;
