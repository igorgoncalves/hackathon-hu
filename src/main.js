import Vue from 'vue'
import VeeValidate from 'vee-validate'
import App from './App.vue'
import VueFire from 'vuefire'
import router from './router'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.use(Vuetify)

Vue.config.productionTip = false
Vue.use(VueFire)
Vue.use(VeeValidate)

// /* eslint-disable no-new */
new Vue({
  render: h => h(App),
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  http: {
    root: '/'
  }
})
