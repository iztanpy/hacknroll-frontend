import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, Box, VStack, Button } from 'native-base';
import { createStackNavigator } from '@react-navigation/stack';
import signUp from '../screens/signUpScreen';
import ProfileScreen from '../screens/ProfileScreen';
import changeUser from '../screens/changeUserScreen';
import logIn from '../screens/logInScreen';

import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";


const ProfStack = createStackNavigator();

const Profile = ({ navigation }) => {
  return (
  <ProfStack.Navigator>
  <ProfStack.Screen name="profile" component={ProfileScreen} />
  <ProfStack.Screen name="signUp" component={signUp} />
  <ProfStack.Screen name="changeUser" component={changeUser} />
  <ProfStack.Screen name="logIn" component={logIn} />
  </ProfStack.Navigator>
  )};

  export default Profile;