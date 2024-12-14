import { api } from './base-api'

export function getUsers(page = 1) {
  return api.get('/users', { params: { page } })
}

export function createUser(payload) {
  return api.post('/users', payload)
}

export function updateUser(id, payload) {
  return api.put(`/users/${id}`, payload)
}

export function deleteUser(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(id)
      resolve({ status: 204 })
    }, 500)
  })
}
