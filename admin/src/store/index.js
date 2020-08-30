import Vue from 'vue'
import Vuex from 'vuex'

import moduleECommerce from './moduleECommerce.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    eCommerce: moduleECommerce,
  }
})
