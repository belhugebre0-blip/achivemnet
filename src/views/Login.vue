<template>
  <form @submit.prevent="handleLogin">
    <h2>Login</h2>
    <input v-model="username" placeholder="Username" />
    <input v-model="password" type="password" placeholder="Password" />
    <button type="submit">Login</button>
    <p v-if="error" class="error">{{ error }}</p>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuth } from '../stores/auth.js'

const router = useRouter()
const { login } = useAuth()

const username = ref('')
const password = ref('')
const error = ref('')

function handleLogin() {
  if (login(username.value, password.value)) {
    router.push('/dashboard')
  } else {
    error.value = 'Username and password are required'
  }
}
</script>

<style scoped>
form { max-width: 300px; margin: 4rem auto; display: flex; flex-direction: column; gap: 0.5rem; }
input { padding: 0.5rem; }
.error { color: red; font-size: 0.875rem; }
</style>
