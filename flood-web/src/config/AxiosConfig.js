import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:9090/api/v1';
axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});