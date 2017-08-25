import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import * as firebase from 'firebase'
import router from './router'

Vue.use(Vuetify)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyDA3OKvkpat-9LFYSG0GnfY2xrfpLmz4aE',
      authDomain: 'micetro-poeng.firebaseapp.com',
      databaseURL: 'https://micetro-poeng.firebaseio.com',
      projectId: 'micetro-poeng',
      storageBucket: 'micetro-poeng.appspot.com'
    })
  }
})
