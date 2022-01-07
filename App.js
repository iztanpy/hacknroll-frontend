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
  Select,
  VStack,
  CheckIcon,
  Center,
  NativeBaseProvider,
} from "native-base"


export default function App() {
  const [username, setUser] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [usage, setUsage] = useState("");
  const [stress, setStress] = useState("");
  const [service, setService] = useState("");

  const[iconAnimating, setIcon] = useState(false);


  return (
    <View style={styles.container}>

      <View style={styles.inputView}>
              <TextInput
                style={styles.TextInput}
                placeholder="How would you like to be addressed?"
                placeholderTextColor="grey"
                onChangeText={(username) => setUser(username)}
              />
            </View>

      <View style={styles.inputView}>
      <NativeBaseProvider>
      <Select
              selectedValue={gender}
              minWidth="200"
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
                    minWidth="200"
                    accessibilityLabel="Age"
                    placeholder="Your age Range"
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


      <TouchableOpacity style={styles.loginBtn}>
        <Text>SUBMIT</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    marginBottom: 40,
  },

  TopinputView: {
      backgroundColor: "#DDDDDD",
      marginTop: 100,
      width: "70%",
      height: 45,
      marginBottom: 20,
      alignItems: "flex-start",
    },

  inputView: {
    backgroundColor: "#DDDDDD",
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "flex-start",
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 5,
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

