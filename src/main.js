import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import i18n from './i18n'
import '@/assets/scss/reset.scss'
import '@/assets/scss/element-variables.scss'
import 'font-awesome/css/font-awesome.min.css'

import api from './http'
import global from '@/utils/global'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(api)
Vue.prototype.global = global
new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
