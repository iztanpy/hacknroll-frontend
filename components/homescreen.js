import { StatusBar } from "expo-status-bar";
import React, { useState,useEffect,useRef } from "react";
import {
  TouchableOpacity,
} from "react-native";
import FlashMessage from "react-native-flash-message";
import { showMessage, hideMessage } from "react-native-flash-message";

import {
  ScrollView,
  Text,
  Box,
  Input,
  Select,
  VStack,
  CheckIcon,
  Center,
  NativeBaseProvider,
  Divider,
  Pressable,
} from "native-base"




export default function App() {
      return (
      <NativeBaseProvider>

        <ScrollView>
          <VStack space="4" divider={<Divider />}>

            <TouchableOpacity>
            <Box px="4" pt="50">
              <Text fontSize="xl" bold> nativebase </Text >

              <Text isTruncated maxW="300" w="80%" px="4" >
              NativeBase is a free and open source framework that enable developers
              to build high-quality mobile apps using React Native iOS and Android
              apps with a fusion of ES6. </Text >

              <Text fontSize="xs"> tags </Text >
              </Box>
            </TouchableOpacity>


            <TouchableOpacity>
            <Box px="4" pt="5">
              <Text fontSize="xl" bold> nativebase </Text >

              <Text isTruncated maxW="300" w="80%" px="4" >
              NativeBase is a free and open source framework that enable developers
              to build high-quality mobile apps using React Native iOS and Android
              apps with a fusion of ES6. </Text >

              <Text fontSize="xs"> tags </Text >
            </Box>
            </TouchableOpacity>

          </VStack>
        </ScrollView>
      </NativeBaseProvider>
      );
    };