import commentService from '../services/comment';

const commentReducer = (state = [], action) => {
  switch (action.type) {
    case 'NEW_COMMENT':
      return [action.data, ...state];
    case 'GET_COMMENTS':
      return action.data;
    default:
      return state;
  }
};

export const createComment = (comment) => {
  return async (dispatch) => {
    const newComment = await commentService.create(comment);

    dispatch({
      type: 'NEW_COMMENT',
      data: newComment,
    });
  };
};

export const getComments = (chatId) => {
  return async (dispatch) => {
    const comments = await commentService.getAll(chatId);
    dispatch({
      type: 'GET_COMMENTS',
      data: comments,
    });
  };
};

export default commentReducer;
