import axios from 'axios'



export function login(loginVM) {
    return axios.post('/authenticate',
        loginVM
    ,{

    }).then((response)=>{
        console.log('login success catched')
        console.log(response)
       return {success:true,...response.data}
    },(x)=>{
        console.log('login error catched')
        return {success:false,...x.data}
    })
}

export function register(registrationVM) {
    return axios.post('/register',
        registrationVM
        ,{

        }).then((response)=>{
        console.log('register success catched')
        console.log(response)
        return {success:true,email:registrationVM.email}
    },(x)=>{
        console.log('register error catched')
        console.log(x)
        return {success:false,error:''}
    })
}