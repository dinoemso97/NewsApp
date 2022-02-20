import React from "react";
import { StyleSheet, TextInput } from "react-native";

const TextInputs = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  keyboardType,
}) => {
  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      style={styles.inputRegister}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
    />
  );
};

const styles = StyleSheet.create({
  inputs: {
    width: "85%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
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
});

export default TextInputs;
