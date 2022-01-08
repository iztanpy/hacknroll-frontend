import React from 'react';
import { Box, Text, Flex } from 'native-base';

const Message = ({ message, own }) => {
  return (
    <Box
      marginY={1}
      paddingY={2}
      paddingX={4}
      borderRadius={8}
      borderBottomRightRadius={0}
      backgroundColor="purple.300"
      alignSelf="flex-end"
    >
      <Text>{message}</Text>
    </Box>
  );
};

export default Message;
