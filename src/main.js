import { createApp } from 'vue';

import axios from 'axios';
import VueAxios from 'vue-axios';
import router from './router';
import './index.css';
import './app.css';
import App from './App.vue';
import Loading from 'vue3-loading-overlay';
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';
import VueKinesis from "vue-kinesis";


const app = createApp(App)
app.use(VueKinesis)
app.use(router)
app.component('Loading', Loading)
app.use(VueAxios, axios)
app.mount('#app')