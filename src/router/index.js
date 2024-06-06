import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: null
    },
    {
      path: '/monster/:id',
      name: 'monster',

      component: () => import('../views/MonsterView.vue'),
      props:true
    }
  ]
})

export default router
