import React from 'react';
import { Box, HStack, Text, Pressable, Spacer, Flex } from 'native-base';
import { Tag } from '../components/Tag';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import moment from 'moment';

export const Card = ({ post, navigation, route }) => {
  const { title, content, tag, likes, comments } = post;

  const truncate = (str, n) => {
    return str.length > n ? str.substr(0, n - 1) + '..' : str;
  };

  const formatDate = (date) => {
    return moment(date).fromNow();
  };

  return (
    <Pressable
      onPress={() => {
        navigation.navigate('Post', {
          postid: post.id,
          post,
        });
      }}
    >
      <Box p="5" rounded="8" backgroundColor="warmGray.50" shadow={2}>
        <HStack alignItems="flex-start">
          <Tag content={tag} />
          <Spacer />
          <Text fontSize={10} color="black">
            {formatDate(post.createdAt)}
          </Text>
        </HStack>
        <Text color="black" mt="3" fontWeight="medium" fontSize={20}>
          {title}
        </Text>
        <Text mt="2" fontSize={14} color="black">
          {truncate(content, 130)}
        </Text>
        <Flex>
          <Text mt="2" fontSize={12} fontWeight="medium" color="black">
            Read More
          </Text>
        </Flex>
        <Flex flexDirection="row" justifyContent="space-between">
          <Box marginTop={2}>
            <Text>👍 {likes}</Text>
          </Box>
          <Box marginTop={2}>
            <Text>
              <MaterialCommunityIcons
                name="comment-processing-outline"
                size={24}
                color="black"
              />{' '}
              {comments.length}
            </Text>
          </Box>
        </Flex>
      </Box>
    </Pressable>
  );
};
