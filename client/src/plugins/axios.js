const axios = require('axios');
axios.defaults.baseURL = process.env.VUE_APP_BASE_API || 'http://localhost:3000';

// axios.defaults.baseURL = 'http://localhost:3000';
axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.interceptors.response.use(
    res => {
      return res.data;
    })