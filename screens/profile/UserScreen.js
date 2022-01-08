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
import { logoutUser } from '../../reducers/login';

export default function UserScreen({ navigation }) {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const loggedInUser = useSelector((state) => state.login);

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <Box mt={10} mx={10} height="80%" justifyContent="center">
      <Flex justifyContent="space-between" height="70%">
        <Flex alignItems="center">
          <Text fontSize="3xl" fontWeight="extrabold" mb={3} textAlign="center">
            Hello,{' '}
            <Text color="rose.500">
              {loggedInUser && loggedInUser.username}
            </Text>
          </Text>
          <Button
            size="lg"
            onPress={handleLogout}
            width="150"
            variant="outline"
            colorScheme="rose"
          >
            Logout
          </Button>
        </Flex>
        <Text
          fontSize="xs"
          fontWeight="bold"
          color="gray.500"
          textAlign="center"
        >
          © SOS.SG 2022
        </Text>
      </Flex>
    </Box>
  );
}
