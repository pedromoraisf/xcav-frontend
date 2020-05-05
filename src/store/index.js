import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    fileState: {
      state: 0, 
      data: ""
    }
  },
  mutations: {
    setFileState(state, payload) {
      state.fileState.state = payload.state;
      state.fileState.data = payload.data;

      return true;
    }
  },
  actions: {
    commitSetterFileState({ commit }, payload) {
      commit("setFileState", payload);
    }
  }
})
