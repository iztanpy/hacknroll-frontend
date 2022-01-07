import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, Box, VStack, Button } from 'native-base';
import { Card } from '../components/Card';

const HomeScreen = ({ navigation }) => {
  return (
    <Box mt={10} mx={5} justifyContent="center">
      <Text fontSize="4xl" fontWeight="extrabold" mb={3}>
        Forum
      </Text>
      <VStack space={3}>
        <Card title="I feel stressed out" type="Stress" />
        <Card title="What should I do?" type="Anxiety" />
        <Card title="Alone.." type="Loneliness" />
      </VStack>
    </Box>
  );
};

export default HomeScreen;
