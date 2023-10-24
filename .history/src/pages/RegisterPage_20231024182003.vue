<template>
  <div>
    <h1>Register</h1>
    <form @submit.prevent="registerUser">
      <div class="form-group">
        <label for="username">Username:</label>
        <input
          type="text"
          id="username"
          v-model="userData.username"
          required
        />
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input
          type="email"
          id="email"
          v-model="userData.email"
          required
        />
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
  data() {
    return {
      userData: {
        username: '',
        email: '',
        password: '',
      },
    };
  },
  methods: {
    async registerUser() {
      // You can implement the registration logic here
      // Typically, you'd make an HTTP POST request to your backend
      // to create a new user with the provided data.

      // Example using the Fetch API (make sure to replace with your actual API endpoint):
      try {
        const response = await fetch('/api/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.userData),
        });

        if (response.ok) {
          // Registration was successful
        } else {
          // Handle registration errors
        }
      } catch (error) {
        // Handle network errors
      }
    },
  },
};
</script>

<style scoped>
/* Add your CSS styles here */
</style>
