import axios from 'axios';

export default axios.create({
  baseURL: 'http://desvinhomanager.herokuapp.com/public/api'
  // baseURL: 'http://localhost:8000/api'
});