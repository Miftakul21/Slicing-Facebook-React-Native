import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons, Feather, MaterialCommunityIcons, FontAwesome, AntDesign, FontAwesome5 } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";
import { users } from "../../assets/data/users";
import { story } from "../../assets/data/story";
import FBCollage from "react-native-fb-collage";
import Story from "../../components/Story";

const HomeScreen = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {/* Add Status */}
      <View style={styles.containerAddStatus}>
        <Image source={require("../../assets/images/my-profile.jpg")} style={styles.imageProfile} />
        <View style={styles.textStatus}>
          <TextInput style={{ color: "#000", fontWeight: "normal" }} placeholderTextColor={"#000"} placeholder="Apa yang anda pikirkan?" />
        </View>
        <MaterialCommunityIcons name="image-multiple" size={24} color={"#1fc600"} />
      </View>
      {/* Story Facebook */}
      <Story />

      <ScrollView showsVerticalScrollIndicator={false}>
        {users.map((item, index) =>
          item.status.map((status, index) => (
            <View style={styles.containerCardContent} key={index}>
              {/* Top */}
              <View style={styles.topCardContent}>
                <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
                  <View style={[styles.statusImageUser, { position: "relative" }]}>
                    <Image source={item.image[0].img_profile} style={{ width: 35, height: 35 }} />
                  </View>
                  <View>
                    <Text style={{ fontSize: 16, fontWeight: "bold" }}>{item.name}</Text>
                    <View style={{ flexDirection: "row", gap: 10 }}>
                      <Text style={{ fontSize: 14, color: "gray" }}>{status.date_status}</Text>
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
              {status.caption != "" && (
                <View style={styles.containerTextContent}>
                  <Text style={styles.textContent}>{status.caption}</Text>
                </View>
              )}

              {/* Image & Video Posting */}
              <View style={{ backgroundColor: "#fff" }}>
                <FBCollage style={{ width: "100%", height: 500 }} images={status.img} imageOnPress={() => {}} />
              </View>

              {/* Count Like Comment */}
              <View style={styles.likeComentStatus}>
                <View style={{ flexDirection: "row", gap: 5 }}>
                  <Image source={require("../../assets/images/icons/like-outline.png")} style={{ width: 20, height: 20 }} />
                  <Text style={{ fontSize: 15 }}>{status.count_like}</Text>
                </View>
                <Text style={{ fontSize: 15 }}>{status.comment}</Text>
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
          ))
        )}
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  containerAddStatus: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 10,
  },
  imageProfile: {
    width: 50,
    height: 50,
    borderRadius: 50,
    resizeMode: "center",
  },
  textStatus: {
    borderWidth: 1,
    borderColor: "rgba(158, 150, 150, 0.5)",
    width: 280,
    paddingVertical: 5,
    paddingLeft: 10,
    borderRadius: 50,
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
  containerCardContent: {
    marginVertical: 10,
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  topCardContent: {
    flexDirection: "row",
    justifyContent: "space-between",
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

export default HomeScreen;
