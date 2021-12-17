/*-----------------------------------------------------------------
- WooCommerce Plugin
-----------------------------------------------------------------*/
import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api';

const wc = new WooCommerceRestApi({
    url           : 'https://sheymode.hamidyaftian.ir/panel/',
    consumerKey   : 'ck_e57b16cc78bb9c6b0edcb41749f85c5be5593188',
    consumerSecret: 'cs_55f995e73779c83d2969d953e1401ea86be6a8d9',
    version       : 'wc/v3',
});

// Export plugin
export default {
    /**
     * Install plugin
     * @param Vue
     */
    install(Vue) {
        Vue.prototype.$wc = wc; // eslint-disable-line
    },
};
