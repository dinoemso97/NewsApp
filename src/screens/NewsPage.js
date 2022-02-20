import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  Modal,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import SecondHeader from "../components/SecondHeader";
import { TextInput } from "react-native-gesture-handler";
import Comments from "../components/Comments";
import axios from "axios";
import { get } from "react-native/Libraries/Utilities/PixelRatio";
const NewsPage = ({ route, navigation }) => {
  const { itemId } = route.params;
  const { userId } = route.params;

  const [post, setPost] = useState([]);
  const [comments, setComments] = useState([]);
  const [myUser, setMyUser] = useState([]);
  const [loggedUser, setLoggedUser] = useState([]);
  const [body, setBody] = useState([]);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const onChangeTitleHandler = (title) => {
    setTitle(title);
  };

  const onChangeTextHandler = (text) => {
    setText(text);
  };

  const onSubmitAddPostHandler = async () => {
    if (title === "" || text === "") {
      Alert.alert("Warning!", "Please, write all inputs");
    } else {
      if (!title.trim() || !text.trim()) {
        Alert.alert("Warning", "Your inputs are invalid!");
      } else {
        try {
          const response = await axios.post(
            `https://jsonplaceholder.typicode.com/posts`,
            {
              itemId,
              userId,
              title,
              text,
            }
          );
          if (response.status === 201) {
            Alert.alert(
              ` You have created new post: ${JSON.stringify(response.data)}`
            );
            setTitle("");
            setText("");
          } else {
            throw new Error("An error has occurred");
          }
        } catch (error) {
          Alert.alert("An error has occured");
        }
      }
    }
  };

  const [modalVisible, setModalVisible] = useState(false);

  const onChangeBodyHandler = (body) => {
    setBody(body);
  };

  const onSubmitFormHandler = async () => {
    if (body === "") {
      Alert.alert("Please,", "Type in comment!");
    } else {
      if (!body.trim()) {
        Alert.alert("Invalid comment!");
      } else {
        try {
          const response = await axios.post(
            `https://jsonplaceholder.typicode.com/comments`,
            {
              body,
              itemId,
              userEmail,
            }
          );
          if (response.status === 201) {
            alert(
              ` You have created comment: ${JSON.stringify(response.data)}`
            );
            setBody("");
          } else {
            throw new Error("An error has occurred");
          }
        } catch (error) {
          alert("An error has occured");
        }
      }
    }
  };

  const getUsersData = async () => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${post.userId}`
      );
      if (response.status === 200) {
        setMyUser(response.data);
        return;
      } else {
        throw new Error("Failed to fetch users");
      }
    } catch (error) {
      console.log("Getting data error", error);
    }
  };
  const userEmail = myUser.email;

  const getLoggedUserData = async () => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${userId}`
      );
      if (response.status === 200) {
        setLoggedUser(response.data);
        return;
      } else {
        throw new Error("Failed to fetch users");
      }
    } catch (error) {
      console.log("Getting data error", error);
    }
  };

  const gettingData = async () => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${itemId}`
      );
      if (response.status === 200) {
        setPost(response.data);
        return;
      } else {
        throw new Error("Failed to fetch users");
      }
    } catch (error) {
      console.log("Getting data error", error);
    }
  };

  const gettingComments = async () => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${itemId}/comments`
      );
      if (response.status === 200) {
        setComments(response.data);
        return;
      } else {
        throw new Error("Failed to fetch users");
      }
    } catch (error) {
      console.log("Getting data error", error);
    }
  };

  const renderItem = ({ item }) => (
    <Comments comment={item.body} userPost={item.email} />
  );

  useEffect(() => {
    getLoggedUserData();
    gettingData();
    gettingComments();
  }, []);
  useEffect(() => {
    getUsersData();
  }, [post.userId]);
  return (
    <View style={styles.HomePageBody}>
      <SecondHeader />
      {myUser?.length === 0 ? (
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
        <ScrollView style={styles.viewList}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            style={styles.modal}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setModalVisible(!modalVisible);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <View style={styles.modalInput}>
                  <Text style={styles.modalSubject}>Hello, {myUser.name}.</Text>
                  <Text style={styles.modalSubject1}>Add new post.</Text>
                  <TextInput
                    value={title}
                    onChangeText={onChangeTitleHandler}
                    style={styles.inputPostTitle}
                    placeholder={"Title..."}
                    //keyboardType={keyboardType}
                  />
                  <TextInput
                    value={text}
                    onChangeText={onChangeTextHandler}
                    style={styles.inputPostBody}
                    placeholder={"Text..."}
                    //keyboardType={keyboardType}
                  />
                </View>
                <View style={styles.buttonsFromPost}>
                  <TouchableOpacity
                    style={styles.buttonAdd}
                    onPress={onSubmitAddPostHandler}
                  >
                    <Text style={styles.textStyle}>Add Post</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={styles.buttonClose}
                    onPress={() => setModalVisible(!modalVisible)}
                  >
                    <Text style={styles.textStyle}>Close</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
          <View style={styles.newsPageOne}>
            <View style={styles.newsPageImage}>
              <Image
                style={styles.imageNews}
                source={require("../img/f1.png")}
              />
              <Text style={styles.newsPageOneText}>
                {post.title?.substring(0, 1).toUpperCase() +
                  post.title?.substring(1, 36)}
              </Text>
            </View>
            <View style={styles.newsPageTwoIcon}>
              <View style={styles.textHoursDiv}>
                <Text style={styles.textDate1}>15:41 24/10/2021</Text>
                <Text style={styles.textByAuthor1}>By: {myUser.name}</Text>
              </View>
              <View style={styles.newsPageIcons2}>
                <Ionicons
                  name="md-share-social-outline"
                  size={26}
                  color="#2E3A59"
                  style={styles.shareIcon2}
                />
                <Ionicons
                  name="ios-heart-outline"
                  size={26}
                  color="#2E3A59"
                  style={styles.like}
                />
              </View>
            </View>
          </View>

          <View style={styles.newsSecondPage}>
            <View style={styles.newsTexts}>
              <Text style={styles.newsText1}>
                {post.body?.substring(0, 1).toUpperCase() + post.body}
              </Text>
            </View>
            <View>
              <TouchableOpacity
                style={styles.editCommentBtn1}
                onPress={() => setModalVisible(true)}
              >
                <Text style={styles.editCommentBtnText}>Add new</Text>
              </TouchableOpacity>
              {loggedUser.id === post.userId ? (
                <TouchableOpacity style={styles.editCommentBtn}>
                  <Text style={styles.editCommentBtnText}>Edit</Text>
                </TouchableOpacity>
              ) : (
                <Text></Text>
              )}
            </View>

            <View style={styles.tags}>
              <View style={styles.tag1}>
                <Text style={styles.tagsText}>Formula 1</Text>
              </View>
              <View style={styles.tag2}>
                <Text style={styles.tagsText}>Lewis Hamilton</Text>
              </View>
              <View style={styles.tag3}>
                <Text style={styles.tagsText}>Max Verstappen</Text>
              </View>
            </View>
          </View>
          <View style={styles.newsThirdPage}>
            <View style={styles.commentBoxOne}>
              <View style={styles.subjectComment}>
                <Text style={styles.textSubjectComment}>Leave a comment</Text>
              </View>
              <View style={styles.commentBoxFirstPart}>
                <View style={styles.commentImg}>
                  <Image
                    style={styles.imageComment}
                    source={require("../img/User.png")}
                  />
                </View>
                <View style={styles.commentText1}>
                  <Text style={styles.commentNameUser1}>{loggedUser.name}</Text>
                  <Text style={styles.commentHoursAgo}>3 min ago</Text>
                </View>
                <View style={styles.commentButton}>
                  <TouchableOpacity
                    style={styles.buttonCommentPost}
                    onPress={onSubmitFormHandler}
                  >
                    <Text style={styles.commentButtonText}>POST</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.commentInputs}>
                <TextInput
                  style={styles.commentInput}
                  placeholder="Leave a comment..."
                  value={body}
                  onChangeText={onChangeBodyHandler}
                />
              </View>
            </View>
            <FlatList
              data={comments}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              style={styles.flatlistComment}
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
  viewList: {
    flex: 1,
  },
  newsPageOne: {
    height: "20%",
    width: "100%",
  },
  newsPageImage: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  newsPageOneText: {
    width: "90%",
    fontSize: 26,
    fontWeight: "bold",
    lineHeight: 30,
    color: "#2e3a59",
    marginTop: 10,
    marginRight: 10,
  },
  newsPageTwoIcon: {
    width: "100%",
    height: "27%",
    flexDirection: "row",
  },
  textHoursDiv: {
    flex: 1,
    marginTop: 15,
  },
  textDate1: {
    color: "#FF8787",
    fontSize: 12,
    lineHeight: 19,
    marginLeft: 13,
  },
  textByAuthor1: {
    color: "#FF8787",
    fontSize: 12,
    lineHeight: 19,
    marginLeft: 13,
    marginTop: 5,
  },
  newsPageIcons2: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 20,
  },
  like: {
    marginRight: 40,
  },
  shareIcon2: {
    marginRight: 20,
  },
  newsSecondPage: {},
  newsTexts: {
    justifyContent: "center",
    alignItems: "center",

    marginTop: 10,
  },
  newsText1: {
    color: "#111",
    fontSize: 16,
    width: 320,
    marginTop: 20,
    lineHeight: 21,
    fontWeight: "normal",
  },
  newsText2: {
    color: "#111",
    fontSize: 16,
    width: 316,
    marginTop: 40,
    lineHeight: 21,
    fontWeight: "normal",
  },
  newsText3: {
    color: "#111",
    fontSize: 16,
    width: 316,
    marginTop: 40,
    lineHeight: 21,
    fontWeight: "normal",
  },
  tags: {
    width: "100%",
    height: 50,
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  tag1: {
    width: 82,
    height: 27,
    backgroundColor: "#e6e6e6",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginRight: 20,
  },
  tag2: {
    width: 112,
    height: 27,
    backgroundColor: "#e6e6e6",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  tag3: {
    width: 117,
    height: 27,
    backgroundColor: "#e6e6e6",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginLeft: 20,
  },
  tagsText: {
    fontSize: 13,
    color: "#374151",
  },
  newsThirdPage: {
    alignItems: "center",
    justifyContent: "center",
  },
  subjectComment: {
    width: 320,
    height: 40,
    backgroundColor: "#FF8787",
    borderRadius: 6,
    justifyContent: "center",
    marginTop: 10,
  },
  textSubjectComment: {
    color: "#fff",
    textAlign: "center",
    fontSize: 13,
    textTransform: "uppercase",
    lineHeight: 19,
  },
  commentBoxOne: {
    marginTop: 20,
    width: "90%",
    height: 210,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  commentBoxFirstPart: {
    flexDirection: "row",
    marginTop: 40,
  },
  commentImg: {
    width: "15%",
  },
  imageComment: {},
  commentText1: {
    marginTop: 3,
  },
  commentNameUser1: {
    fontSize: 14,
    marginTop: -5,
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
  editCommentBtn: {
    width: 110,
    height: 40,
    backgroundColor: "#b7bfc8",
    color: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 230,
    borderRadius: 6,
    marginTop: 25,
  },
  editCommentBtn1: {
    width: 110,
    height: 40,
    backgroundColor: "#b7bfc8",
    color: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 230,
    borderRadius: 6,
    marginTop: 25,
  },
  editCommentBtnText: {
    color: "#fff",
    textTransform: "uppercase",
  },
  flatlistComment: {
    width: "100%",
    marginLeft: 12,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modal: {
    width: 500,
    height: 300,
    backgroundColor: "yellow",
  },
  modalView: {
    width: 300,
    height: 330,
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonAdd: {
    width: 110,
    height: 40,
    backgroundColor: "#FF8787",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
  },
  buttonClose: {
    width: 110,
    height: 40,
    backgroundColor: "#b7bfc8",
    color: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
    marginLeft: 22,
  },
  inputPostTitle: {
    width: 250,
    height: 40,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    borderWidth: 0.3,
    borderColor: "#333",
    marginTop: 10,
  },
  inputPostBody: {
    width: 250,
    height: 90,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    borderWidth: 0.3,
    borderColor: "#333",
    marginTop: 18,
  },
  buttonsFromPost: {
    width: 260,
    height: 80,
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
  textStyle: {
    color: "#fff",
  },
  modalSubject: {
    textAlign: "center",
  },
  modalSubject1: {
    textAlign: "center",
    fontSize: 20,
  },
});

export default NewsPage;
