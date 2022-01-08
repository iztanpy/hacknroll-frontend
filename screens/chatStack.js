import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, Box, VStack, Button } from 'native-base';
import { createStackNavigator } from '@react-navigation/stack';
import preChatScreen from '../screens/preChatScreen';
import ChatScreen from '../screens/ChatScreen';

import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';

const ChatStack = createStackNavigator();

const Profile = ({ navigation }) => {
  return (
    <ChatStack.Navigator>
      <ChatStack.Screen name="preChat" component={preChatScreen} />
      <ChatStack.Screen name="ChatScreen" component={ChatScreen} />
    </ChatStack.Navigator>
  );
};

export default Profile;
