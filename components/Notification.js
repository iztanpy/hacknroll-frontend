import React from 'react';
import { Text } from 'native-base';

export const Notification = ({ message }) => {
  if (message === null) {
    return null;
  } else if (message.success) {
    return <Text color="red.800">{message}</Text>;
  } else {
    return <Text color="green.800">{message}</Text>;
  }
};
