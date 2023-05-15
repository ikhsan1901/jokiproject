import {createRouter, createWebHistory} from 'vue-router';
import Home from '../components/Home.vue';
import About from '../components/about.vue';
import Contact from '../components/contact.vue';
import pesan from '../components/pesan.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/pesan',
    name: 'pesan',
    component: pesan
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;
