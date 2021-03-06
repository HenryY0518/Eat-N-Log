import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";

import useStatusBar from "../hooks/useStatusBar";

const LogScreen = (props) => {
  useStatusBar("dark-content");

  return (
    <View style={styles.screen}>
      <Text> ~~ This is a Food Log Screen ~~ </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default LogScreen;
