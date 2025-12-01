import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import ProjectsPage from '../pages/ProjectsPage.vue'
import ProjectDetailsPage from '../pages/ProjectDetailsPage.vue'

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/projects', name: 'Projects', component: ProjectsPage },
  { path: '/projects/:id', name: 'ProjectDetails', component: ProjectDetailsPage, props: true },
  // { path: '/:pathMatch(.*)*', redirect: '/' } // optionnel
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
