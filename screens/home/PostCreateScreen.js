import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Box,
  Text,
  Stack,
  ScrollView,
  FormControl,
  Input,
  VStack,
  Button,
  Flex,
  Pressable,
  TextArea,
  Spacer,
} from 'native-base';
import { ChevronLeftIcon } from 'native-base';
import { createPost } from '../../reducers/post';

export default function PostCreateScreen({ navigation }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.login);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tag, setTag] = useState('');

  const handleCreatePost = () => {
    dispatch(
      createPost({
        title,
        content,
        tag,
      })
    );
    navigation.navigate('Forum');
  };

  const handleCancel = () => {
    setTitle('');
    setContent('');
    setTag('');
    navigation.goBack();
  };

  return (
    <ScrollView>
      <Pressable mt={10} onPress={handleCancel}>
        <ChevronLeftIcon size="10" />
      </Pressable>
      <VStack space={6} mx={10}>
        <FormControl>
          <Box>
            <Text
              fontSize="3xl"
              fontWeight="extrabold"
              mb={3}
              textAlign="center"
            >
              Create Post
            </Text>
            <FormControl.Label>Title</FormControl.Label>
            <Input
              p={2}
              placeholder="title"
              value={title}
              type="text"
              size="lg"
              onChangeText={(text) => setTitle(text)}
            />
          </Box>
        </FormControl>
        <FormControl>
          <Box>
            <FormControl.Label>Tag</FormControl.Label>
            <Input
              p={2}
              placeholder="tag"
              value={tag}
              type="text"
              size="lg"
              onChangeText={(text) => setTag(text)}
            />
          </Box>
        </FormControl>
        <FormControl>
          <Box>
            <FormControl.Label>Content</FormControl.Label>
            <TextArea
              p={2}
              placeholder="content"
              type="content"
              value={content}
              size="lg"
              h={150}
              onChangeText={(text) => setContent(text)}
            />
          </Box>
        </FormControl>
      </VStack>
      <Flex marginTop={5} flexDirection="row" justifyContent="center">
        <Button
          size="lg"
          onPress={handleCancel}
          variant="ghost"
          colorScheme="rose"
        >
          Cancel
        </Button>
        <Button size="lg" onPress={handleCreatePost} backgroundColor="rose.500">
          Submit
        </Button>
      </Flex>
    </ScrollView>
  );
}
