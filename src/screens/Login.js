import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import TextInputs from "../components/TextInputs";
import CustomButton from "../components/CustomButton";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [users, setUsers] = useState([]);

  const getName = () => {
    try {
      AsyncStorage.getItem("Fullname").then((value) => {
        if (value != null) {
          //navigation.navigate("Dashboard");
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
  const checkEmail = (serverUsers, formData) => {
    const user = serverUsers.find((user) => user.email || formData); // extract the email from the formData
    if (user) {
      navigation.navigate("HomepageStack", {
        screen: "HomePage",
        params: { userId: user.id },
      });
    } else if (email === "") {
      Alert.alert("Warning!", "Please write your email address!");
    } else {
      Alert.alert("Warning!", "Please enter valid email address!");
    }
  };

  const setData = async () => {
    try {
      await AsyncStorage.setItem("Email", email);
      //navigation.navigate("Dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  const getUsersData = async () => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users`
      );
      if (response.status === 200) {
        setUsers(response.data);
        return;
      } else {
        throw new Error("Failed to fetch users");
      }
    } catch (error) {
      console.log("Getting data error", error);
    }
  };

  useEffect(() => {
    getName();
    getUsersData();
    setData();
  }, []);
  return (
    <View style={styles.body}>
      <View style={styles.container}>
        <View style={styles.subjects}>
          <View style={styles.subjectLogin}>
            <Text style={styles.subjectLogin1}>Login</Text>
          </View>
          <View style={styles.logo}>
            <Image
              style={styles.image}
              source={require("../img/newspaper.png")}
            />
          </View>
        </View>
        <View style={styles.insText}>
          <Text style={styles.insText1}>
            Please enter your <Text style={styles.difText}>Email</Text>
          </Text>
        </View>
        <View style={styles.inputs}>
          <TextInputs
            value={email}
            placeholder="Email"
            keyboardType="email-address"
            onChangeText={(value) => {
              setEmail(value);
            }}
          />
        </View>
        <View style={styles.registerField}>
          <Text style={styles.registerFieldTxt}>Don't have a profile yet?</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("RegisterStack")}
          >
            <Text style={styles.registerFieldTxt}>Please register!</Text>
          </TouchableOpacity>
          <CustomButton
            onPress={() => {
              checkEmail(users, email);
            }}
            text="Login"
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
  subjects: {
    width: "90%",
    height: 120,
    flexDirection: "row",
  },
  subjectLogin: {
    flex: 1,
  },
  subjectLogin1: {
    fontStyle: "normal",
    color: "#fff",
    fontWeight: "bold",
    fontSize: 43,
    marginLeft: 10,
  },
  logo: {
    flex: 1,
    alignItems: "flex-end",
  },
  spinnerTextStyle: {
    color: "#111",
  },
  image: {
    width: 120,
    height: 120,
    marginRight: 10,
  },
  insText: {
    width: "85%",
    justifyContent: "center",
    marginTop: 20,
  },
  insText1: {
    fontSize: 23,
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: 30,
    color: "#fff",
  },
  difText: {
    color: "#00004d",
  },
  inputs: {
    width: "85%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  registerField: {
    width: "85%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  registerFieldTxt: {
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 23,
    color: "#fff",
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
    fontSize: 11,
    color: "#ffb3b3",
  },
  footerText2: {
    fontStyle: "normal",
    fontSize: 10,
    color: "#fff",
  },
});

export default Login;
