import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    component: () => import('../layouts/main/Main.vue'),
    children: [
      {
        path: '/',
        redirect: '/dashboard/ecommerce'
      },
      {
        path: '/dashboard/ecommerce',
        name: 'Home',
        component: () => import('../views/dashboard/eCommerce.vue'),
        meta: {
          rule: 'admin'
        }
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
  routes
})

export default router
