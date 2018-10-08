//import "./scss/style.scss";
import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import BootstrapVue from 'bootstrap-vue'


new Vue({
  el: '#app',
  router:router,
  render: h => h(App)
})


Vue.use(BootstrapVue);
