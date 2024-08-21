import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AdminPage from '@/views/AdminPage.vue'
import GalleryPage from '@/views/GalleryPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/library',
      name: 'library',
      component: GalleryPage
    },
    {
      path: '/admin',
      name: 'admin',
      component: AdminPage
    },
  ]
})

export default router
