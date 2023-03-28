

/*
export default axios.create({
    baseURL:'https://9c96-103-106-239-104.ap.ngrok.io',
    headers: {"ngrok-skip-browser-warning": "true"}

});
*/

import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:1234/api/v1/movies',
});

export default api;
