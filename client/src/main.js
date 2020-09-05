import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// Vuesax Component Framework
import Vuesax from 'vuesax'
import 'material-icons/iconfont/material-icons.css' //Material Icons
import 'vuesax/dist/vuesax.css'; // Vuesax
Vue.use(Vuesax)

// Vee-validate components
import { ValidationObserver, ValidationProvider, extend } from 'vee-validate'
import * as rules from 'vee-validate/dist/rules';

Vue.component('ValidationObserver', ValidationObserver)
Vue.component('ValidationProvider', ValidationProvider)

// Installing all rules
Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule]);
});

//Global Components
import './globalComponents'

// Styles: SCSS
import './assets/scss/main.scss'

//Tailwind css
import './assets/css/main.css'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
