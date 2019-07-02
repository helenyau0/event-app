import axios from 'axios';

export default axios.create({
  baseURL: 'http://api.my-events.site/api/v1/',
  responseType: 'json'
});
