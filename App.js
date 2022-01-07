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
import FlashMessage from "react-native-flash-message";
import { showMessage, hideMessage } from "react-native-flash-message";

import {
  Input,
  Select,
  VStack,
  CheckIcon,
  Center,
  NativeBaseProvider,
} from "native-base"




export default function App({route, navigation}) {
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


      <KeyboardAvoidingView style={styles.inputView}>
          <View style={styles.inputView}>
                  <NativeBaseProvider>
                        <Input
                              mx="3"
                              placeholder="username" // show the users username from props
                              w={{
                                base: "75%",
                                md: "25%",
                              }}
                            />
                        </NativeBaseProvider>
                  </View>
            </KeyboardAvoidingView>


      <KeyboardAvoidingView style={styles.inputView}>
        <View style={styles.inputView}>
                          <NativeBaseProvider>
                                <Input
                                      mx="3"
                                      value = "email"
                                      editable = {false}
                                      w={{
                                        base: "75%",
                                        md: "25%",
                                      }}
                                    />
                          </NativeBaseProvider>
                    </View>
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

      <TouchableOpacity
      onPress = {
                async () =>{
                    if(password ==='') {
                      showMessage({message:"Please enter your password",type:'Warning'})
                  }

                  else {
                  const response = await axios.post('https://glacial-springs-53214.herokuapp.com/login',{username:name,
                password:password})
                  if(username === ''){
                    showMessage({message:"Please enter a new username",description:"You have not entered a username."})
                  }

                  else if(response.data === 'login') {
                    axios.post('https://glacial-springs-53214.herokuapp.com/updateInfoName',{
                    name: name,
                    username: username,
                    })
                    .then(function (response) {
                    if (response.data === "success"){
                      showMessage({
                          message: "success!",
                          description: "Your information has been updated successfully",
                          type: "success",
                                          })

                      navigation.navigate("Home", {name: username});
                      }

                      else if(response.data === "failure") {
                      showMessage({
                         message: "Whoops!",
                            description: "Username has already been taken",
                            type: "warning",
                      })
                      }

                      })
                    .catch(function (error) {
                                    console.log(error);
                                    })
                                  }
                    else if(response.data === "incorrect password") {
                      showMessage({message: "Wrong password", description: "Please try again",type:'danger'})
                    }
                                  }

                                }
                  }

      style={styles.loginBtn}
      >
        <Text>UPDATE USERNAME</Text>
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