import Vue from 'vue'
import App from './App'
import router from './router'
import store from '@/store/store'
import { sync } from 'vuex-router-sync'

import Buefy from 'buefy'

Vue.use(Buefy)

Vue.config.productionTip = false

sync(store, router)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
