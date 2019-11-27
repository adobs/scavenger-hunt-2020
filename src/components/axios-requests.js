import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://scavenger-hunt-api.herokuapp.com'
});

export default instance;
