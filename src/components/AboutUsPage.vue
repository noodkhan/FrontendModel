<template>
    <div class="aboutus-page">
  
      <!-- Hero Section -->
      <section class="hero text-white text-center py-5 mb-5">
        <div class="container">
          <h1 class="display-4 fw-bold">{{ companyName }}</h1>
          <p class="lead">{{ tagline }}</p>
        </div>
      </section>
  
      <!-- Mission -->
      <section class="mission py-5 mb-5">
        <div class="container">
          <h2 class="text-center mb-4">Our Mission</h2>
          <p class="text-center mx-auto" style="max-width:700px;">{{ mission }}</p>
        </div>
      </section>
  
      <!-- Values -->
      <section class="values bg-light py-5 mb-5">
        <div class="container">
          <h2 class="text-center mb-4">Our Values</h2>
          <div class="row g-4">
            <div class="col-md-4" v-for="value in values" :key="value.title">
              <div class="card h-100 border-0 text-center p-4 shadow-sm rounded-4">
                <div class="icon mb-3 mx-auto">
                  <i :class="value.icon"></i>
                </div>
                <h5 class="fw-bold">{{ value.title }}</h5>
                <p class="mb-0">{{ value.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Team -->
      <section class="team py-5 mb-5">
        <div class="container">
          <h2 class="text-center mb-4">Meet the Team</h2>
          <div class="row g-4">
            <div class="col-sm-6 col-md-4 col-lg-3" v-for="member in team" :key="member.name">
              <div class="card h-100 border-0 text-center shadow-sm rounded-4">
                <img
                  :src="member.photo"
                  alt="photo"
                  class="card-img-top rounded-circle mx-auto"
                  style="width:100px; height:100px; object-fit:cover; margin-top:-50px; border:3px solid #fff;"
                />
                <div class="card-body pt-4">
                  <h5 class="card-title mb-1">{{ member.name }}</h5>
                  <p class="text-muted mb-0">{{ member.role }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Contact Call-to-Action -->
      <section class="contact text-white text-center py-5">
        <div class="container">
          <h2 class="mb-4">Get in Touch</h2>
          <p class="mb-4">{{ contactText }}</p>
          <a :href="`mailto:${contactEmail}`" class="btn btn-light btn-lg">Contact Us</a>
        </div>
      </section>
  
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // Hero
  const companyName = 'Your Company';
  const tagline = 'Building the future, one line of code at a time.';
  
  // Mission
  const mission = 'Our mission is to deliver high-quality software solutions that empower businesses and delight users worldwide.';
  
  // Values
  const values = ref([
    {
      icon: 'pi pi-heart text-primary',
      title: 'Passion',
      description: 'We genuinely love what we do and it shows in our work.',
    },
    {
      icon: 'pi pi-check-circle text-success',
      title: 'Quality',
      description: 'We adhere to the highest standards in everything we create.',
    },
    {
      icon: 'pi pi-globe text-info',
      title: 'Innovation',
      description: 'We embrace new ideas and technologies to stay ahead.',
    },
  ]);
  
  // Team
  const team = ref([
    { name: 'Alice Johnson', role: 'CEO & Founder', photo: 'https://i.pravatar.cc/150?img=1' },
    { name: 'Bob Smith',      role: 'CTO',           photo: 'https://i.pravatar.cc/150?img=2' },
    { name: 'Carol Lee',      role: 'Lead Designer', photo: 'https://i.pravatar.cc/150?img=3' },
    { name: 'David Kim',      role: 'Senior Dev',    photo: 'https://i.pravatar.cc/150?img=4' },
  ]);
  
  // Contact
  const contactText = 'Have questions or want to work with us? Reach out and let’s talk!';
  const contactEmail = 'contact@yourcompany.com';
  </script>
  
  <style scoped>
  .hero {
    background: linear-gradient(135deg, #4e73df 0%, #224abe 100%);
  }
  .values .icon {
    font-size: 2.5rem;
    background-color: #e9ecef;
    width: 3.5rem;
    height: 3.5rem;
    line-height: 3.5rem;
    border-radius: 50%;
  }
  .values .card {
    transition: transform 0.2s, box-shadow 0.2s;
  }
  .values .card:hover {
    transform: translateY(-5px);
    box-shadow: 0 0.75rem 1.5rem rgba(0, 0, 0, 0.15);
  }
  .contact {
    background: linear-gradient(135deg, #1cc88a 0%, #17a673 100%);
  }
  </style>
  