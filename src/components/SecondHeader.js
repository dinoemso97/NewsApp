import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { MaterialIcons } from "@expo/vector-icons";

const Drawer = createDrawerNavigator();

const SecondHeader = ({ navigation }) => {
  return (
    <View style={styles.header}>
      <View style={styles.headerFirst}>
        <MaterialIcons
          name="arrow-back-ios"
          size={24}
          style={styles.iconArrow}
        />
        <TouchableOpacity>
          <Text style={styles.headerText}>Sport</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.headerSecond}>
        <MaterialIcons name="menu" size={26} style={styles.iconMenu} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: "16%",
    backgroundColor: "#FF8787",
    width: "100%",
    flexDirection: "row",
  },
  headerFirst: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
  },
  iconArrow: {
    color: "#fff",
    marginLeft: 20,
    marginBottom: 15,
  },
  iconMenu: {
    color: "#fff",
    marginBottom: 12,
    marginRight: 15,
  },
  headerText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "300",
    marginBottom: 13,
    marginLeft: 7,
  },
  headerSecond: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
});

export default SecondHeader;
