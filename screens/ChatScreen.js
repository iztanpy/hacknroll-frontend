import { StatusBar } from "expo-status-bar";
import React, { useState, useCallback, useEffect } from 'react'
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


import { GiftedChat } from 'react-native-gifted-chat'

export default function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
        },
      },
    ])
  }, [])

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, [])

  return (
    <View style={{flex: 1, marginBottom: 100}}>
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
      }}
    />
    </View>
  )
}