import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    getShows: [],
    getSeasons: [],
    espisodes: [],
    selectedId: 0
  },
  mutations: {
    updateShows(state, payload) {
      //state.getShows = [];
      state.getShows = payload; //tate.getShows.concat(payload);
    },
    updateSeasons(state, payload) {
      state.getSeasons = [];
      state.getSeasons = state.getSeasons.concat(payload);
    }
  },
  actions: {}
});
