import {createRouter, createWebHistory} from "vue-router";
import Login from "../page/login.vue";
import Home from "../page/home.vue";
import Error from "../page/error.vue";
import {home} from "../api/axios/index.js";

const routes = [
    {
      path: "/",
      redirect: "/login",
    },
    {
        path:'/login',
        name:'login',
        component: Login,
        meta: {ignoreLogin:true}
    },
    {
        path:'/home',
        name:'home',
        component: Home,
    },{
        path:'/error',
        name:'error',
        component:Error,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})


//前端通过解析token是否符合标准再进行跳转页面
router.beforeEach(async (to, from, next) => {
    if(to.meta?.ignoreLogin === true) return next()
    if(!window.localStorage.getItem('token')){
        if(to.path !== '/login'){
            return next('/login')
        }else{
            //当已经是在登录页面就允许继续做跳转，否则继续使用/login会导致无限回调到login页面，倒是登录页面渲染不出来
            return next()
        }
    }else {
        if(window.localStorage.getItem('token')){
            let token = window.localStorage.getItem('token')
            if(token !== undefined && token !== null){
                const resp = await home(token);
                if(resp.data.code === 200) return next()
                return next('/login')
            }
        }
    }
})


export default router;
