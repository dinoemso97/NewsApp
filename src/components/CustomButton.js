import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

const CustomButton = ({ onPress, text }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonRegister}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonRegister: {
    width: "100%",
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
});

export default CustomButton;
