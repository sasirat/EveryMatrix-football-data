import axios from 'axios';

const client = axios.create({
  headers: {
    'X-Auth-Token': 'bc202effbe574d0f8bb509c68f38d59c'
  }
})

export default client;