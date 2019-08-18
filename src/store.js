import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    allroom: [],
    moreroom: [],
    isLoading: false,
  },
  actions: {
    updateLoading (context, payload) {
      context.commit('LOADING', payload);
    },
    getroom (context) {
      context.commit('LOADING', true, { root: true });
      const api = `${process.env.VUE_APP_APIPATH}/rooms`;
      axios.get(api, {
        headers: {
          'Accept':'application/json',
          'Authorization':`Bearer ${process.env.VUE_APP_CUSTOMPATH}`,
        },
      }).then((response) => {
        context.commit('ALLROOM',response.data.items);
        context.commit('LOADING', false, { root: true });
      });
    },
    getmoreroom (context,id) {
      context.commit('LOADING', true, { root: true });
      const api = `${process.env.VUE_APP_APIPATH}/room/${id}`;
      return new Promise((resolve) => {
        axios.get(api, {
          headers: {
            'Accept':'application/json',
            'Authorization':`Bearer ${process.env.VUE_APP_CUSTOMPATH}`,
          },
        }).then((response) => {
          context.commit('MOREROOM',response.data.room);
          context.commit('LOADING', false, { root: true });
          resolve();
        });
      })
     }
  },
  mutations: {
    ALLROOM(state,payload) {
      state.allroom = payload;
    },
    MOREROOM(state,payload) {
      state.moreroom = payload;
    },
    LOADING (state, payload) {
      state.isLoading = payload
    },
  },
  getters: {
    allroom(state) {
      return state.allroom;
    },
    moreroom(state) {
      return state.moreroom;
    },
    loading (state) {
      return state.isLoading
    }
  }
});
