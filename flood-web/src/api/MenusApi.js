import axios from 'axios'



export function menus(userId) {
    return axios.get('/users/'+userId+'/menus').then((response)=>{
        console.log('login success catched')
        console.log(response)
        return {success:true}
    },(x)=>{
        console.log('login error catched')
        return {success:false}
    })
}
