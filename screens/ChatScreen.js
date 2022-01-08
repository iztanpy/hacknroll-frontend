import React, { useEffect, useState, useRef } from 'react';
import { Text, Box, Input, Button, Flex, Divider, VStack } from 'native-base';

import {
  initiateSocket,
  disconnectSocket,
  subscribeToChat,
  sendMessage,
} from '../utils/socket';
import Message from '../components/Message';
import { ScrollView, StyleSheet } from 'react-native';

const ChatScreen = () => {
  const scrollViewRef = useRef();
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [connected, setConnected] = useState(false);
  const [room, setRoom] = useState('A');
  const [personnel, setPersonnel] = useState('Stacey');

  const handleConnect = () => {
    initiateSocket(room);
    setConnected(true);

    subscribeToChat((err, data) => {
      if (err) return;
      setChatHistory((oldChats) => [...oldChats, data]);
    });

    return () => disconnectSocket();
  };

  const handleDisconnect = () => {
    disconnectSocket();
    setConnected(false);
  };

  const handleSubmitMessage = () => {
    sendMessage(room, message);
    setMessage('');
  };

  return (
    <Box mt={10} mx={5} height="80%">
      <Flex height="10%">
        <Text fontSize="4xl" fontWeight="extrabold" mb={3}>
          Chat
        </Text>
      </Flex>
      <Flex height="90%" justifyContent="center">
        {!connected ? (
          <VStack
            alignItems="center"
            justify-content="center"
            textAlign="center"
            space={5}
            mx={5}
          >
            <Text fontSize="lg" textAlign="center">
              If you need a listening ear, we are here to listen.
              <Text fontWeight="bold">You're not alone!</Text>
            </Text>

            <Button
              size="lg"
              onPress={handleConnect}
              backgroundColor="rose.500"
            >
              Start Chat
            </Button>
          </VStack>
        ) : (
          <Flex justifyContent="space-between" height="100%">
            <Box>
              <Flex
                flexDirection="row"
                alignItems="center"
                justifyContent="space-between"
              >
                <Text fontSize="md">You are connected with {personnel}</Text>

                <Button
                  colorScheme="rose"
                  variant="outline"
                  size="md"
                  onPress={handleDisconnect}
                >
                  End Chat
                </Button>
              </Flex>
              <Divider my="3" thickness={2} />
            </Box>

            <Box>
              <ScrollView
                style={styles.chat}
                ref={scrollViewRef}
                onContentSizeChange={() =>
                  scrollViewRef.current.scrollToEnd({ animated: true })
                }
              >
                {chatHistory.map((chatMessage) => (
                  <Message key={chatMessage} message={chatMessage} own={true} />
                ))}
              </ScrollView>
              <Input
                marginTop={5}
                p={2}
                placeholder="Type a message here..."
                size="lg"
                type="text"
                InputRightElement={
                  <Button
                    size="lg"
                    onPress={handleSubmitMessage}
                    backgroundColor="rose.500"
                  >
                    Send
                  </Button>
                }
                value={message}
                onChangeText={(text) => setMessage(text)}
              />
            </Box>
          </Flex>
        )}
      </Flex>
    </Box>
  );
};

const styles = StyleSheet.create({
  chat: {
    maxHeight: '72%',
  },
});

export default ChatScreen;
