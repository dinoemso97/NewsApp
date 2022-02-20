import React, { useState } from "react";
import { StyleSheet, Text, View, Image, Alert } from "react-native";
import CustomButton from "../components/CustomButton";
import TextInputs from "../components/TextInputs";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Register = ({ navigation }) => {
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeNameHandler = (fullname) => {
    setFullName(fullname);
  };
  const onChangeEmailHandler = (email) => {
    setEmail(email);
  };
  const onChangePassHandler = (password) => {
    setPassword(password);
  };

  const validateEmail = (email) => {
    var re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  const validatePassword = (password) => {
    var re = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
    );
    return re.test(password);
  };

  const setData = async () => {
    if (fullname === "" || email === "" || password === "") {
      Alert.alert("Warning!", "Please write all inputs!");
    } else {
      if (!fullname.trim() || !email.trim() || !password.trim()) {
        Alert.alert("Warning!", "Your inputs are is invalid!");
      } else {
        if (!validateEmail(email)) {
          Alert.alert("Warning!", "Your email is invalid!");
        } else if (!validatePassword(password)) {
          Alert.alert(
            "Warning!",
            "Your password must contain min 8 characters,one upper case, symbol and number!"
          );
        } else {
          try {
            let user = {
              Name: fullname,
              Email: email,
              Password: password,
            };
            await AsyncStorage.setItem("UserData", JSON.stringify(user));
            navigation.navigate("RegisterAddress");
          } catch (error) {
            console.log(error);
          }
        }
      }
    }
  };

  return (
    <View style={styles.body}>
      <View style={styles.container}>
        <View style={styles.subjects}>
          <View style={styles.subjectRegister}>
            <Text style={styles.subjectRegister1}>Register</Text>
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
            Glad to have you here, but first we need some
            <Text style={styles.difText}> info</Text>
          </Text>
        </View>
        <View style={styles.inputs}>
          <TextInputs
            value={fullname}
            onChangeText={(value) => {
              setFullName(value);
            }}
            placeholder="Full name"
            onChangeText={onChangeNameHandler}
          />
          <TextInputs
            value={email}
            onChangeText={(value) => {
              setEmail(value);
            }}
            placeholder="Email"
            onChangeText={onChangeEmailHandler}
          />

          <TextInputs
            value={password}
            onChangeText={(value) => {
              setPassword(value);
            }}
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={onChangePassHandler}
          />
        </View>
        <View style={styles.registerField}>
          <Text style={styles.registerFieldTxt}>
            *Must contain at least one upper case,symbol and number!
          </Text>
          <CustomButton onPress={setData} text="Next" />
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
    marginTop: 40,
  },
  subjects: {
    width: "90%",
    height: 120,
    flexDirection: "row",
  },
  subjectRegister: {
    flex: 1,
  },
  subjectRegister1: {
    fontStyle: "normal",
    color: "#fff",
    fontWeight: "bold",
    fontSize: 41,
    marginLeft: 10,
    marginTop: 5,
  },
  logo: {
    flex: 1,
    alignItems: "flex-end",
  },
  image: {
    width: 120,
    height: 120,
    marginRight: 10,
  },
  insText: {
    width: "55%",
    justifyContent: "center",
    marginTop: 10,
  },
  insText1: {
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: 30,
    color: "#fff",
    textAlign: "center",
  },
  difText: {
    color: "#00004d",
  },
  inputs: {
    width: "85%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
  },
  registerField: {
    width: "85%",
    justifyContent: "center",
    alignItems: "flex-end",
    marginTop: 5,
  },
  registerFieldTxt: {
    width: 230,
    fontSize: 10,
    lineHeight: 13,
    color: "#00004d",
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

export default Register;
