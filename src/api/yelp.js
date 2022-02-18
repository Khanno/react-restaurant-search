import Axios from 'axios';

export default Axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: '' //Put the API id here,
  }
});