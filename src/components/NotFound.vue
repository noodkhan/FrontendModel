<template>
    <div class="not-found-page d-flex flex-column align-items-center justify-content-center text-center">
      <i class="pi pi-exclamation-triangle text-warning display-1 mb-3 animated-bounce"></i>
      <h1 class="display-1 fw-bold mb-3 animated-fade-in">404</h1>
      <p class="lead mb-4">Oops! The page you’re looking for doesn’t exist.</p>
      <router-link to="/" class="btn btn-primary btn-lg">Go to Homepage</router-link>
    </div>
  </template>
  
  <script setup>
  // No script logic needed here—but you could import a logo or
  // track analytics when this page is shown.
  </script>
  
  <style scoped>
  .not-found-page {
    height: 100vh;
    padding: 0 1rem;
    background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
    animation: fadeIn 0.5s ease-in;
  }
  
  /* Bounce animation for the warning icon */
  .animated-bounce {
    animation: bounce 2s infinite;
  }
  
  /* Fade-in for the “404” text */
  .animated-fade-in {
    animation: fadeIn 1s ease-out both;
  }
  
  /* Keyframes */
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
    40% { transform: translateY(-20px); }
    60% { transform: translateY(-10px); }
  }
  @keyframes fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
  </style>
  