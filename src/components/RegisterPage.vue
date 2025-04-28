<template>
  <div class="container mt-5">
    <h1 class="text-center mb-4">Register</h1>

    <div class="card shadow-sm p-4">
      <div class="card-body">
        <form @submit.prevent="registerUser">
          <!-- Name Field -->
          <div class="mb-3">
            <label for="name" class="form-label">Full Name</label>
            <input 
              v-model="name" 
              type="text" 
              id="name" 
              class="form-control" 
              placeholder="Enter your full name" 
              required
            />
          </div>

          <!-- Username Field -->
          <div class="mb-3">
            <label for="username" class="form-label">Username</label>
            <input 
              v-model="username" 
              type="text" 
              id="username" 
              class="form-control" 
              placeholder="Choose a username" 
              required
            />
          </div>

          <!-- Email Field -->
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input 
              v-model="email" 
              type="email" 
              id="email" 
              class="form-control" 
              placeholder="Enter your email" 
              required
              :class="{'is-invalid': !emailValid && email.length > 0}" 
            />
            <div v-if="!emailValid && email.length > 0" class="invalid-feedback">
              Please enter a valid email address.
            </div>
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

          <!-- Bio Field -->
          <div class="mb-3">
            <label for="bio" class="form-label">Bio</label>
            <textarea 
              v-model="bio" 
              id="bio" 
              class="form-control" 
              rows="3" 
              placeholder="Tell us a little about yourself"
            ></textarea>
          </div>

          <!-- Address Fields -->
          <div class="mb-3">
            <label for="street" class="form-label">Street</label>
            <input 
              v-model="address.street" 
              type="text" 
              id="street" 
              class="form-control" 
              placeholder="Enter street address"
            />
          </div>

          <div class="mb-3">
            <label for="city" class="form-label">City</label>
            <input 
              v-model="address.city" 
              type="text" 
              id="city" 
              class="form-control" 
              placeholder="Enter city"
            />
          </div>

          <div class="mb-3">
            <label for="state" class="form-label">State</label>
            <input 
              v-model="address.state" 
              type="text" 
              id="state" 
              class="form-control" 
              placeholder="Enter state"
            />
          </div>

          <div class="mb-3">
            <label for="country" class="form-label">Country</label>
            <input 
              v-model="address.country" 
              type="text" 
              id="country" 
              class="form-control" 
              placeholder="Enter country"
            />
          </div>

          <!-- Phone Number Field -->
          <div class="mb-3">
            <label for="phoneNumber" class="form-label">Phone Number</label>
            <input 
              v-model="phoneNumber" 
              type="tel" 
              id="phoneNumber" 
              class="form-control" 
              placeholder="Enter your phone number"
            />
          </div>

          <!-- Preferences -->
          <div class="mb-3">
            <label for="language" class="form-label">Language</label>
            <select v-model="preferences.language" id="language" class="form-select">
              <option value="th">Thai</option>
              <option value="en">English</option>
            </select>
          </div>

          <div class="mb-3">
            <label for="theme" class="form-label">Theme</label>
            <select v-model="preferences.theme" id="theme" class="form-select">
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </div>

          <!-- Subscription -->
          <div class="mb-3">
            <label for="subscription" class="form-label">Subscription</label>
            <select v-model="subscription" id="subscription" class="form-select">
              <option value="free">Free</option>
              <option value="premium">Premium</option>
            </select>
          </div>

          <!-- Submit Button -->
          <div class="d-grid gap-2">
            <button type="submit" class="btn btn-primary btn-block">Register</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        name: '',
        username: '',
        email: '',
        password: '',
        bio: '',
        address: {
          street: '',
          city: '',
          state: '',
          country: ''
        },
        phoneNumber: '',
        preferences: {
          language: 'th',
          theme: 'dark'
        },
        subscription: 'free'
      };
    },
    methods: {
      async registerUser() {
  const userData = {
    name: this.name,
    username: this.username,
    email: this.email,
    password: this.password,
    role: 'user',
    bio: this.bio,
    address: this.address,
    phoneNumber: this.phoneNumber,
    preferences: this.preferences,
    subscription: this.subscription,
    location: 'Bangkok',
  };

  try {
    const response = await axios.post(`${process.env.VUE_APP_API_BASE_URL}/users/register`, userData);
    console.log('Registration successful', response.data);
    const token = response.data.user._id; // get token anywhere i don't care

    // Store token in localStorage (for example)
    localStorage.setItem('token', token);

    // Redirect to the user profile page with the user ID
    this.$router.push({ name: 'user-profile', params: { id: response.data.user._id } })
  } catch (error) {
    console.error('Registration failed', error);
  }
}
    },
  };
  </script>
  