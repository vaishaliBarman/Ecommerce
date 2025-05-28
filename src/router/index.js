import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Products from '../pages/Products.vue'
import Contact from '../pages/Contact.vue'

import OrderPage from '../pages/OrderPage.vue' // ✅ Import OrderPage

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/products', name: 'Products', component: Products },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/order/:id', name: 'OrderPage', component: OrderPage } // ✅ Add Order Page route
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      };
    }
    return { top: 0 };
  }
})

export default router
