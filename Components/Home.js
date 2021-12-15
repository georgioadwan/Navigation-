import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, Image, Button } from "react-native";

const Home = () => {
  const navigation = useNavigation();
  return (
    <>
      <View
        style={{
          flex: 2,
          alignItems: "center",
          justifyContent: "center",
          paddingTop: 150,
        }}
      >
        <Image source={require("../assets/GA.jpg")} width={200} height={200} />
      </View>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          paddingTop: 150,
        }}
      >
        <Text>Home Screen</Text>
        <Button
          title="Contact Me"
          onPress={() => navigation.navigate("AboutMe")}
        />
      </View>
      <View style={{ flex: 2, alignItems: "center", justifyContent: "center" }}>
        <Text>
          Hi, I am Georgio Adwan and this is my picture up there. I am student
          at Sagesse University and majoring in MIS. Click on the contact me
          button for more details on how to get in touch with me.
        </Text>
      </View>
    </>
  );
};

export default Home;
