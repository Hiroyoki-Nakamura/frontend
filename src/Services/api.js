import axios from 'axios';

export default axios.create({
  baseURL: 'http://desvinho.herokuapp.com/public/api'
});