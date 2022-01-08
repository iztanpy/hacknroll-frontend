import React, { useEffect } from 'react';
import { Text, Box, VStack, Button, ScrollView, Flex } from 'native-base';
import { Card } from '../../components/Card';
import { getPosts } from '../../reducers/post';
import { useDispatch, useSelector } from 'react-redux';

const HomeScreen = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const loggedInUser = useSelector((state) => state.login);

  useEffect(() => {
    dispatch(getPosts());
  }, [route]);

  return (
    <ScrollView>
      <Box mt={10} mx={5} mb={24}>
        <Flex
          justifyContent="space-between"
          flexDirection="row"
          alignItems="center"
        >
          <Text fontSize="4xl" fontWeight="extrabold" mb={3}>
            Forum
          </Text>
          {loggedInUser && (
            <Button
              size="lg"
              onPress={() => navigation.navigate('PostCreateScreen')}
              backgroundColor="rose.500"
            >
              New Post
            </Button>
          )}
        </Flex>

        <VStack space={3}>
          {posts &&
            posts.map((post) => (
              <Card post={post} key={post.id} navigation={navigation} />
            ))}
        </VStack>
      </Box>
    </ScrollView>
  );
};

export default HomeScreen;
