import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

//import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueSocketIO from 'vue-socket.io'
import SocketIO from 'socket.io-client';

const socketConnection = SocketIO('http://localhost:4201');

Vue.config.productionTip = false

Vue.prototype.$envio = 10;
Vue.prototype.$paises = ['Perú'];

Vue.prototype.$url = 'http://localhost:4201/api';
Vue.prototype.$token = localStorage.getItem('token');
Vue.use(BootstrapVue)
Vue.use(new VueSocketIO({
  debug : true,
  connection:socketConnection,
  vuex:{
    store,
    actionPrefix : 'SOCKET_',
    mutationPrefix: 'SOCKET_'
  },
}))

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
