import axios from 'axios';

export default axios.create({
  baseURL: process.env.REACT_APP_URL,
  headers: {
    Authorization: `Token ${process.env.REACT_APP_API_KEY}`
  }
});
