import axios from 'axios';
import { api } from '../utils/constants';
const baseUrl = `${api}/comments`;

let token = null;

const setToken = (newToken) => {
  token = `bearer ${newToken}`;
  console.log(token);
};

const removeToken = () => {
  token = null;
};

const getAll = (chatId) => {
  const request = axios.get(`${api}/posts/${chatId}/comments`);
  return request.then((response) => response.data);
};

const create = async (newObject) => {
  const config = {
    headers: { Authorization: token },
  };
  const response = await axios.post(baseUrl, newObject, config);
  console.log('Response from backend', response.data);
  return response.data;
};

export default {
  setToken,
  removeToken,
  getAll,
  create,
};
