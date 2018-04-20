import axios from 'axios'



export function login(loginVM) {
    return axios.post('/login',
        loginVM
    ,{
        headers: {
              'Content-Type': 'application/json'
        }
    }).then((response)=>{
        console.log('login success catched')
        console.log(response)
       return {success:true}
    },(x)=>{
        console.log('login error catched')
        return {success:false}
    })
}
