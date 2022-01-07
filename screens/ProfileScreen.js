import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, Box, VStack, Button } from 'native-base';
import { createStackNavigator } from '@react-navigation/stack';
import signUp from '../screens/signUpScreen';
import changeUser from '../screens/changeUserScreen';
import logIn from '../screens/logInScreen';

import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";



const ProfileScreen = ({ navigation }) => {
  return (
    <Box mt={10} mx={5} justifyContent="center">
    <TouchableOpacity onPress = { () => navigation.navigate('changeUser')}>
      <Text fontSize="4xl" fontWeight="extrabold" mb={3}>
        Profile
      </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress = { () => navigation.navigate('signUp')}>
      <Text fontSize="4xl" fontWeight="extrabold" mb={3}>
              Sign up
            </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress = { () => navigation.navigate('logIn')}>
      <Text fontSize="4xl" fontWeight="extrabold" mb={3}>
                    Log in
       </Text>
      </TouchableOpacity>

    </Box>
  );
}

export default ProfileScreen;
