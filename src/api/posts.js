import axios from 'axios';

export const getPosts = id => {
  return axios.get(`https://jsonplaceholder.typicode.com/users/${id}/posts`);
};
