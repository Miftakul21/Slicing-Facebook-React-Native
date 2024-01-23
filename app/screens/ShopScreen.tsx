import { View, Text, TouchableOpacity, StyleSheet, Image, SafeAreaView } from "react-native";
import React from "react";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import { market } from "../../assets/data/market";

const ShopScreen = () => {
  return (
    <>
      <View style={styles.titlePage}>
        <Text style={styles.titleText}>Marketplace</Text>
        <View style={{ flexDirection: "row", gap: 15 }}>
          <TouchableOpacity>
            <FontAwesome name="user" size={30} color={"#000"} />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome name="search" size={30} color={"#000"} />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.containerSectionMarket}>
          <TouchableOpacity style={styles.buttonCategory}>
            <FontAwesome name="edit" size={24} color={"#000"} />
            <Text style={{ fontSize: 18, fontWeight: "600" }}>Jual</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonCategory}>
            <MaterialIcons name="category" size={24} color={"#000"} />
            <Text style={{ fontSize: 18, fontWeight: "600" }}> Kategori</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.containerMarket}>
          <View style={styles.topMarket}>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>Pilihan Hari Ini</Text>
            <View style={{ flexDirection: "row", gap: 6, alignItems: "center" }}>
              <FontAwesome name="map-marker" size={22} color={"blue"} />
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>Surabaya</Text>
            </View>
          </View>
          <View style={styles.containerProduct}>
            {market.map((item, index) => (
              <TouchableOpacity style={styles.cardItem} key={index}>
                <Image source={item.image} style={styles.cardImage} resizeMode={"cover"} />
                <Text style={styles.cardText}>
                  {item.name} - Rp. {item.price}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  titlePage: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 10,
  },
  titleText: {
    fontSize: 22,
    fontWeight: "bold",
  },
  containerSectionMarket: {
    backgroundColor: "#fff",
    padding: 10,
    flexDirection: "row",
    gap: 10,
    borderBottomWidth: 1,
    borderColor: "rgba(0,0,0,.2)",
  },
  buttonCategory: {
    flexDirection: "row",
    backgroundColor: "rgba(0,0,0,.2)",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 8,
    borderRadius: 50,
    gap: 5,
  },
  topMarket: {
    flexDirection: "row",
    padding: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  containerMarket: {
    backgroundColor: "#fff",
  },
  containerProduct: {
    flexDirection: "row",
    marginVertical: 10,
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  cardItem: {
    width: "49%",
    height: 150,
    margin: 2,
  },
  cardImage: {
    width: "100%",
    height: 120,
  },
  cardText: {
    fontWeight: "bold",
    alignSelf: "flex-start",
    fontSize: 14,
    padding: 4,
  },
});

export default ShopScreen;
