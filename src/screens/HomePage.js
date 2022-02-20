import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import Header from "../components/Header";
import NewsCard from "../components/NewsCard";
import axios from "axios";
import NewsCardSecond from "../components/NewsCardSecond";

const jsonURL = "https://jsonplaceholder.typicode.com/posts";

const HomePage = ({ route, navigation }) => {
  const { userId } = route.params;

  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState([]);
  const [users, setUsers] = useState([]);
  const getUsersData = async () => {
    try {
      fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then((response) => response.json())
        .then((json) => setUsers(json));
    } catch (err) {
      console.log(err);
    }
  };

  const gettingData = async () => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts`
      );
      if (response.status === 200) {
        setPosts(response.data);
        setTitle(response.data);
        return;
      } else {
        throw new Error("Failed to fetch users");
      }
    } catch (error) {
      console.log("Getting data error", error);
    }
  };

  const renderItem = ({ item }) =>
    item.id === 1 ? (
      <NewsCardSecond
        info={item.title}
        imageURL={require("../img/f1.png")}
        onPress={() => {
          navigation.navigate("NewsPage", {
            itemId: item.id,
            userId: users.id,
          });
        }}
      />
    ) : (
      <NewsCard
        info={item.title}
        imageURL={require("../img/f1_win.png")}
        onPress={() => {
          navigation.navigate("NewsPage", {
            itemId: item.id,
            userId: users.id,
          });
        }}
      />
    );
  const renderItemSecond = ({ item }) => (
    <NewsCard
      info={item.title}
      imageURL={require("../img/f1_win.png")}
      onPress={() => {
        navigation.navigate("NewsPage", {
          itemId: item.id,
          userId: users.id,
        });
      }}
    />
  );

  useEffect(() => {
    gettingData();
    getUsersData();
  }, []);

  return (
    <View style={styles.HomePageBody}>
      <Header />
      {users?.length === 0 ? (
        <View
          style={{
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            paddingBottom: 100,
          }}
        >
          <ActivityIndicator color={"#111"} />
        </View>
      ) : (
        <ScrollView style={styles.flatList}>
          <View style={styles.newsPageOne}>
            <View style={styles.newsPageOneHash}>
              <Text style={styles.hashText}>#MILORAD DODIK</Text>
              <Text style={styles.hashText}>#COVID19</Text>
              <Text style={styles.hashText}>#F1</Text>
              <Text style={styles.hashText}>#TRAMP</Text>
            </View>
            <FlatList
              data={posts.slice(0, 1)}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
            />
          </View>
          <View style={styles.newsSecondPage}>
            <FlatList
              data={posts.slice(1, 4)}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
            />
          </View>
          <View style={styles.divOne}></View>
          <View style={styles.newsThirdPage}>
            <View style={styles.subCont}>
              <Text style={styles.newsThirdPageSubject}>Other news</Text>
            </View>
            <FlatList
              data={posts}
              renderItem={renderItemSecond}
              keyExtractor={(item) => item.id}
            />
          </View>
        </ScrollView>
      )}
    </View>
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

export default HomePage;
