import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
import {createStackNavigator} from '@react-navigation/stack'
import MainContainer from './components/navigation/MainContainer';
import signUp from './screens/signUpScreen';

const ProfStack = createStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      <MainContainer />
    </NativeBaseProvider>
  );
}
