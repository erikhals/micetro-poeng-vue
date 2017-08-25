import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    show: {
      players: [
        {
          number: '',
          name: '',
          active: '',
          eliminated: ''
        }
      ],
      events: [
        {
          type: '',
          number: '',
          players: '',
          points: ''
        }
      ]
    },
    user: {
      id: ''
    }
  },
  mutations: {},
  actions: {},
  getters: {}
})
