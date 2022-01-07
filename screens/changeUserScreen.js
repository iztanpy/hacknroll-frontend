import { StatusBar } from "expo-status-bar";
import React, { useState,useEffect,useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  ActivityIndicator, KeyboardAvoidingView
} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


export default function changeUser({navigation}) {
  const [email, setEmail] = useState("");
  const [username, setUser] = useState("");
  const [nokEmail, setNokEmail] = useState("");
  const [password,setPassword] = useState("")

  const [forDisplayUsername,setForDisplayUsername] = useState("");
  const [forDisplayEmail,setForDisplayEmail] = useState("");


  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS == "ios" ? "padding" : "height"}>
    <Text style={styles.text}> Leave the fields which you dont want to update empty and hit enter when youre done updating!</Text>
      <StatusBar style="auto" />
      <KeyboardAvoidingView style={styles.inputView}
      >
              <TextInput
                style={styles.TextInput}
                placeholder = "display user"
                placeholderTextColor="#003f5c"
                onChangeText={(username) => setUser(username)}
              />
            </KeyboardAvoidingView>

      <KeyboardAvoidingView style={styles.inputView}>
        <Text style={styles.TextInput}>
          "display email"
        </Text>
      </KeyboardAvoidingView>





      <KeyboardAvoidingView style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Enter your account password..."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </KeyboardAvoidingView>

      <TouchableOpacity style={styles.loginBtn}>
        <Text>UPDATE USERNAME</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginBtn}>
        <Text>UPDATE EMAIL</Text>
      </TouchableOpacity>


    </KeyboardAvoidingView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fffdd0",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    marginBottom: 40,
  },

  text: {
      padding: 20,
      marginBottom: 20,
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

  forgot_button: {
    height: 20,
    marginBottom: 30,
  },

  signUp_button: {
      height: 20,
      marginBottom: 30,
    },

  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginBottom:20,
    backgroundColor: "#F05454",
  },

  image: {
  height: 130,
  width: 230,
  marginBottom: 30,
  }
});