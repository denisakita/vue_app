import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';


createApp(App).use(VueAxios, axios).use(router).mount('#app')
