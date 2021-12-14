import axios from 'axios';

export default axios.create({
  baseURL: 'https://fierce-wildwood-03231.herokuapp.com',
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
});
