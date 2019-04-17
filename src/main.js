import Vue from 'vue'

import Mint from 'mint-ui'
import 'mint-ui/lib/style.css';
// import Index from '@/index/index.vue'
import App from './App.vue'
import router from '@/router'



Vue.use(Mint)
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')