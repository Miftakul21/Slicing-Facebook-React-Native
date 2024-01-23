import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React, { useRef, useState } from "react";
import { AntDesign, Entypo, Feather, FontAwesome, FontAwesome5, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { ResizeMode, Video } from "expo-av";
import { videos } from "../assets/data/video";

const Videos = () => {
  const video = useRef(null);
  const [status, setStatus] = useState({});

  return (
    <>
      {videos.map((item, index) => (
        <View style={styles.containerCardContent} key={index}>
          {/* Top */}
          <View style={styles.topCardContent}>
            <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
              <View style={[styles.statusImageUser, { position: "relative" }]}>
                <Image source={item.image} style={{ width: 35, height: 35 }} />
              </View>
              <View>
                <Text style={{ fontSize: 16, fontWeight: "bold" }}>{item.name}</Text>
                <View style={{ flexDirection: "row", gap: 10 }}>
                  <Text style={{ fontSize: 14, color: "gray" }}>{item.date_video}</Text>
                  <Text>•</Text>
                  <FontAwesome name="globe" size={16} color={"gray"} />
                </View>
              </View>
            </View>
            <View style={{ flexDirection: "row", gap: 15 }}>
              <Feather name="more-horizontal" size={24} color={"gray"} />
              <Ionicons name="close" size={28} color={"gray"} />
            </View>
          </View>

          {/* Caption Posting */}
          {item.caption != "" && (
            <View style={styles.containerTextContent}>
              <Text style={styles.textContent}>{item.caption}</Text>
            </View>
          )}

          {/* Image & Video Posting */}
          <View style={{ backgroundColor: "#fff", padding: 10 }}>
            {/* <View style={{ backgroundColor: "orange", width: "100%", height: 500 }}></View> */}
            <Video source={item.video} useNativeControls isLooping resizeMode={ResizeMode.COVER} onPlaybackStatusUpdate={(status) => setStatus(() => status)} style={{ width: "100%", height: 500, borderRadius: 5 }} />
          </View>

          {/* Count Like Comment */}
          <View style={styles.likeComentStatus}>
            <View style={{ flexDirection: "row", gap: 5 }}>
              <Image source={require("../assets/images/icons/like-outline.png")} style={{ width: 20, height: 20 }} />
              <Text style={{ fontSize: 15 }}>{item.count_like}</Text>
            </View>
            <Text style={{ fontSize: 15 }}>{item.comment}</Text>
          </View>

          {/* Like, Comment, Share */}
          <View style={styles.containerLikeCommentShare}>
            <TouchableOpacity style={styles.containerItems}>
              <AntDesign name="like2" size={24} color={"gray"} />
              <Text style={{ color: "gray", fontSize: 16 }}>Suka</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.containerItems}>
              <MaterialCommunityIcons name="comment-outline" size={24} color={"gray"} />
              <Text style={{ color: "gray", fontSize: 16 }}>Komentar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.containerItems}>
              <FontAwesome5 name="whatsapp" size={24} color={"gray"} />
              <Text style={{ color: "gray", fontSize: 16 }}>Kirim</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.containerItems}>
              <MaterialCommunityIcons name="share-outline" size={32} color={"gray"} />
              <Text style={{ color: "gray", fontSize: 16 }}>Suka</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </>
  );
};

const styles = StyleSheet.create({
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
  containerCardContent: {
    marginVertical: 10,
    backgroundColor: "#fff",
    paddingVertical: 10,
  },
  topCardContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 5,
  },
  containerTextContent: {
    paddingHorizontal: 10,
  },
  textContent: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: "500",
  },
  likeComentStatus: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "rgba(0,0,0, .1)",
  },
  containerLikeCommentShare: {
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
    justifyContent: "space-between",
  },
  containerItems: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },
});

export default Videos;
