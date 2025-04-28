<template>
    <div class="container mt-5">
      <h1 class="text-center mb-4">Account Settings</h1>
  
      <!-- Profile Section -->
      <div class="card mb-4">
        <div class="card-header">
          <h5 class="card-title">Profile Settings</h5>
        </div>
        <div class="card-body">
          <!-- Name Field -->
          <div class="mb-3">
            <label for="name" class="form-label">Full Name</label>
            <input v-model="name" type="text" class="form-control" id="name" placeholder="Enter your full name" required />
          </div>
  
          <!-- Username Field -->
          <div class="mb-3">
            <label for="username" class="form-label">Username</label>
            <input v-model="username" type="text" class="form-control" id="username" placeholder="Choose a username" required />
          </div>
  
          <!-- Email Field -->
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input v-model="email" type="email" class="form-control" id="email" placeholder="Enter your email" required />
          </div>
  
          <!-- Bio Field -->
          <div class="mb-3">
            <label for="bio" class="form-label">Bio</label>
            <textarea v-model="bio" class="form-control" id="bio" rows="3" placeholder="Tell us about yourself"></textarea>
          </div>
        </div>
      </div>
  
      <!-- Preferences Section -->
      <div class="card mb-4">
        <div class="card-header">
          <h5 class="card-title">Preferences</h5>
        </div>
        <div class="card-body">
          <!-- Language Selection -->
          <div class="mb-3">
            <label for="language" class="form-label">Language</label>
            <select v-model="preferences.language" class="form-select" id="language" required>
              <option value="en">English</option>
              <option value="th">Thai</option>
              <option value="es">Spanish</option>
            </select>
          </div>
  
          <!-- Theme Selection -->
          <div class="mb-3">
            <label for="theme" class="form-label">Theme</label>
            <select v-model="preferences.theme" class="form-select" id="theme" required>
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </div>
        </div>
      </div>
  
      <!-- Account Section -->
      <div class="card mb-4">
        <div class="card-header">
          <h5 class="card-title">Account Settings</h5>
        </div>
        <div class="card-body">
          <!-- Change Password -->
          <div class="mb-3">
            <label for="password" class="form-label">Change Password</label>
            <input v-model="newPassword" type="password" class="form-control" id="password" placeholder="Enter new password" />
          </div>
  
          <!-- Confirm Password -->
          <div class="mb-3">
            <label for="confirmPassword" class="form-label">Confirm New Password</label>
            <input v-model="confirmPassword" type="password" class="form-control" id="confirmPassword" placeholder="Confirm new password" />
          </div>
  
          <!-- Save Button -->
          <button @click="saveSettings" class="btn btn-primary">Save Settings</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: "Somchai Prasert",
        username: "somchai123",
        email: "somchai@example.com",
        bio: "I love programming and learning new things.",
        preferences: {
          language: "th",
          theme: "dark",
        },
        newPassword: "",
        confirmPassword: "",
      };
    },
    methods: {
      saveSettings() {
        // Handle settings save logic here
        if (this.newPassword && this.newPassword !== this.confirmPassword) {
          alert("Passwords do not match!");
          return;
        }
        
        const settingsData = {
          name: this.name,
          username: this.username,
          email: this.email,
          bio: this.bio,
          preferences: this.preferences,
          newPassword: this.newPassword,
        };
  
        console.log("Settings saved", settingsData);
        alert("Settings updated successfully!");
      },
    },
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 800px;
  }
  
  .card {
    margin-bottom: 20px;
  }
  
  .card-header {
    background-color: #f8f9fa;
  }
  
  .card-title {
    font-size: 1.25rem;
  }
  
  button {
    width: 100%;
  }
  </style>
  