import postService from '../services/post';

const postReducer = (state = [], action) => {
  switch (action.type) {
    case 'NEW_POST':
      return [action.data, ...state];
    case 'GET_POSTS':
      return action.data;
    case 'UPDATE_POST':
      return state.map((post) =>
        post.id === action.data.id ? action.data : post
      );
    case 'REMOVE_POST':
      return state.filter((blog) => blog.id !== action.data.id);
    default:
      return state;
  }
};

export const createPost = (post) => {
  return async (dispatch) => {
    const newPost = await postService.create(post);

    dispatch({
      type: 'NEW_POST',
      data: newPost,
    });
  };
};

export const getPosts = () => {
  return async (dispatch) => {
    const blogs = await postService.getAll();
    dispatch({
      type: 'GET_POSTS',
      data: blogs,
    });
  };
};

export const getPostById = () => {
  return async (dispatch) => {
    const post = await postService.getById;

    dispatch({
      type: 'GET_POST',
      data: post,
    });
  };
};

export const updatePost = (updatedPost) => {
  return async (dispatch) => {
    await postService.update(updatedPost);
    dispatch({
      type: 'UPDATE_POST',
      data: updatedPost,
    });
  };
};

export const removePost = (blog) => {
  return async (dispatch) => {
    await postService.remove(blog);
    dispatch({
      type: 'REMOVE_POST',
      data: blog,
    });
  };
};

export default postReducer;
