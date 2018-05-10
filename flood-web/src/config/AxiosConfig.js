import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:9090/api';
axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.interceptors.request.use(function (config) {

    if (sessionStorage.getItem("authorized")) {
        let token = sessionStorage.getItem("token");
        config.headers={
            Authorization:'Bearer '+token
        }
    }
    console.log('request config:')
    console.log(config)
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});