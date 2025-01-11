import axios from 'axios';
import router from "../../router/index.js";


let request = axios.create({
    baseURL: 'http://localhost:8085/api',
})
/**
 * 前端使用路由守卫进行路由拦截
 */




/**
 * 在每次请求查看是否带有请求头
 */
request.interceptors.request.use(config => {
    /**
     * 请求前将获取的查看是否带有token，有将其放在请求头中，没有就返回登录页面
     */
    if(window.localStorage.getItem('token')){

        config.headers['token'] = window.localStorage.getItem('token')

    }else{
        router.push('/login').then(r => {
            console.log(r)
        })
    }
    return config
},e=>Promise.reject(e))


request.interceptors.response.use(response => {
    return response


})
export default request;
