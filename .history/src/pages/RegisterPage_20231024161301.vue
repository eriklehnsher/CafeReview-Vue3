<template>
  <div>
    <h1>Register</h1>
    <form @submit.prevent="registerUser">
      <div class="form-group">
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="userData.username" required />
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="userData.email" required />
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input
          type="password"
          id="password"
          v-model="userData.password"
          required
        />
      </div>
      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      userData: {
        username: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    registerUser () {
     
    }
  }
}
</script>

<style scoped>
/* Add your CSS styles here */
</style>
