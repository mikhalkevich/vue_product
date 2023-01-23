import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios';
import components from '@/components/ui';
import store from "./store";
import CoreuiVue from '@coreui/vue';


axios.defaults.baseURL = 'http://localhost:8000/api/';
axios.defaults.headers["content-type"] = "application/json";
axios.defaults.headers.common.authorization = `Bearer ${localStorage.getItem('token')}`;
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';


const app = createApp(App);
components.forEach(component => {
    app.component(component.name, component)
});
app.use(router).use(store).use(CoreuiVue).mount('#app')
