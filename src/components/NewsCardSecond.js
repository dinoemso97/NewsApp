import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";
const NewsCardSecond = ({ info, imageURL, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.newsPageTwoImg}>
      <View style={styles.newsPageImage}>
        <Image style={styles.imageNews} source={imageURL} />
        <Text style={styles.newsPageTwoText}>{info}</Text>
      </View>
      <View style={styles.newsPageTwoIcon}>
        <View style={styles.textHoursDiv}>
          <Text style={styles.textHours1}>1 h ago</Text>
        </View>
        <View style={styles.newsPageIcons2}>
          <Entypo
            style={styles.chatIcon1}
            name="chat"
            size={22}
            color="black"
          />
          <Entypo
            style={styles.shareIcon2}
            name="share"
            size={22}
            color="black"
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  HomePageBody: {
    flex: 1,
  },
  flatList: {
    flex: 1,
    height: 850,
  },
  flatLists: {
    flex: 1,
  },
  newsPageOne: {
    height: "55%",
    flex: 1,
  },
  newsPageOneHash: {
    width: "100%",

    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  hashText: {
    color: "#2E3A59",
    fontSize: 11,
    lineHeight: 17,
    marginRight: 20,
    marginLeft: 26,
    marginTop: 6,
  },
  newsPageTwoImg: {
    width: "100%",
    height: 300,
    marginTop: 20,
  },
  newsPageImage: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    height: "90%",
  },
  newsPageTwoText: {
    width: "85%",
    fontSize: 16,
    fontWeight: "bold",
    lineHeight: 20,
    color: "#2e3a59",
    fontStyle: "normal",
    marginTop: 20,
    marginRight: 30,
  },
  newsPageTwoIcon: {
    width: "100%",
    height: "10%",
    flexDirection: "row",
    marginTop: 10,
  },
  textHoursDiv: {
    flex: 1,
  },
  textHours1: {
    color: "#9CA3AF",
    fontSize: 13,
    lineHeight: 19,
    marginLeft: 13,
  },
  newsPageIcons2: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  chatIcon1: {
    marginRight: 22,
  },
  shareIcon2: {
    marginRight: 15,
  },
  newsSecondPage: {
    height: 380,
    marginTop: 30,
    flex: 1,
  },
  divOne: {
    width: "100%",
    height: 3,
    backgroundColor: "#e2e6e9",
  },
  newsThirdPage: {
    flex: 1,

    marginTop: 10,
  },
  newsThirdPageSubject: {
    color: "#FF8787",
    fontSize: 20,
    fontWeight: "600",
    fontSize: 20,
    marginLeft: 15,
    marginTop: 5,
    marginBottom: 25,
  },
});

export default NewsCardSecond;
