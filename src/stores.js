import { createStore } from 'vuex'

const store = createStore({
  state: {
    username: '',
    password: '',
  },
  mutations: {
    // Mutation để cập nhật username và password
    setUsername(state, username) {
      state.username = username
    },
    setPassword(state, password) {
      state.password = password
    },
  },
  actions: {
    // Action để thực hiện việc cập nhật thông tin tài khoản
    updateAccount({ commit }, { username, password }) {
      commit('setUsername', username)
      commit('setPassword', password)
    },
  },
})

export default store
