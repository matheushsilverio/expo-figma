import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

import DefaultLayout from "@/components/DefaultLayout";
Vue.component("DefaultLayout", DefaultLayout);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
