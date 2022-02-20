import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";
const NewsCard = ({ info, imageURL, onPress }) => {
  return (
    <TouchableOpacity style={styles.newsFlatList} onPress={onPress}>
      <View style={styles.newsFlatListImg}>
        <Image style={styles.imageFlatListNews} source={imageURL} />
      </View>

      <View style={styles.newsFlatListText}>
        <Text style={styles.newsFlatListTextSubject1}>DOUBLE PODIUM</Text>
        {info?.length > 30 ? (
          <Text style={styles.newsFlatListText1}>
            {info?.substring(0, 1).toUpperCase() +
              info?.substring(1, 36) +
              "..."}
          </Text>
        ) : (
          <Text style={styles.newsFlatListText1}>
            {info?.substring(0, 1).toUpperCase() + info?.substring(1, 29)}
          </Text>
        )}
      </View>
      <View style={styles.newsFlatListIcon}>
        <Text style={styles.newsFlatListHoursText}>1 h ago</Text>
        <View style={styles.newsFlatListIcons}>
          <Entypo
            style={styles.chatIcon1}
            name="chat"
            size={17}
            color="black"
          />
          <Entypo
            style={styles.shareIcon2}
            name="share"
            size={17}
            color="black"
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  newsFlatList: {
    marginTop: 10,
    width: "100%",
    height: 110,
    flexDirection: "row",
  },
  newsFlatListImg: {
    alignItems: "center",
    width: "30%",
  },
  newsFlatListText: {
    width: "50%",
  },
  newsFlatListTextSubject1: {
    color: "#FF8787",
    fontSize: 10,
    lineHeight: 17,
  },
  newsFlatListTextSubject2: {
    color: "#5DADEC",
    fontSize: 10,
    lineHeight: 17,
  },
  newsFlatListTextSubject3: {
    color: "#FFDA44",
    fontSize: 10,
    lineHeight: 17,
  },
  newsFlatListTextSubject4: {
    color: "#FF8787",
    fontSize: 10,
    lineHeight: 17,
  },
  newsFlatListTextSubject5: {
    color: "#D33D3D",
    fontSize: 10,
    lineHeight: 17,
  },
  newsFlatListTextSubject6: {
    color: "#E2A600",
    fontSize: 10,
    lineHeight: 17,
  },
  newsFlatListText1: {
    fontSize: 16,
    marginTop: 5,
    color: "#2E3A59",
  },
  newsFlatListIcon: {
    width: "30%",
  },
  newsFlatListHoursText: {
    justifyContent: "center",
    fontSize: 13,
    color: "#9CA3AF",
    marginLeft: 5,
  },
  newsFlatListIcons: {
    flexDirection: "row",
    marginTop: 50,
  },
  chatIcon1: {
    marginRight: 22,
  },
  shareIcon2: {
    marginRight: 15,
  },
});

export default NewsCard;
