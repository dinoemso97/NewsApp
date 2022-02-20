import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const Comments = ({ comment, userPost }) => {
  return (
    <View style={styles.commentBoxOne}>
      <View style={styles.commentBoxIcons}>
        <View style={styles.commentIcons1}>
          <View style={styles.shortIcons1}>
            <FontAwesome name="long-arrow-up" size={12} color="#059669" />
            <Text style={styles.shortNumber1}>151</Text>
          </View>
          <View style={styles.shortIcons2}>
            <FontAwesome name="long-arrow-down" size={12} color="#EF4444" />
            <Text style={styles.shortNumber2}>2</Text>
          </View>
        </View>
        <View style={styles.commentIcons2}>
          <Feather
            style={styles.reportIcon}
            name="flag"
            size={12}
            color="black"
          />
          <Text style={styles.reportText}>Report</Text>
        </View>
      </View>
      <View style={styles.commentBoxFirstPart}>
        <View style={styles.commentImg}>
          <Image
            style={styles.imageComment}
            source={require("../img/User.png")}
          />
        </View>
        <View style={styles.commentText1}>
          <Text style={styles.commentNameUser1}>{userPost}</Text>
          <Text style={styles.commentHoursAgo}>3 min ago</Text>
        </View>
        <View style={styles.commentButton}></View>
      </View>
      <View style={styles.commentTexts}>
        <Text style={styles.commentText}>{comment?.substring(0, 40)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  commentBoxOne: {
    marginTop: 10,
    width: "90%",
    height: 150,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    marginLeft: 10,
  },

  commentBoxFirstPart: {
    flexDirection: "row",
    marginTop: 20,
  },
  commentImg: {
    width: "15%",
  },
  imageComment: {},
  commentText1: {},
  commentNameUser1: {
    fontSize: 14,
    marginTop: 0,
    color: "#2E3A59",
  },
  commentHoursAgo: {
    fontSize: 13,
    marginTop: 9,
    color: "#6B7280",
  },
  commentButton: {
    width: "55%",
    alignItems: "flex-end",
  },
  buttonCommentPost: {
    marginTop: 5,
    marginRight: 5,
    width: 77,
    height: 35,
    backgroundColor: "#E5E7EB",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
  },
  commentButtonText: {
    color: "#fff",
  },
  commentInputs: {
    width: "100%",
    marginTop: 15,
  },
  commentTexts: {
    width: "100%",
    marginTop: 15,
  },
  commentText: {
    fontSize: 15,
    fontWeight: "normal",
    color: "#111827",
  },
  commentBoxIcons: {
    flexDirection: "row",
  },
  commentIcons1: {
    flexDirection: "row",
    alignItems: "center",
    width: "50%",
  },
  commentIcons2: {
    flexDirection: "row",
    width: "50%",
    justifyContent: "flex-end",
  },
  shortIcons1: {
    flexDirection: "row",
    marginTop: 5,
    marginLeft: 5,
  },
  shortIcons2: {
    flexDirection: "row",
    marginTop: 5,
    marginLeft: 25,
  },
  shortNumber1: {
    marginTop: -2,
    marginLeft: 5,
    color: "#059669",
  },
  shortNumber2: {
    marginTop: -3,
    marginLeft: 5,
    color: "#EF4444",
  },
  reportIcon: {
    marginTop: 5,
    marginRight: 5,
  },
  reportText: {
    marginTop: 2,
    color: "#4B5563",
  },
});

export default Comments;
