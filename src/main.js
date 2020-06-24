import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

// 3rd party packages
import Vuelidate from "vuelidate";
import VueIziToast from "vue-izitoast";
import "izitoast/dist/css/iziToast.css";
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
import Nprogress from "nprogress";
import "nprogress/nprogress.css";

// Registering Plugins
Vue.use(Vuelidate);
Vue.use(VueIziToast);
Vue.use(require("vue-moment"));

//regixtered component
Vue.component("v-select", vSelect);

router.beforeEach((to, from, next) => {
  Nprogress.start();
  next();
});

router.afterEach(() => {
  Nprogress.done();
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
