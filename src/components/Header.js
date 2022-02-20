import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { MaterialIcons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Drawer = createDrawerNavigator();

const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.headerFirst}>
        <MaterialIcons name="menu" size={30} style={styles.iconMenu} />
        <Text style={styles.headerText}>All news</Text>
      </View>
      <View style={styles.headerSecond}>
        <Octicons name="search" size={19} style={styles.iconSearch} />
        <Ionicons
          name="md-person-outline"
          size={21}
          style={styles.iconPerson}
        />
        <MaterialCommunityIcons
          name="calendar-month-outline"
          size={21}
          style={styles.iconCalendar}
        />
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
  iconMenu: {
    color: "#fff",
    marginLeft: 10,
    marginBottom: 10,
  },
  headerText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "300",
    marginBottom: 10,
    marginLeft: 18,
  },
  headerSecond: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  iconSearch: {
    color: "#fff",
    marginBottom: 13,
    marginRight: 35,
  },
  iconPerson: {
    color: "#fff",
    marginBottom: 13,
    marginRight: 15,
  },
  iconCalendar: {
    color: "#fff",
    marginBottom: 13,
    marginRight: 10,
  },
});

export default Header;
