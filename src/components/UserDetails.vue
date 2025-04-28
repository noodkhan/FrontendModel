<template>
    <div class="container mt-5">
      <h2>User Details</h2>
      <div v-if="loading" class="spinner-border text-primary" role="status">
        <span class="sr-only">Loading...</span>
      </div>
      <div v-if="error" class="alert alert-danger">
        {{ error }}
      </div>
      <div v-if="user" class="card">
        <div class="card-body">
          <h5 class="card-title">{{ user.name }}</h5>
          <p class="card-text">Email: {{ user.email }}</p>
          <p class="card-text">Phone: {{ user.phone }}</p>
          <!-- Add any other user details here -->
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from '../axios';
  
  export default {
    data() {
      return {
        user: null,
        loading: false,
        error: null,
      };
    },
    created() {
      this.fetchUserDetails();
    },
    methods: {
      async fetchUserDetails() {
        this.loading = true;
        try {
          const userId = '67f3ccfdf3f6b1fa1f516009';  // Replace with dynamic user ID if needed
          const response = await axios.get(`/users/user/${userId}`);
          this.user = response.data;
        } catch (error) {
          this.error = 'Failed to fetch user details.';
        } finally {
          this.loading = false;
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add any custom styles here */
  </style>
  