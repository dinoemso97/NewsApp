import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Register from "../screens/Register";
import RegisterAddress from "../screens/RegisterAddress";
import RegisterPhone from "../screens/RegisterPhone";
import RegisterUsername from "../screens/RegisterUsername";

const Stack = createStackNavigator();

const RegisterStack = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="Register" component={Register} />
    <Stack.Screen name="RegisterAddress" component={RegisterAddress} />
    <Stack.Screen name="RegisterPhone" component={RegisterPhone} />
    <Stack.Screen name="RegisterUsername" component={RegisterUsername} />
  </Stack.Navigator>
);

export default RegisterStack;
