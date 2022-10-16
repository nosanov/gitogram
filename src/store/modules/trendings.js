import * as api from "@/api";

export default {
  namespaced: true,
  state: {
    trendings: {},
    isLoading: false,
  },
  getters: {
    fetchTrendings() {
      // return
    },
  },
  mutations: {
    SET_TRENDINGS_DATA(state, payload) {
      state.trendings = payload;
    },
    SET_TRENDINGS_LOADING(state, payload) {
      state.isLoading = payload;
    }
  },
  actions: {
    async fetchTrendings({ commit }) {
      commit('SET_TRENDINGS_LOADING', true);

      try {
        const {data} = await api.trendings.getTrendings();
        commit('SET_TRENDINGS_DATA', data.items);
      } catch(error) {
        console.error(error);
      } finally {
        commit('SET_TRENDINGS_LOADING', false);
      }
    }
  }
}
