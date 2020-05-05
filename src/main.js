import Vue from 'vue'
import Vuesax from 'vuesax'
import { BootstrapVue } from 'bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.use(Vuesax, {})
Vue.use(BootstrapVue)

import 'vuesax/dist/vuesax.css'
import './scss/orchestrator.scss'
import 'animate.css/animate.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
