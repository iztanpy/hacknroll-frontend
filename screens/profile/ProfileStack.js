import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import UserScreen from './UserScreen';
const Stack = createStackNavigator();
import { useSelector } from 'react-redux';

const ProfileStack = ({ navigation }) => {
  const loggedInUser = useSelector((state) => state.login);

  if (loggedInUser) {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="User"
          component={UserScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    );
  } else {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    );
  }
};

export default ProfileStack;
