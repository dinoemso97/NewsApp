import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, Alert } from "react-native";
import TextInputs from "../components/TextInputs";
import CustomButton from "../components/CustomButton";
import AsyncStorage from "@react-native-async-storage/async-storage";
const RegisterAddress = ({ navigation }) => {
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullName] = useState("");

  const onChangeCountryHandler = (country) => {
    setCountry(country);
  };
  const onChangeCityHandler = (city) => {
    setCity(city);
  };
  const onChangeAddressHandler = (address) => {
    setAddress(address);
  };
  const onChangeZipcodeHandler = (zipcode) => {
    setZipcode(zipcode);
  };
  const setData = async () => {
    if (country === "" || city === "" || address === "" || zipcode === "") {
      Alert.alert("Warning!", "Please write all inputs!");
    } else {
      if (
        !zipcode.trim() ||
        !country.trim() ||
        !city.trim() ||
        !address.trim()
      ) {
        Alert.alert("Warning!", "Your inputs is invalid");
      } else {
        try {
          let user = {
            Country: country,
            City: city,
            Address: address,
            Zipcode: zipcode,
            Name: fullname,
            Email: email,
            Password: password,
          };
          await AsyncStorage.setItem("UserData", JSON.stringify(user));
          navigation.navigate("RegisterPhone");
        } catch (error) {
          console.log(error);
        }
      }
    }
  };

  const getRegisterData = async () => {
    try {
      const userData = await AsyncStorage.getItem("UserData");
      if (userData !== null) {
        let user = JSON.parse(userData);
        setFullName(user.Name);
        setEmail(user.Email);
        setPassword(user.Password);
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
            <Text style={styles.subjectRegister2}>{fullname}</Text>
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
            You are one step closer to
            <Text style={styles.difText}> registration</Text>
          </Text>
        </View>
        <View style={styles.inputs}>
          <TextInputs
            value={country}
            onChangeText={(value) => {
              setCountry(value);
            }}
            placeholder="Country"
            onChangeText={onChangeCountryHandler}
          />
          <TextInputs
            value={city}
            onChangeText={(value) => {
              setCity(value);
            }}
            placeholder="City"
            onChangeText={onChangeCityHandler}
          />
          <TextInputs
            value={address}
            onChangeText={(value) => {
              setAddress(value);
            }}
            placeholder="Address"
            onChangeText={onChangeAddressHandler}
          />
          <TextInputs
            value={zipcode}
            onChangeText={(value) => {
              setZipcode(value);
            }}
            placeholder="Zipcode"
            onChangeText={onChangeZipcodeHandler}
          />
        </View>
        <View style={styles.registerField}>
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

export default RegisterAddress;
