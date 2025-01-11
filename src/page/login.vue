<script setup>

import {ref} from "vue";
import {login} from "../api/axios/index.js";
import {ElMessage} from "element-plus";
import router from "../router/index.js";
let form = ref({
  username:'',
  password:''
})



async function handelDen(){
  if(form.value.username!== '' && form.value.password !== '') {
    try {
      await login({username: form.value.username, password: form.value.password}).then(res => {
        // console.log(res)
        if (res.data.code === 200) {
          ElMessage({
            message: '登录成功',
            type: 'success',
            plain: true,
          })
          window.localStorage.setItem('token', res.data.token)
          router.push('/home')
        } else {
          ElMessage.error(res.data.message)
        }
      })
    } catch (err) {
      console.log(err)
    }
  }
}

</script>

<template>
  <div class="main">
    <div class="main-left">
      <div class="title"><h1>校园二手交易网</h1></div>
      <div class="description">校园二手交易网是吴倩写的第一个java+vue3的项目，具有完整的商品管理、客户管理功能。</div>

      <div class="copyright">&copy; 2024-2099 吴倩 All Rights Reserevd.</div>
    </div>
    <div class="main-right">
      <div class="login-title">用户登录</div>
      <div class="form-item">
        <label for="username">用户名</label>
        <input id="username" v-model.trim="form.username" type="text" placeholder="请输入邮箱/账户名/手机号">
      </div>
      <div class="form-item">
        <label for="password">密码</label>
        <input type="text" v-model.trim="form.password" id="password" placeholder="请输入密码">
      </div>

      <div class="form-item operate" >
        <div>前往注册</div>
        <div>忘记密码？</div>
      </div>

      <div class="form-item">
        <button @click="handelDen">登录</button>
      </div>

      <div class="other">更多登录方式</div>
      <div class="types">
        <div class="app">Q</div>
        <div class="app">微</div>
        <div class="app">支</div>
      </div>
    </div>
  </div>

</template>



<style scoped>
.operate{
  display: flex;
  justify-content: space-between;
  font-size: 0.75rem;
  color: #3c98f4;
}
.types{
  display: flex;
  justify-content: center;
  margin-top: 20px;
  gap: 30px;
}

.app{
  width: 35px;
  height: 35px;
  border: 1px solid #cccccc;
  text-align: center;
  line-height: 35px;
  border-radius: 50%;
  color: #cccccc;
}
.other{
  text-align: center;
  margin-top: 50px;
  color: #cdcdcd;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.other::before{
  display: block;
  content: '';
  width: 120px;
  height: 1px;
  background-color: #f6f6f6;
}

.other::after{
  display: block;
  content: '';
  width: 120px;
  height: 1px;
  background-color: #f6f6f6;
}


label{
  font-size: 0.8rem;
  color: #6c6c6c;
  display: block;
  margin-bottom: 3px;
}
input{
  width: 100%;
  outline: none;
  padding: 5px;
  border: 2px solid #cdcdcd;
}

input:focus{
  border: 2px solid rgb(112,203,246);
}

input::placeholder{
  color: #cdcdcd;
  font-size: 0.7rem;
}
.form-item{
  width: 65%;
  margin: 20px auto;
}
button{
  margin-top: 5px;
  width: calc(100% + 15px);
  padding: 8px 3px;
  outline: none;
  color: white;
  background-color: dodgerblue;
  border: none;
}

button:active{

  background-color: #3c98f4;
}

.login-title{
  text-align: center;
  margin-top: 40%;
  font-weight: bold;
  font-size: 1.5rem;
  color: #959595;
}

.title{
  color: white;
  margin-top: 80px;
  margin-left: 40px;
}

.description{
  margin-left: 40px;
  margin-top: 5px;
  font-size: 0.8rem;
  color: #fafafa;
}
.main{
  width: 100vw;
  height: 100vh;
  display: flex;
  overflow: hidden;
}

.main-left{
  width: 70%;
  height: 100%;
  background: linear-gradient(to right, rgb(111,202,246), rgb(174,247,228));
  position: relative;
}

.copyright{
  position: absolute;
  bottom: 0;
  margin-bottom: 20px;
  margin-left: 40px;
  color: white;
  font-size: 0.65rem;
}

.main-right{
  width: 30%;
  height: 100%;
}


</style>
