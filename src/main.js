import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router/index.js";
import {loadSpotify} from "./spotify/loadTokens.js";

createApp(App)
    .use(loadSpotify)
    .use(router)
    .mount('#app')
