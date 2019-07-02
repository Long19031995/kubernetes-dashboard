import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router,
  store
})
