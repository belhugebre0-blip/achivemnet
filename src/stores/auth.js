import { reactive } from 'vue'

const user = reactive({
  username: null,
  token: null,
})

export function useAuth() {
  function login(username, password) {
    if (!username || !password) return false
    user.username = username
    user.token = 'fake-jwt-token'
    localStorage.setItem('auth', JSON.stringify({ username, token: user.token }))
    return true
  }

  function logout() {
    user.username = null
    user.token = null
    localStorage.removeItem('auth')
  }

  function isAuthenticated() {
    return !!user.token
  }

  function init() {
    const saved = localStorage.getItem('auth')
    if (saved) {
      const parsed = JSON.parse(saved)
      user.username = parsed.username
      user.token = parsed.token
    }
  }

  return { user, login, logout, isAuthenticated, init }
}
