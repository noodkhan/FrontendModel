<template>
  <div id="app" class="d-flex flex-column min-vh-100">

    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
      <div class="container">
        
         <!-- Navbar toggle button for mobile -->
         <button class="navbar-toggler" type="button" @click="showDialog" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="pi pi-bars"></span> <!-- Hamburger icon -->
        </button>

        <!-- Brand -->
        <router-link class="navbar-brand fw-bold" to="/">MyWebsite</router-link>
       
            <!-- Notifications -->
            <li class="nav-item position-relative me-3">
              <button class="btn btn-outline-primary position-relative" type="button" @click="openNoticationDialog" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <i class="pi pi-bell"></i> <!-- Bootstrap Bell Icon -->
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {{ notificationCount }}
                </span>
              </button>
            </li>



        <!-- Navbar Mobile dialog -->
        <Dialog v-model:visible="navbarDialogVisible" :closable="false" class="custom-dialog">
          <button type="button" class="btn-close btn-close-white float-end" aria-label="Close" @click="navbarDialogVisible = false"></button>
          <div class="bg-dark p-4 rounded">
          <div class="d-grid gap-2 mb-3">
            <router-link @click="closeDialog()" class="btn btn-outline-secondary" :to="'/'">
              <i class="pi pi-home me-2"></i> Home
            </router-link>
            <router-link v-if="!isLoggedIn" @click="closeDialog()" class="btn btn-outline-secondary" to="/login">
              <i class="pi pi-sign-in me-2"></i> Login
            </router-link>
            <router-link v-if="!isLoggedIn" @click="closeDialog()" class="btn btn-outline-success" to="/register">
              <i class="pi pi-user-plus me-2"></i> Register
            </router-link>
            <router-link v-if="isLoggedIn" @click="closeDialog()" class="btn btn-outline-warning" :to="'/profile/' + token">
              <i class="pi pi-user me-2"></i> Profile
            </router-link>
            <router-link v-if="isLoggedIn" @click="closeDialog()" class="btn btn-outline-info" to="/settings">
              <i class="pi pi-cog me-2"></i> Settings
            </router-link>
            <!-- Log off -->
            <button @click="logout(); closeDialog()" class="btn btn-outline-success ">Logout</button>

          </div>

          <div class="mt-3">
            <h6 class="text-white mb-2">Connect</h6>
            <div class="d-flex justify-content-around">
              <a href="#" class="btn btn-outline-light rounded-circle" title="Facebook">
                <i class="pi pi-facebook"></i>
              </a>
              <a href="#" class="btn btn-outline-light rounded-circle" title="Twitter">
                <i class="pi pi-twitter"></i>
              </a>
              <a href="#" class="btn btn-outline-light rounded-circle" title="Instagram">
                <i class="pi pi-instagram"></i>
              </a>
              <a href="#" class="btn btn-outline-light rounded-circle" title="LinkedIn">
                <i class="pi pi-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </Dialog>

      <!-- Notifaction dialog -->
      <Dialog v-model:visible="notifactionDialogVisible" :closable="false" class="custom-dialog">
        <div class="p-4 bg-white rounded shadow-sm position-relative">
          <!-- Close Button -->
          <button
            type="button"
            class="btn-close position-absolute top-0 end-0 m-3"
            aria-label="Close"
            @click="notifactionDialogVisible= false"
          ></button>

          <!-- Dialog Title -->
          <h5 class="mb-4">Notifications</h5>

          <!-- Notification Items -->
          <div class="list-group">
            <div class="list-group-item d-flex justify-content-between align-items-center">
              <div>
                <i class="pi pi-bell text-warning me-2"></i>
                New order placed
              </div>
              <small class="text-muted">2 min ago</small>
            </div>
            <div class="list-group-item d-flex justify-content-between align-items-center">
              <div>
                <i class="pi pi-bell text-info me-2"></i>
                Payment received
              </div>
              <small class="text-muted">15 min ago</small>
            </div>
            <div class="list-group-item d-flex justify-content-between align-items-center">
              <div>
                <i class="pi pi-bell text-success me-2"></i>
                New user registered
              </div>
              <small class="text-muted">1 hour ago</small>
            </div>
          </div>

          <!-- View All Button -->
          <div class="text-center mt-4">
            <button class="btn btn-link text-decoration-none" @click="goToNotifications">
              View All Notifications
            </button>
          </div>
        </div>
      </Dialog>


        <!-- Navbar items -->
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">


            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item" v-if="!isLoggedIn">
              <router-link class="nav-link" to="/login">Login</router-link>
            </li>
            <li class="nav-item" v-if="!isLoggedIn">
              <router-link class="nav-link" to="/register">Register</router-link>
            </li>

            <li class="nav-item" v-if="isLoggedIn">
              <router-link class="nav-link" :to="'/profile/' + this.token ">Profile</router-link>
            </li>

            <li class="nav-item" v-if="isLoggedIn">
              <router-link class="nav-link" :to="'/helloworld'">Starting</router-link>
            </li>

            <li class="nav-item" v-if="isLoggedIn">
              <router-link class="nav-link" :to="'/dashboard'">Dashboard</router-link>
            </li>

            <!-- Logout / log off -->
            <li class="nav-item">
              <button @click="logout(); closeDialog()" class="btn btn-outline-warning">Logout</button>
            </li>

          </ul>
        </div>

      </div>
    </nav>

    <!-- Main Content -->
    <main class="container my-5 flex-grow-1">
      <router-view /> 
      <!-- Warning message if not logged in -->
      <div v-if="!isLoggedIn" class="alert alert-warning mt-5 text-center">
        ⚠️ Please login to access more features.
      </div>
    </main>

    <!-- Footer Section -->
    <footer class="footer bg-dark text-white py-4 mt-5">
      <div class="container text-center">

        <!-- About Us Section -->
        <p-card class="mb-3" :header="'About Us'" style="background-color: #333; border-radius: 5px; padding: 15px;">
          <template #content>
            <p class="mb-0">We are committed to delivering top-quality services and creating lasting value for our customers.</p>
          </template>
        </p-card>

        <!-- Navigation Section -->
        <div class="mb-3">
          <a href="/" class="text-white me-3">Home</a>
          <a href="/products" class="text-white me-3">Products</a>
          <a href="/services" class="text-white me-3">Services</a>
          <a href="/about" class="text-white me-3">About Us</a>
          <a href="/contact" class="text-white me-3">Contact</a>
        </div>

        <!-- Social Media Section -->
        <div class="mb-3">
          <a href="#" class="text-white me-3" target="_blank" title="Facebook">
            <i class="pi pi-facebook"></i>
          </a>
          <a href="#" class="text-white me-3" target="_blank" title="Twitter">
            <i class="pi pi-twitter"></i>
          </a>
          <a href="#" class="text-white me-3" target="_blank" title="Instagram">
            <i class="pi pi-instagram"></i>
          </a>
          <a href="#" class="text-white me-3" target="_blank" title="LinkedIn">
            <i class="pi pi-linkedin"></i>
          </a>
        </div>

        <!-- Copyright Section -->
        <p class="mb-0">&copy; 2025 Your Website. All rights reserved.</p>
      </div>
    </footer>
 
  </div>
