import { getUsers, createUser, updateUser, deleteUser } from 'src/api/users'

const user = {
  namespaced: true,
  state: {
    users: [],
    pagination: {
      page: 1,
      per_page: 6,
      total: 0,
      total_pages: 0,
    },
  },
  mutations: {
    SET_USERS(state, payload) {
      state.users = payload.data
      state.pagination = {
        page: payload.page,
        per_page: payload.per_page,
        total: payload.total,
        total_pages: payload.total_pages,
      }
    },
    ADD_USER(state, user) {
      state.users.unshift(user)
    },
    UPDATE_USER(state, updatedUser) {
      const index = state.users.findIndex((u) => u.id === updatedUser.id)
      if (index !== -1) {
        state.users.splice(index, 1, updatedUser)
      }
    },
    DELETE_USER(state, id) {
      console.log(state.users.filter((item) => item.id != id))
      state.users = state.users.filter((item) => Number(item.id) !== Number(id))
    },
  },
  actions: {
    async fetchUsers({ commit }, page = 1) {
      const response = await getUsers(page)
      commit('SET_USERS', response.data)
    },
    async createUserAction({ commit }, data) {
      const response = await createUser(data)
      commit('ADD_USER', {
        id: Number(response.data.id),
        first_name: data.first_name,
        last_name: data.last_name,
        email: data.email,
        avatar: '',
      })
    },
    async updateUserAction({ commit }, { id, data }) {
      await updateUser(id, data)
      commit('UPDATE_USER', {
        id,
        first_name: data.first_name,
        last_name: data.last_name,
        email: data.email,
        avatar: data.avatar || '',
      })
    },
    async deleteUserAction({ commit, dispatch }, id) {
      await deleteUser(id)
      commit('DELETE_USER', id)
      await dispatch('fetchUsers', this.state.pagination.page)
    },
  },
}

export default user
