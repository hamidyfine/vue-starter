import Vue from 'vue';
// import axios from 'axios';
// import VueAxios from 'vue-axios';
import App from './App.vue';
import router from './router';
import store from './store';
import i18n from './i18n';
import Services from './plugins/Services';
import Http from './plugins/Services/Http';

// Vue.use(VueAxios, axios);
Vue.use(Services);

// Register Axios in Vue HTTP
Vue.prototype.$http = Http;

Vue.config.productionTip = false;
// eslint-disable-next-line vue/require-name-property
new Vue({
    router,
    store,
    i18n,
    render: (h) => h(App),
}).$mount('#app');
