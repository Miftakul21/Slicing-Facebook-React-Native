import { View, Text } from "react-native";
import React from "react";
import { getFocusedRouteNameFromRoute, NavigationContainer, useRoute } from "@react-navigation/native";
import TabMenu from "./components/TabMenu";
import HeaderHome from "./components/HeaderHome";

const App = () => {
  return (
    <NavigationContainer independent={true}>
      <HeaderHome />
      <TabMenu />
    </NavigationContainer>
  );
};

export default App;
