import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import request from "./api/request/index.js";


const app = createApp(App)
app.use(router)
app.use(ElementPlus)
app.use(request)
app.mount('#app')

