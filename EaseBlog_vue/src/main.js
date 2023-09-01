import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import naive from 'naive-ui'
import {router} from './common/router'
import { createPinia } from 'pinia'
import axios from 'axios'

//axios地址全局配置
axios.defaults.baseURL = "http://localhost:8080"

createApp(App)
.use(naive)
.use(createPinia())
.use(router)
.mount('#app')