</template>

<script>
import Dialog from 'primevue/dialog'; // Correct import
import Swal from 'sweetalert2';
import router from './router'


export default {
  name: 'App',
  components: {
    Dialog,
  },

  setup(){
  },  
  computed: {
    isLoggedIn() {
      if(localStorage.getItem('token')){
        this.isLogin = true ; 
      } 
      return localStorage.getItem('token');  // Check if user info is saved
    },

  }, 
   data(){
    return {
      navbarDialogVisible : false,
      isLogin : false,
      token : localStorage.getItem('token'),
      menuItems: [
        { label: 'Home', icon: 'pi pi-home', url: '/' },
        { label: 'Products', icon: 'pi pi-cog', url: '/products' },
        { label: 'Services', icon: 'pi pi-briefcase', url: '/services' },
        { label: 'About Us', icon: 'pi pi-info-circle', url: '/about' },
        { label: 'Contact', icon: 'pi pi-phone', url: '/contact' }
      ],
    }
  },
  methods : {

    showDialog(){
      this.navbarDialogVisible = true;  // Set dialogVisible to true 
    }, 

    closeDialog(){
      this.navbarDialogVisible = false ; 
    }

  }
}
</script>

<script setup>
  import { ref } from 'vue';
  const notifactionDialogVisible = ref(false)


  const logout = () => {
    // Show SweetAlert before logging out
    Swal.fire({
      title: 'Are you sure?',
      text: "You will be logged out.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, log me out!',
    }).then((result) => {
      if (result.isConfirmed) {

        // Remove user from localStorage
        localStorage.removeItem('token'); 

        // Optionally, show a confirmation message
        Swal.fire('Logged out!', 'You have been logged out successfully.', 'success');

        // Redirect to the home page after logout
        router.push({name : 'home'}).then(() => {
          // After navigation is complete, reload the page
          window.location.reload();
        })


      }
    });
    
  };

  const openNoticationDialog = () => {
    notifactionDialogVisible.value = true ; 
  } ; 

  // const closeNoticationDialog = () => {
  //   notifactionDialogVisible.value = false; 
  // } ; 


</script>

<style scoped>
/* Navbar Styles */
.navbar {
  background-color: #343a40; /* Dark background for navbar */
  border-bottom: 1px solid #ddd; /* Subtle border at the bottom */
}

.navbar-toggler-icon {
  background-color: #fff; /* Light icon color for the hamburger */
}

/* Links and buttons */
.navbar-nav .nav-link {
  color: #fff !important;
  font-weight: 600;
  transition: color 0.3s;
}

.navbar-nav .nav-link:hover {
  color: #1d72b8 !important; /* Hover color */
}

.btn-outline-warning {
  color: #f39c12;
  border-color: #f39c12;
}

.btn-outline-warning:hover {
  background-color: #f39c12;
  color: #fff;
}

/* Footer Styles */
.footer {
  background-color: #222; /* Darker footer background */
  padding: 30px 0;
  margin-top: 5rem;
}

.footer a {
  color: #bdc3c7;
  text-decoration: none;
  transition: color 0.3s;
}

.footer a:hover {
  color: #fff;
}

.social-icons a {
  font-size: 1.8rem;
  margin: 0 10px;
}

.social-icons a:hover {
  transform: scale(1.1);
  color: #3498db;
}

/* Responsive Adjustments for Navbar */
@media (max-width: 768px) {
  .navbar-nav {
    text-align: center;
  }

  .navbar-nav .nav-link {
    margin-bottom: 10px;
  }

  .footer {
    text-align: center;
  }

  .footer a {
    margin-bottom: 10px;
  }

}
</style>