import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, Alert } from "react-native";
import TextInputs from "../components/TextInputs";
import CustomButton from "../components/CustomButton";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const RegisterUsername = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [name, setFullName] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [website, setWebsite] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeUsernameHandler = (username) => {
    setUsername(username);
  };

  const onSubmitFormHandler = async () => {
    if (username === "") {
      Alert.alert("Warning!", "Please type in username!");
    } else {
      if (!username.trim()) {
        Alert.alert("Warning!", "Your username is invalid!!");
      } else {
        try {
          const response = await axios.post(
            `https://jsonplaceholder.typicode.com/users`,
            {
              username,
              name,
              phoneNum,
              website,
              country,
              city,
              address,
              zipcode,
              email,
              password,
            }
          );
          if (response.status === 201) {
            Alert.alert(
              `Congratulations, you are registered.Your data is: ${JSON.stringify(
                response.data
              )}`
            );
            /*setUsername("");
            setFullName("");
            setPhoneNum("");
            setWebsite("");
            setCountry("");
            setCity("");
            setAddress("");
            setZipcode("");
            setEmail("");
            setPassword(""); */
          }
        } catch (error) {
          Alert.alert("An error has occured");
        }
      }
    }
  };

  const getRegisterData = async () => {
    try {
      const userData = await AsyncStorage.getItem("UserData");
      if (userData != null) {
        let user = JSON.parse(userData);
        setFullName(user.Name);
        setEmail(user.Email);
        setCity(user.City);
        setAddress(user.Address);
        setZipcode(user.Zipcode);
        setPassword(user.Password);
        setCountry(user.Country);
        setWebsite(user.Website);
        setPhoneNum(user.phoneNum);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRegisterData();
  }, []);

  return (
    <View style={styles.body}>
      <View style={styles.container}>
        <View style={styles.subjects}>
          <View style={styles.subjectRegister}>
            <Text style={styles.subjectRegister1}>Welcome,</Text>
            <Text style={styles.subjectRegister2}>{name}</Text>
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
            This is your <Text style={styles.difText}> final step</Text>
          </Text>
        </View>
        <View style={styles.inputs}>
          <TextInputs
            value={username}
            onChangeText={(value) => {
              setUsername(value);
            }}
            placeholder="Username"
            onChangeText={onChangeUsernameHandler}
          />
        </View>
        <View style={styles.registerField}>
          <CustomButton text="Register" onPress={onSubmitFormHandler} />
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
    width: "95%",
    height: 120,
    flexDirection: "row",
  },
  subjectRegister: {
    flex: 2,
  },
  subjectRegister1: {
    fontStyle: "normal",
    color: "#fff",
    fontWeight: "bold",
    fontSize: 44,
    marginLeft: 10,
    marginTop: 5,
  },
  subjectRegister2: {
    fontStyle: "normal",
    color: "#fff",
    fontSize: 44,
    marginLeft: 10,
    fontWeight: "300",
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
    width: "60%",
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
    marginTop: 40,
  },
  inputRegister: {
    width: 320,
    height: 45,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    borderWidth: 0.3,
    borderColor: "#333",
    marginTop: 10,
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
  buttonRegister: {
    width: 320,
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 30,
    color: "#FF8787",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
  },
  buttonText: {
    color: "#FF8787",
    fontWeight: "800",
    fontSize: 20,
    lineHeight: 29,
    letterSpacing: -0.3,
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

export default RegisterUsername;
