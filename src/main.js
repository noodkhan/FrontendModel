import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import router from './router'
import 'primeicons/primeicons.css';
import PrimeVue from 'primevue/config';  // Import PrimeVue config
import Dialog from 'primevue/dialog';    // Import Dialog component

createApp(App)
.use(router)   // Use the router in the app
.use(PrimeVue)  // Use PrimeVue
.component('Dialog', Dialog)  // Register Dialog component globally
.mount('#app')
