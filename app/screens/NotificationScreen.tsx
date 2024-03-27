import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

const NotificationScreen = () => {
  return (
    <>
      <View style={styles.titlePage}>
        <Text style={styles.titleText}>Notifikasi</Text>
        <TouchableOpacity>
          <FontAwesome name="search" size={30} color={"#000"} />
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>Terdahulu</Text>
        </View>
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
  },
  titleText: {
    fontSize: 22,
    fontWeight: "bold",
  },
});

export default NotificationScreen;
