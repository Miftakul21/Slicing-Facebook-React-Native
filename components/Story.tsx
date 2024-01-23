import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { story } from "../assets/data/story";

const Story = () => {
  return (
    <ScrollView style={styles.containerStory} showsHorizontalScrollIndicator={false} horizontal>
      <View style={styles.cardContainerStory}>
        <Image source={require("../assets/images/my-profile.jpg")} style={{ width: 120, height: 120 }} />
        <View style={{ backgroundColor: "blue", borderWidth: 2, borderColor: "white", borderRadius: 50, alignSelf: "center", marginTop: -15 }}>
          <Ionicons name="add" color={"white"} size={28} />
        </View>
        <Text style={{ textAlign: "center", fontSize: 16, fontWeight: "bold" }}>Buat cerita</Text>
      </View>
      {story.map((item, index) => (
        <View style={styles.cardContainerStory} key={index}>
          <View style={styles.statusImageUser}>
            <Image source={item.img_profile} style={{ width: 35, height: 35 }} />
          </View>
          <Image source={item.img_story} style={{ width: 120, height: "100%", resizeMode: "cover" }} />
          <View style={{ position: "absolute", bottom: 10, left: 5 }}>
            <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>{item.name}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  containerStory: {
    marginTop: 4,
    height: 210,
    backgroundColor: "#fff",
    padding: 10,
  },
  cardContainerStory: {
    borderWidth: 2,
    borderColor: "rgba(0,0,0,0.1)",
    borderRadius: 10,
    backgroundColor: "#fff",
    overflow: "hidden",
  },
  statusImageUser: {
    position: "absolute",
    top: 4,
    left: 4,
    borderWidth: 1.6,
    borderColor: "blue",
    borderRadius: 50,
    zIndex: 1,
    overflow: "hidden",
  },
});

export default Story;
