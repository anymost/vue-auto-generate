import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/store';
import bfui from 'bfui';
import { sync } from 'vuex-router-sync';
import './registerServiceWorker';
import 'bfui/lib/theme-default/index.css';

Vue.config.productionTip = false;
Vue.use(bfui);
sync(store, router);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
