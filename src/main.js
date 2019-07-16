import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/css/reset.css";
import "./assets/css/index.css";
import "./common/index.css";
import "./components/container"

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import VueParticles from 'vue-particles'  
Vue.use(VueParticles)  


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
