import axios from 'axios';

axios.defaults.headers.common['Authorization'] = process.env.REACT_APP_API_KEY;

export default axios.create({
  baseURL: 'http://api.my-events.site/api/v1/',
  responseType: 'json'
});
