const auth = {
  namespaced: true,
  state: {
    token: sessionStorage.getItem('session_token') || null,
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token
    },
    CLEAR_TOKEN(state) {
      state.token = null
    },
  },
  actions: {
    login({ commit }, { email, password }) {
      if (email && password) {
        const token = 'fake-session-token'
        commit('SET_TOKEN', token)
        sessionStorage.setItem('session_token', token)
      } else {
        throw new Error('Invalid credentials')
      }
    },
    logout({ commit }) {
      commit('CLEAR_TOKEN')
      sessionStorage.removeItem('session_token')
    },
  },
  getters: {
    isAuthenticated: (state) => !!state.token,
  },
}

export default auth
