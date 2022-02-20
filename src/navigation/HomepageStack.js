import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomePage from "../screens/HomePage";
import NewsPage from "../screens/NewsPage";
const Stack = createStackNavigator();

const HomepageStack = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="HomePage" component={HomePage} />
    <Stack.Screen name="NewsPage" component={NewsPage} />
  </Stack.Navigator>
);

export default HomepageStack;
