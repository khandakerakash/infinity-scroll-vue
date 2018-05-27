import Vue from 'vue'
import App from './App.vue'

// register globally
import infiniteScroll from 'vue-infinite-scroll'

Vue.use(infiniteScroll)

new Vue({
  el: '#app',
  render: h => h(App)
})
