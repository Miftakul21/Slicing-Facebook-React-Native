import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Image } from "react-native";
import React from "react";
import { AntDesign, Entypo, Feather, FontAwesome, FontAwesome5, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { ResizeMode, Video } from "expo-av";
import { reels, videos } from "../../assets/data/video";
import ReelsVideo from "../../components/ReelsVideo";
import Videos from "../../components/Videos";

const VideoScreen = () => {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

  return (
    <>
      <View style={styles.titlePage}>
        <Text style={styles.titleText}>Video</Text>
        <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
          <TouchableOpacity>
            <Ionicons name="person" size={28} color={"#000"} />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome name="search" size={28} color={"#000"} />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Videos */}
        <Videos />
        {/* Reels Videos */}
        <ReelsVideo />
        {/* Videos */}
        <Videos />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  titlePage: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#fff",
    borderBottomColor: "rgba(0,0,0,.1)",
    borderBottomWidth: 1.5,
    // position: "sticky",
  },
  titleText: {
    fontSize: 22,
    fontWeight: "bold",
  },
});

export default VideoScreen;
