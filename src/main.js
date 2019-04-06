import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from 'axios';
import Antd from 'ant-design-vue';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css'
import './assets/common.css'


Vue.use(VueAwesomeSwiper);
import "./registerServiceWorker";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import "ant-design-vue/dist/antd.css";
Vue.use(ElementUI);
Vue.use(Antd)
Vue.prototype.$http = axios;




Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
