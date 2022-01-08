import React from 'react';
import { Box, Text } from 'native-base';

const BaseTag = ({ content, color }) => {
  return (
    <Box paddingX={2} paddingY={1} backgroundColor={color} borderRadius={40}>
      <Text fontSize="xs" fontWeight="bold">
        {content}
      </Text>
    </Box>
  );
};

export const Tag = ({ content }) => {
  if (content === 'Advice') {
    return <BaseTag content={content} color="red.200" />;
  } else if (content === 'Depression') {
    return <BaseTag content={content} color="blue.200" />;
  } else {
    return <BaseTag content={content} color="green.200" />;
  }
};
