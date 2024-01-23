import React, { useState } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import HomeScreen from "../screens/HomeScreen";
import { FontAwesome, FontAwesome5, Ionicons, MaterialIcons } from "@expo/vector-icons";
import VideoScreen from "../screens/VideoScreen";
import UserScreen from "../screens/UserScreen";
import ShopScreen from "../screens/ShopScreen";
import NotificationScreen from "../screens/NotificationScreen";
import SettingScreen from "../screens/SettingScreen";

const TabMenu = () => {
  const Tab = createMaterialTopTabNavigator();

  const screenOption = {};

  const [swipeEnabled, setSwipeEnabled] = useState(true);

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: ({ color }) => <Ionicons name="home" color={color} size={28} />,
          tabBarActiveTintColor: "blue",
          tabBarInactiveTintColor: "gray",
        }}
      />
      <Tab.Screen
        name="Video"
        component={VideoScreen}
        options={{
          tabBarLabel: ({ color }) => <MaterialIcons name="ondemand-video" color={color} size={28} />,
          tabBarActiveTintColor: "blue",
          tabBarInactiveTintColor: "gray",
        }}
      />
      <Tab.Screen
        name="User"
        component={UserScreen}
        options={{
          tabBarLabel: ({ color }) => <FontAwesome5 name="user-friends" color={color} size={28} />,
          tabBarActiveTintColor: "blue",
          tabBarInactiveTintColor: "gray",
        }}
      />
      <Tab.Screen
        name="Shop"
        component={ShopScreen}
        options={{
          tabBarLabel: ({ color }) => <FontAwesome name="shopping-bag" color={color} size={28} />,
          tabBarActiveTintColor: "blue",
          tabBarInactiveTintColor: "gray",
        }}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          tabBarLabel: ({ color }) => <FontAwesome name="bell-o" color={color} size={28} />,
          tabBarActiveTintColor: "blue",
          tabBarInactiveTintColor: "gray",
        }}
      />
      <Tab.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          tabBarLabel: ({ color }) => <Ionicons name="menu-sharp" color={color} size={28} />,
          tabBarActiveTintColor: "blue",
          tabBarInactiveTintColor: "gray",
        }}
      />
    </Tab.Navigator>
  );
};

export default TabMenu;
