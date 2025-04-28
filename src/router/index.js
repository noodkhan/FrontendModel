import { createRouter, createWebHistory } from 'vue-router';

// Import your components (views) here
import HomePage from '../components/HomePage.vue';
import LoginPage from '../components/LoginPage.vue';
import RegisterPage from '../components/RegisterPage.vue';
import UserProfile from '../components/UserProfile.vue';
import SettingPage from '@/components/SettingPage.vue';
import HelloWorld from '@/components/HelloWorld.vue';
import DashboardPage from '@/components/DashboardPage.vue';
import AboutUsPage from '@/components/AboutUsPage.vue';
import NotFound from '@/components/NotFound.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/login',
    name: 'login',
    component: LoginPage,
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterPage,
  },
  {
    path: '/profile/:id',
    name: 'user-profile',
    component: UserProfile,
    props: true,  // To pass the route params as props
  },

  {
    path : '/settings',
    name : 'settings' , 
    component : SettingPage
  } , 

  {
    path : '/Helloworld',
    name : 'Helloworld' , 
    component : HelloWorld 
  } , 

  {
    path : '/dashboard',
    name : 'Dashboard' , 
    component : DashboardPage 
  } , 

  {
    path : '/about',
    name : 'AboutUs' , 
    component : AboutUsPage 
  },

 // catch-all 404 must be last
 { 
  path: '/:pathMatch(.*)*', 
  name: 'NotFound', 
  component: NotFound 
}


];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
