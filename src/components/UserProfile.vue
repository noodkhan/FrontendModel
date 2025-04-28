<template>
  <p>{{ id }}</p>
  <div class="container mt-5">
    <h1 class="text-center mb-4">User Profile</h1>

    <div class="card shadow-lg border-light">
      <div class="card-header bg-primary text-white">
        <h5 class="card-title">Profile Details</h5>
      </div>

      <div class="card-body">
        <!-- Display Name and Username -->
        <div class="mb-4">
          <h5 class="card-title text-primary">Welcome, <strong>{{ name }}</strong>!</h5>
          <p class="card-text"><strong>Username:</strong> {{ username }}</p>
        </div>

        <!-- Display Email -->
        <div class="mb-3">
          <p class="card-text"><strong>Email:</strong> {{ email }}</p>
        </div>

        <!-- Profile Picture -->
        <div class="mb-3">
          <p class="card-text"><strong>Profile Picture:</strong></p>
          <!-- <img :src="profilePicture" alt="Profile Picture" class="img-thumbnail" style="max-width: 150px;" /> -->
        </div>

        <!-- Display Bio -->
        <div class="mb-3">
          <p class="card-text"><strong>Bio:</strong> <em>{{ bio || 'No bio available' }}</em></p>
        </div>

        <!-- Display Status -->
        <div class="mb-3">
          <p class="card-text"><strong>Status:</strong> <span :class="statusClass">{{ status }}</span></p>
        </div>

        <!-- Display Verification and Admin Status -->
        <div class="mb-3">
          <p class="card-text"><strong>Verified:</strong> {{ isVerified ? 'Yes' : 'No' }}</p>
          <p class="card-text"><strong>Admin:</strong> {{ isAdmin ? 'Yes' : 'No' }}</p>
        </div>

        <!-- Display Address -->
        <div class="mb-4">
          <h6 class="text-primary">Address:</h6>
          <p class="card-text"><strong>Street:</strong> {{ address.street }}</p>
          <p class="card-text"><strong>City:</strong> {{ address.city }}</p>
          <p class="card-text"><strong>State:</strong> {{ address.state }}</p>
          <p class="card-text"><strong>Country:</strong> {{ address.country }}</p>
        </div>

        <!-- Display Phone Number -->
        <div class="mb-3">
          <p class="card-text"><strong>Phone Number:</strong> {{ phoneNumber }}</p>
        </div>

        <!-- Display Preferences -->
        <div class="mb-3">
          <h6 class="text-primary">Preferences:</h6>
          <p class="card-text"><strong>Language:</strong> {{ preferences.language }}</p>
          <p class="card-text"><strong>Theme:</strong> {{ preferences.theme }}</p>
        </div>

        <!-- Display Subscription -->
        <div class="mb-3">
          <p class="card-text"><strong>Subscription:</strong> {{ subscription }}</p>
        </div>

        <!-- Display Location -->
        <div class="mb-3">
          <p class="card-text"><strong>Location:</strong> {{ location }}</p>
        </div>

        <!-- Display Creation and Update Dates -->
        <div class="mb-4">
          <h6 class="text-primary">Profile Dates:</h6>
          <p class="card-text"><strong>Created At:</strong> {{ new Date(createdAt).toLocaleString() }}</p>
          <p class="card-text"><strong>Updated At:</strong> {{ new Date(updatedAt).toLocaleString() }}</p>
        </div>
      </div>

      <div class="card-footer text-muted">
        <p class="text-center mb-0">Profile Information</p>
      </div>
    </div>
  </div>
</template>

  <script>
    import axios from 'axios';
    export default {
      data() {
        return {
        };
      },
      // when page is created 
      async created() {
        if(!this.id){
          return ;
        }
        try {
          const response = await axios.get(`${process.env.VUE_APP_API_BASE_URL}/users/user/${this.id}`);
          this.user = response.data;
        } catch (error) {
          console.log('Error fetching user details', error);
        }
      },
      watch : {
        id(newId){
          console.log('User ID changed' , 'fetching new user data...')
          this.fetchUserData(newId)
        }
      },
      methods : {
      }

    }; 
  </script>
  <script setup>
     import router from '@/router';
     import { ref } from 'vue';
     
     const userId =  router.currentRoute._rawValue.params.id

      // Define reactive variables for user data
      const id = ref('');
      const username = ref('');
      const name = ref('');
      const email = ref('');
      const profilePicture = ref('');
      const bio = ref('');
      const status = ref('');
      const isVerified = ref(false);
      const isAdmin = ref(false);
      const phoneNumber = ref('');
      const preferences = ref({
        language: 'en',
        theme: 'dark',
      });
      const address = ref({
      })
      const subscription = ref('');
      const location = ref('');
      const createdAt = ref('');
      const updatedAt = ref('');

      const fetchUserData = async (userId) => {
      try {
        const response = await axios.get(`${process.env.VUE_APP_API_BASE_URL}/users/user/${userId}`);
        const data = response.data.user;
        console.log(data)
        // Map the API response data to your frontend model
        username.value = data.username;
        name.value = data.name;
        email.value = data.email;
        profilePicture.value = data.profilePicture;
        bio.value = data.bio;
        status.value = data.status;
        isVerified.value = data.isVerified;
        isAdmin.value = data.isAdmin;
        address.value = data.address;
        phoneNumber.value = data.phoneNumber;
        preferences.value = data.preferences;
        subscription.value = data.subscription;
        location.value = data.location;
        createdAt.value = data.createdAt;
        updatedAt.value = data.updatedAt;
        // Map the data to frontend model
      } catch (error) {
        console.error('Error fetching user details', error);
      }
     }

     fetchUserData(userId)



</script>
  