import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    allroom: [],
    moreroom: [],
  },
  actions: {
    getroom (context) {
      const api = `${process.env.VUE_APP_APIPATH}/rooms`;
      axios.get(api, {
        headers: {
          'Accept':'application/json',
          'Authorization':`Bearer ${process.env.VUE_APP_CUSTOMPATH}`,
        },
      }).then((response) => {
        context.commit('ALLROOM',response.data.items);
      });
    },
    getmoreroom (context,id) {
      const api = `${process.env.VUE_APP_APIPATH}/room/${id}`;
      return new Promise((resolve) => {
        axios.get(api, {
          headers: {
            'Accept':'application/json',
            'Authorization':`Bearer ${process.env.VUE_APP_CUSTOMPATH}`,
          },
        }).then((response) => {
          context.commit('MOREROOM',response.data.room);
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
    }
  },
  getters: {
    allroom(state) {
      return state.allroom;
    },
    moreroom(state) {
      return state.moreroom;
    }
  }
});
