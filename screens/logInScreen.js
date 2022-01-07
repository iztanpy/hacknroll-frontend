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
  ActivityIndicator,
} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import signUp from '../screens/signUpScreen';



export default function profileScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [username, setUser] = useState("");
  const [password, setPassword] = useState("");


  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.inputView}>
              <TextInput
                style={styles.TextInput}
                placeholder="Username..."
                placeholderTextColor="white"
                onChangeText={(username) => setUser(username)}
              />
            </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password..."
          placeholderTextColor="white"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress = { () =>
                    navigation.navigate("signUp")
                 }>
        <Text style={styles.signUp_button}>Sign up</Text>
      </TouchableOpacity>


      <TouchableOpacity
      style={styles.loginBtn}
      >
        <Text>LOGIN</Text>
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

  image: {
    marginBottom: 40,
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
    marginTop: 40,
    backgroundColor: "#F05454",
  },

  image: {
  height: 130,
  width: 230,
  marginBottom: 30,
  }
});

