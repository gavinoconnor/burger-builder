import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-burger-builder-a90f9.firebaseio.com/'
});

export default instance;
