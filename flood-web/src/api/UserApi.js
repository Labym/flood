import axios from 'axios'


export function login(username, password, captcha, rememberMe = false) {
    return axios({
        method: 'post',
        url: '/login',
        data: {
            username: username,
            password: password,
            captcha: captcha,
            rememberMe: rememberMe
        }
    })
}
