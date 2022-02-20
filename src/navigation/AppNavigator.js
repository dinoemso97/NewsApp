import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import RegisterStack from "./RegisterStack";
import Dashboard from "../screens/Dashboard";
import Login from "../screens/Login";
import HomepageStack from "./HomepageStack";

const Stack = createStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
    initialRouteName="Dashboard"
  >
    <Stack.Screen name="Dashboard" component={Dashboard} />
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="RegisterStack" component={RegisterStack} />
    <Stack.Screen name="HomepageStack" component={HomepageStack} />
  </Stack.Navigator>
);
export default AppNavigator;
