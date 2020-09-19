import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.config.productionTip = false

Vue.use(VueRouter)
import dicovery from './components/discovery.vue'
import playlists from './components/playlists.vue'
import songs from './components/songs.vue'
import mvs from './components/mvs.vue'
import result from './components/result.vue'

let router = new VueRouter({
  routes: [
    {
      path: '/discovery',
      component: dicovery
    },
    {
      path: '/playlists',
      component: playlists
    },
    {
      path: '/songs',
      component: songs
    },
    {
      path: '/mvs',
      component: mvs
    },
    {
      path: '/result',
      component: result
    }
  ]
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
