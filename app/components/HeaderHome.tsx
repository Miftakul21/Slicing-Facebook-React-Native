import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, AntDesign, Feather } from "@expo/vector-icons";

const HeaderHome = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerLogo}>facebook</Text>
      <View style={styles.headerMenu}>
        <Ionicons name="add-circle" size={30} color={"#000"} />
        <Ionicons name="search" size={30} color={"#000"} />
        <Feather name="message-circle" size={30} color={"#000"} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    backgroundColor: "#fff",
  },
  headerLogo: {
    fontSize: 30,
    color: "blue",
    fontWeight: "bold",
  },
  headerMenu: {
    flexDirection: "row",
    gap: 10,
  },
});

export default HeaderHome;
