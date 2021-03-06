import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import useStatusBar from "../hooks/useStatusBar";
import { logout } from "../components/Firebase/firebase";

const UserScreen = (props) => {
  useStatusBar("dark-content");

  async function handleSignOut() {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={styles.screen}>
      <Text> ~~ This is the User Screen ~~ </Text>
      <Button title="Sign Out" onPress={handleSignOut} />
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

export default UserScreen;
