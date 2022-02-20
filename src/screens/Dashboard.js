import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import CustomButton from "../components/CustomButton";

const Dashboard = ({ navigation }) => {
  return (
    <View style={styles.body}>
      <View style={styles.container}>
        <View style={styles.subjects}>
          <Text style={styles.subject}>Welcome to</Text>
          <Text style={styles.subject1}>FlashNews</Text>
        </View>
        <View style={styles.logo}>
          <Image
            style={styles.image}
            source={require("../img/newspaper.png")}
          />
        </View>
        <View style={styles.buttons}>
          <CustomButton
            onPress={() => navigation.navigate("Login")}
            text="Login"
          />
          <CustomButton
            onPress={() => navigation.navigate("RegisterStack")}
            text="Register"
          />
        </View>
      </View>
      <View style={styles.footer}>
        <View style={styles.logo1}>
          <Image
            style={styles.image1}
            source={require("../img/visiot_logo.png")}
          />
        </View>
        <View style={styles.footerText}>
          <Text style={styles.footerText1}>Developed by</Text>
          <Text style={styles.footerText2}>Visiot d.o.o. Visoko</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#FF8787",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    height: 125,
    width: "100%",
    flexDirection: "row",
  },
  logo1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  image1: {
    width: 36,
    height: 35,
    marginRight: 10,
  },
  footerText: {
    flex: 1.4,
    justifyContent: "center",
  },
  footerText1: {
    fontStyle: "normal",
    fontSize: 12,
    color: "#ffb3b3",
  },
  footerText2: {
    fontStyle: "normal",
    fontSize: 11,
    color: "#fff",
  },
  subjects: {
    width: 220,
    height: 120,
    marginRight: 30,
  },
  subject: {
    fontSize: 40,
    color: "#fff",
    fontWeight: "300",
    lineHeight: 60,
    letterSpacing: -0.3,
    fontStyle: "normal",
  },
  subject1: {
    fontStyle: "normal",
    color: "#fff",
    fontWeight: "bold",
    fontSize: 34,
  },
  logo: {
    alignItems: "center",
    width: 220,
    height: 125,
  },
  image: {
    width: 103,
    height: 103,
    marginRight: 50,
  },
  buttons: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 129,
    marginTop: 20,
    paddingHorizontal: "10%",
  },
});

export default Dashboard;
