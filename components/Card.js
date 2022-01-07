import React from 'react';
import { Box, HStack, Text, Pressable, Spacer, Flex } from 'native-base';

export const Card = ({ title, type }) => {
  return (
    <Pressable
      onPress={() => {
        console.log('Hello world');
      }}
    >
      <Box p="5" rounded="8" bg="violet.700">
        <HStack alignItems="flex-start">
          <Text fontSize={12} color="cyan.50" fontWeight="medium">
            {type}
          </Text>
          <Spacer />
          <Text fontSize={10} color="cyan.100">
            1 month ago
          </Text>
        </HStack>
        <Text color="primary.50" mt="3" fontWeight="medium" fontSize={20}>
          {title}
        </Text>
        <Text mt="2" fontSize={14} color="cyan.100">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec
          eleifend mauris.
        </Text>
        <Flex>
          <Text mt="2" fontSize={12} fontWeight="medium" color="cyan.400">
            Read More
          </Text>
        </Flex>
      </Box>
    </Pressable>
  );
};
