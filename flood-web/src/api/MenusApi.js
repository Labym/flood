import axios from 'axios'



export function menus(userId) {
    return axios.get('/resources/menus').then((response)=>{
        console.log('get menus success')
        console.log(response)
        return {success:true}
    },(x)=>{
        console.log('get menus failed')
        return {success:false}
    })
}
