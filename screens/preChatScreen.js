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
import {
  Input,
  Select,
  VStack,
  CheckIcon,
  Center,
  NativeBaseProvider,
} from "native-base"

import { createStackNavigator } from '@react-navigation/stack';
import ChatScreen from '../screens/ChatScreen';


export default function App({navigation}) {
  const [username, setUser] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [usage, setUsage] = useState("");
  const [stress, setStress] = useState("");


  return (
    <View style={styles.container}>

      <View style={styles.inputView}>
        <NativeBaseProvider>
              <Input
                    mx="3"
                    placeholder="How may I address you?"
                    w={{
                      base: "75%",
                      md: "25%",
                    }}
                  />
              </NativeBaseProvider>
        </View>

      <View style={styles.inputView}>
      <NativeBaseProvider>
      <Select
              selectedValue={gender}
              minWidth="250"
              accessibilityLabel="Pronoun"
              placeholder="Preferred gender pronoun"
              onValueChange={(itemValue) => setGender(itemValue)}
            >
              <Select.Item label="female" value="f" />
              <Select.Item label="male" value="m" />
              <Select.Item label="non binary" value="nb" />
            </Select>

      </NativeBaseProvider>
      </View>

      <View style={styles.inputView}>
            <NativeBaseProvider>
                  <Select
                          selectedValue={age}
                          minWidth="250"
                          accessibilityLabel="Age"
                          placeholder="Your age range"
                          onValueChange={(itemValue) => setAge(itemValue)}
                        >
                          <Select.Item label="5 - 9 years old " value="5" />
                          <Select.Item label="10 - 19 years old " value="10" />
                          <Select.Item label="20 - 29 years old " value="20" />
                          <Select.Item label="30 - 39 years old " value="30" />
                          <Select.Item label="40 - 49 years old " value="40" />
                          <Select.Item label="50 - 59 years old " value="50" />
                          <Select.Item label="60 - 64 years old " value="60" />
                          <Select.Item label="65 years old & above " value="65" />
                        </Select>

                  </NativeBaseProvider>
            </View>

      <View style={styles.inputView}>
            <NativeBaseProvider>
                  <Select
                          selectedValue={usage}
                          minWidth="250"
                          accessibilityLabel="Usage"
                          placeholder="Have you contacted SOS before?"
                          onValueChange={(itemValue) => setUsage(itemValue)}
                        >
                          <Select.Item label="No" value="No" />
                          <Select.Item label="Yes" value="Yes" />
                        </Select>
                  </NativeBaseProvider>
            </View>


      <View style={styles.inputView}>
                  <NativeBaseProvider>
                        <Select
                                selectedValue={stress}
                                minWidth="250"

                                accessibilityLabel="Age"
                                placeholder="current emotional distress"
                                onValueChange={(itemValue) => setStress(itemValue)}
                              >
                                <Select.Item label="0  (no thoughts of self-harm/suicide) " value= "0" />
                                <Select.Item label="1" value= "1" />
                                <Select.Item label="2" value= "2" />
                                <Select.Item label="3" value= "3" />
                                <Select.Item label="4" value= "4" />
                                <Select.Item label="5  (imminent risk of self-harm/suicide) " value= "5" />

                              </Select>
                        </NativeBaseProvider>
                  </View>

      <TouchableOpacity onPress = { () => navigation.navigate('ChatScreen')}
      style={styles.loginBtn}>
        <Text>SUBMIT</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    marginBottom: 40,
  },

  inputView: {
    backgroundColor: "#c0d4ff",
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
      height: 30,
      padding: 1,
      marginBottom: 40,
    },

  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#14b9ff",
  },
});


