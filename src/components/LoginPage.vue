<template>
  <div class="container">
    <h1 class="text-center mb-4">Login</h1>
    <div class="card shadow-sm p-4">
      <div class="card-body">
        <form @submit.prevent="loginUser">
          <!-- Username Field -->
          <div class="mb-3">
            <label for="username" class="form-label">Username</label>
            <input 
              v-model="username" 
              type="text" 
              id="username" 
              class="form-control" 
              placeholder="Enter your username" 
              required
            />
          </div>

          <!-- Password Field -->
          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input 
              v-model="password" 
              type="password" 
              id="password" 
              class="form-control" 
              placeholder="Enter your password" 
              required
            />
          </div>

          <!-- Submit Button -->
          <div class="d-grid gap-2">
            <button type="submit" class="btn btn-primary btn-block">Login</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

  <script>
  import axios from 'axios';
  import Swal from 'sweetalert2';

 
  export default {
    data() {
      return {
        username: '',
        password: '',
      };
    },
    methods: {

      async loginUser() {
        try {
          const response = await axios.post(`${process.env.VUE_APP_API_BASE_URL}/users/login`, {
            username: this.username,
            password: this.password,
          });
          console.log('Login successful', response.data);
          // Store token in localStorage (for example)

          Swal.fire({
            icon: 'success',
            title: 'You logged in successfully!',
            text: "You will be logged out.",
            showCancelButton: true,
            confirmButtonText: 'Yes, log me out!',
          }).then((result) => {
            if (result.isConfirmed) {

              // save user from localStorage
              localStorage.setItem('token', token);

              // Redirect to the home page after login 
              this.$router.push({ name: 'user-profile', params: { id: response.data.user.id } 

            })
            .then(() => {
                // Optionally, show a confirmation message after redirect
                Swal.fire('Login Confirm?', 'You have been Login successfully.', 'success'); 
                // Reload the page after navigating
                window.location.reload();
              });
            }
          });

          const token = response.data.user.id; // simple token not for safety just auth
          // go to user-profile with token params 
        } catch (error) {
              Swal.fire({
                icon: 'error',
                title: 'Wrong Password',
                text: 'Please try again.',
              });
              console.log('Login failed !', error);
            // console.error('Login failed', error);
        }
      },

    },
  };
  </script>
  