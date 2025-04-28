<template>
  <div class="d-flex flex-column align-items-center justify-content-center min-vh-100 bg-light">

    <!-- Welcome Section -->
    <div class="text-center mb-4">
      <h1 class="display-4 fw-bold text-primary">Welcome to Our Website {{ username }}</h1>
      <p class="lead text-secondary">This is the landing page of the app. We're excited to have you here!</p>
    </div>

    <!-- Action Buttons -->
    <div class="d-flex justify-content-center gap-3">
      <router-link to="/login">
        <button class="btn btn-primary btn-lg px-5 py-3">Login</button>
      </router-link>
      <router-link to="/register">
        <button class="btn btn-success btn-lg px-5 py-3">Register</button>
      </router-link>
    </div>

    <!-- Footer Section -->
    <footer class="mt-5 text-center">
      <p class="text-muted">© 2025 Your Website. All rights reserved.</p>
    </footer>

  </div>
</template>
  
  <script>
  export default {
    name: 'HomePage',
    created() {
    } 
  };
  </script>
 
<script setup>

  import axios from 'axios';
  import {ref} from 'vue'

  const username = ref('');
  const userId = localStorage.getItem('token')
  const fetchUserData = async (userId) => {
  try {
    const response = await axios.get(`${process.env.VUE_APP_API_BASE_URL}/users/user/${userId}`);
    const data = response.data.user;
    username.value = data.username ;
    console.log(data)
  } catch (error) {
    if(error.status == 401){
      console.log('Error fetching user details', error);
      return ;
    } 
    console.error('Error fetching user details', error);
    }
  }

  fetchUserData(userId)

</script> 

<style scoped>
/* Centering content vertically and horizontally */
.d-flex {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Styling for headings */
h1 {
  font-size: 3.5rem;
  font-weight: 700;
  color: #1a73e8; /* Primary blue color */
}

p.lead {
  font-size: 1.25rem;
  color: #6c757d; /* Subtle text color */
}

/* Action button styles */
button {
  font-size: 1.25rem;
  font-weight: 500;
  transition: background-color 0.3s ease;
}

button:hover {
  transform: scale(1.05);
}

/* Footer Styling */
footer {
  background-color: #f8f9fa;
  padding: 15px;
  border-top: 1px solid #e0e0e0;
}

footer p {
  font-size: 0.875rem;
  color: #6c757d;
}
</style>