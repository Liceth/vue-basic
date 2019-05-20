import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'

Vue.config.productionTip = false

new Vue({
  Router,
  render: h => h(App),
}).$mount('#app')
