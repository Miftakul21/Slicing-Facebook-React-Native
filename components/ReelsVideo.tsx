import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useRef, useState } from "react";
import { Entypo } from "@expo/vector-icons";
import { reels } from "../assets/data/video";
import { ResizeMode, Video } from "expo-av";

const ReelsVideo = () => {
  const video = useRef(null);
  const [status, setStatus] = useState({});
  return (
    <View style={styles.reelsVideoContainer}>
      <View style={styles.topReelsVideo}>
        <Entypo name="clapperboard" size={25} color={"#000"} />
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Reels</Text>
      </View>
      {/* Video Reels */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {reels.map((item, index) => (
          <View style={styles.videoReels} key={index}>
            <Video source={item.video} useNativeControls isLooping resizeMode={ResizeMode.COVER} onPlaybackStatusUpdate={(status) => setStatus(() => status)} style={{ width: "100%", height: "100%", borderRadius: 10 }} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  reelsVideoContainer: {
    marginVertical: 5,
    padding: 10,
    backgroundColor: "#fff",
  },
  topReelsVideo: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 10,
  },
  videoReels: {
    width: 280,
    height: 450,
    marginVertical: 10,
    marginRight: 10,
  },
});

export default ReelsVideo;
