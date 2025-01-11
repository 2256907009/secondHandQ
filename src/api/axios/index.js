import request from "../request/index.js";

//登录
export function login(data){
    return request({
      method:'post',
      url:'/login',
      data
    });
}

//token校验
export function home(data) {
    return request({
        method: 'post',
        url: '/verify',
        data:{token:data},
    })
}



