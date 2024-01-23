import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import React from "react";
import { users } from "../../assets/data/users";
import { FontAwesome } from "@expo/vector-icons";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

const UserScreen = () => {
  type userType = {
    name: string;
    img_profile: any;
    count_same_friend: string;
  };

  const CardItem = ({ name, img_profile, count_same_friend }: userType) => (
    <TouchableOpacity style={styles.containerCard}>
      <View>
        <Image source={img_profile} style={styles.imageCard} />
      </View>
      <View>
        <Text style={styles.itemName}>{name}</Text>
        <Text style={styles.countName}>{count_same_friend}</Text>

        <View style={{ marginVertical: 10, gap: 5 }}>
          <TouchableOpacity style={styles.buttonConfirm}>
            <Text style={styles.textButtonConfirm}>Konfirmasi</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonHapus}>
            <Text style={styles.textButtonHapus}>Hapus</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <>
      <View style={styles.titlePage}>
        <Text style={styles.titleText}>Teman</Text>
        <TouchableOpacity>
          <FontAwesome name="search" size={30} color={"#000"} />
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.containerList}>
          <Text style={styles.titleText}>Orang yang mungking Anda kenal</Text>
          <FlatList
            scrollEnabled={false}
            data={users}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <CardItem name={item.name} img_profile={item.image[0].img_profile} count_same_friend={item.count_same_friend} />}
          />
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
  containerList: {
    padding: 10,
    backgroundColor: "#fff",
  },
  containerCard: {
    flexDirection: "row",
    gap: 20,
    marginVertical: 10,
  },
  imageCard: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  itemName: {
    fontSize: 20,
    fontWeight: "600",
  },
  countName: {
    fontSize: 16,
    fontWeight: "400",
  },
  buttonConfirm: {
    backgroundColor: "#1877F2",
    paddingVertical: 10,
    paddingHorizontal: 80,
    borderRadius: 8,
  },
  textButtonConfirm: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonHapus: {
    backgroundColor: "rgba(0,0,0, 0.2)",
    paddingVertical: 10,
    paddingHorizontal: 80,
    borderRadius: 8,
  },
  textButtonHapus: {
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
  },
});

export default UserScreen;
