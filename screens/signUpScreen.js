import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';




export default function signupScreen({navigation}) {
  const [username, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cnfmPassword,setCnfmPassword] = useState("");

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Username..."
          placeholderTextColor="black"
          onChangeText={(username) => setUser(username)}
        />
      </View>

      <View style={styles.inputView}>
              <TextInput
                style={styles.TextInput}
                placeholder="Email..."
                placeholderTextColor="black"
                onChangeText={(email) => setEmail(email)}
              />
            </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password..."
          placeholderTextColor="black"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      <TouchableOpacity  style={styles.signupBtn}>
        <Text>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fffdd0",
    alignItems: "center",
    justifyContent: "center",
  },


  inputView: {
    backgroundColor: "#DDDDDD",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "flex-start",
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },


  signupBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#F05454",
  },

  image: {
  height: 130,
  width: 230,
  marginBottom: 30,
  }
});

