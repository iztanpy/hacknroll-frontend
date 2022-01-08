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

export default function RegisterScreen({ navigation }) {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    navigation.navigate('Profile');
    dispatch(
      loginUser({
        username,
        password,
      })
    );
  };

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
              Register
            </Text>
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
            <FormControl.Label>Email</FormControl.Label>
            <Input
              p={2}
              placeholder="email"
              value={email}
              type="text"
              size="lg"
              onChangeText={(text) => setEmail(text)}
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
      <Box marginTop={12} alignItems="center">
        <Text fontWeight="bold">Have an account?</Text>
        <Pressable onPress={() => navigation.navigate('Login')}>
          <Text fontWeight="bold" color="rose.500">
            Login
          </Text>
        </Pressable>
      </Box>
    </Box>
  );
}
