import loginService from '../services/login';
// import AsyncStorage from '@react-native-async-storage/async-storage';

const loginReducer = (state = null, action) => {
  switch (action.type) {
    case 'LOG_IN':
      return action.data;
    case 'LOG_OUT':
      return null;
    default:
      return state;
  }
};

export const loginUser = (credentials) => {
  return async (dispatch) => {
    const loggedInUser = await loginService.login(credentials);

    // try {
    //   await AsyncStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));
    // } catch (e) {
    //   console.error('Error saving token in local storage', e);
    // }

    dispatch({
      type: 'LOG_IN',
      data: loggedInUser,
    });
  };
};

export const tokenLoginUser = (loggedInUser) => {
  return {
    type: 'TOKEN_LOG_IN',
    data: loggedInUser,
  };
};

export const logoutUser = () => {
  return {
    type: 'LOG_OUT',
  };
};

export default loginReducer;
