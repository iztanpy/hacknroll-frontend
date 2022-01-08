import React, { useState, useEffect } from 'react';
import {
  Text,
  Box,
  VStack,
  Button,
  ScrollView,
  Flex,
  Pressable,
  TextArea,
} from 'native-base';
import { useDispatch, useSelector } from 'react-redux';
import { Tag } from '../../components/Tag';
import { ChevronLeftIcon } from 'native-base';
import moment from 'moment';

import { createComment, getComments } from '../../reducers/comment';
import { getPosts, updatePost } from '../../reducers/post';

const PostScreen = ({ route, navigation }) => {
  const loggedInUser = useSelector((state) => state.login);
  const [comment, setComment] = useState('');
  const { post, postid } = route.params;

  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comments);

  const formatDate = (date) => {
    return moment(date).fromNow();
  };

  const handleCreateComment = () => {
    dispatch(
      createComment({
        content: comment,
        postid,
        user: {
          username: loggedInUser.username,
        },
      })
    );
    setComment('');
  };

  const handleBack = () => {
    dispatch(getPosts());
    navigation.goBack();
  };

  useEffect(() => {
    dispatch(getComments(route.params.postid));
  }, [route.postid]);

  return (
    <ScrollView>
      <Box mb={24}>
        <Pressable mt={10} onPress={handleBack}>
          <ChevronLeftIcon size="10" />
        </Pressable>
        <Box mt={2} mx={4}>
          <Text fontSize="3xl" fontWeight="extrabold" mb={3}>
            {post.title}
          </Text>
          <Flex flexDirection="row" alignItems="center">
            <Tag content={post.tag} />
            <Text marginX={2}>·</Text>
            <Text fontSize="xs" fontWeight="bold">
              {formatDate(post.createdAt)}
            </Text>
          </Flex>

          <Box marginY={5}>
            <Text>{post.content}</Text>
          </Box>

          <Text fontSize="2xl" fontWeight="extrabold" mb={2}>
            Comments
          </Text>
          {loggedInUser && (
            <Box>
              <TextArea
                type="text"
                value={comment}
                placeholder="Add a comment here..."
                size="lg"
                onChangeText={(text) => setComment(text)}
              />
              <Flex marginTop={5} flexDirection="row" justifyContent="flex-end">
                <Button
                  size="lg"
                  onPress={handleCreateComment}
                  backgroundColor="rose.500"
                >
                  Submit
                </Button>
              </Flex>
            </Box>
          )}
          <VStack space={2}>
            {comments.length === 0 ? (
              <Box
                backgroundColor="info.100"
                borderColor="info.400"
                borderWidth={1}
                borderRadius={3}
                paddingX={4}
                paddingY={2}
                marginTop={5}
              >
                <Text color="info.600">Nobody has commented yet.</Text>
              </Box>
            ) : (
              comments.map((comment) => (
                <VStack space={1} marginTop={4}>
                  <Box
                    key={comment.id}
                    backgroundColor="gray.200"
                    paddingX={2}
                    paddingY={3}
                    borderRadius={10}
                  >
                    <Text fontWeight="bold">{comment.user.username}</Text>
                    <Text>{comment.content}</Text>
                  </Box>
                  <Text fontSize="xs">{formatDate(comment.createdAt)}</Text>
                </VStack>
              ))
            )}
          </VStack>
        </Box>
      </Box>
    </ScrollView>
  );
};

export default PostScreen;
