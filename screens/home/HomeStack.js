import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
import ForumScreen from './ForumScreen';
import PostScreen from './PostScreen';
import PostCreateScreen from './PostCreateScreen';

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Forum"
        component={ForumScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Post"
        component={PostScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PostCreateScreen"
        component={PostCreateScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
