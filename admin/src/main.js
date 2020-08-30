import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import InstantSearch from 'vue-instantsearch'
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css' //Vuesax styles
import 'material-icons/iconfont/material-icons.css'
import FeatherIcon from './components/FeatherIcon.vue'

Vue.component(FeatherIcon.name, FeatherIcon)

Vue.use(InstantSearch)
Vue.use(Vuesax, {
  // options here

})

// Vuex Store
import store from './store/index'


// Feather font icon
require('./assets/css/iconfont.css')

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
