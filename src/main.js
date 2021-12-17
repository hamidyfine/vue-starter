import Vue from 'vue';
import Http from '@plugins/services/http';
import i18n from '@plugins/locales';
import services from '@plugins/services';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.use(services);
Vue.config.productionTip = false;

// Register Axios in Vue HTTP
Vue.prototype.$http = Http;

// eslint-disable-next-line vue/require-name-property
new Vue({
    i18n,
    router,
    store,
    render: h => h(App),
}).$mount('#app');
