import axios from 'axios'



export function menus(userId) {
    return axios.get('/resources/menus').then((response)=>{
        console.log('get menus success')
        console.log(response)
        return {success:true,data:response.data}
    },(x)=>{
        console.log('get menus failed')
        console.log(x)
        return {success:false}
    })
}
