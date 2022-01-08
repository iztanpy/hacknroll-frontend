import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
// Screens
import ChatScreen from '../../screens/ChatScreen';
import { Dimensions } from 'react-native';
import HomeStack from '../../screens/home/HomeStack';
import ProfileStack from '../../screens/profile/ProfileStack';

// Screen names
const homeName = 'Home';
const chatName = 'Chat';
const profileName = 'Profile';

const Tab = createBottomTabNavigator();

export default function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === chatName) {
              iconName = focused
                ? 'chatbox-ellipses'
                : 'chatbox-ellipses-outline';
            } else if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline';
            } else if (rn === profileName) {
              iconName = focused ? 'person' : 'person-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarInactiveTintColor: 'gray',
          tabBarActiveTintColor: '#e91e63',
          tabBarShowLabel: false,
          tabBarStyle: {
            height: 65,
            width: '70%',
            position: 'absolute',
            left: '5%',
            // backgroundColor: '#262626',
            bottom: Dimensions.get('window').width / 20,
            justifyContent: 'center',
            alignItems: 'center',
            marginHorizontal: 40,
            borderRadius: 30,
            shadowColor: '#000',
            shadowOffset: {
              width: 1,
              height: 1,
            },
            shadowOpacity: 0.25,
            shadowRadius: 10,
          },
          headerShown: false,
        })}
      >
        <Tab.Screen name={homeName} component={HomeStack} />
        <Tab.Screen name={chatName} component={ChatScreen} />
        <Tab.Screen name={profileName} component={ProfileStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
