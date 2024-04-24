import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/views/Base.vue'),
    name: 'base',
    children: [
      {
        path: '',
        component: () => import('@/components/Home.vue'),
        name: 'home',
      },

      {
        path: '/:pathMatch(.*)*',
        component: () => import('@/components/PageNotFound.vue'),
        name: 'pageNotFound',
      }

      // {
      //   path: 'login',
      //   component: () => import('@/views/Login.vue'),
      //   name: 'login',
      // }
    ]
  }
]


const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router