import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Box,
  Text,
  Stack,
  FormControl,
  Input,
  VStack,
  Button,
  Flex,
  Pressable,
} from 'native-base';

import { loginUser } from '../../reducers/login';
import postService from '../../services/post';
import commentService from '../../services/comment';

import {
  createNotification,
  removeNotification,
} from '../../reducers/notification';

export default function LoginScreen({ navigation }) {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const loggedInUser = useSelector((state) => state.login);
  const notification = useSelector((state) => state.notification);

  const dispatchSuccessNotification = (message) => {
    dispatch(
      createNotification({
        success: true,
        message: message,
      })
    );

    setTimeout(() => {
      dispatch(removeNotification());
    }, 5000);
  };

  const dispatchErrorNotification = (message) => {
    dispatch(
      createNotification({
        error: true,
        message: message,
      })
    );

    setTimeout(() => {
      dispatch(removeNotification());
    }, 5000);
  };

  const handleLogin = () => {
    try {
      dispatch(
        loginUser({
          username,
          password,
        })
      );

      // dispatchSuccessNotification('Successfully logged in');
    } catch (exception) {
      console.error(exception);
      // dispatchErrorNotification(`Wrong credentials: ${exception}`);
    }
  };

  useEffect(() => {
    if (loggedInUser) {
      postService.setToken(loggedInUser.token);
      commentService.setToken(loggedInUser.token);
    }
  }, [loggedInUser]);

  return (
    <Box mt={10} mx={10} justifyContent="center" height="80%">
      <VStack space={6}>
        <FormControl>
          <Box>
            <Text
              fontSize="3xl"
              fontWeight="extrabold"
              mb={3}
              textAlign="center"
            >
              Log in
            </Text>
            {notification && <Text>{notification.message}</Text>}
            <FormControl.Label>Username</FormControl.Label>
            <Input
              p={2}
              placeholder="username"
              value={username}
              type="text"
              size="lg"
              onChangeText={(text) => setUsername(text)}
            />
          </Box>
        </FormControl>
        <FormControl>
          <Box>
            <FormControl.Label>Password</FormControl.Label>
            <Input
              p={2}
              placeholder="password"
              type="password"
              value={password}
              size="lg"
              onChangeText={(text) => setPassword(text)}
            />
          </Box>
        </FormControl>
      </VStack>
      <Flex marginTop={8} alignItems="center">
        <Button
          size="lg"
          onPress={handleLogin}
          backgroundColor="rose.500"
          width={200}
        >
          Login
        </Button>
      </Flex>
      <Box marginTop={24} alignItems="center">
        <Text fontWeight="bold">Don't have an account yet?</Text>
        <Pressable onPress={() => navigation.navigate('Register')}>
          <Text fontWeight="bold" color="rose.500">
            Sign up
          </Text>
        </Pressable>
      </Box>
    </Box>
  );
}
