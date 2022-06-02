import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import bootstrap from 'bootstrap';

new Vue({
  render: h => h(App),
  bootstrap,
}).$mount('#app')
