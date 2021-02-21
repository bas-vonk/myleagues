import Vue from "vue";
import App from "./App.vue";

// import router from "./router.js";
// import store from "./store/index.js";

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.config.productionTip = false;

// Global bootstrap
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

// Router and store
// Vue.use(router);
// Vue.use(store);

new Vue({
  render: h => h(App)
}).$mount("#app");
