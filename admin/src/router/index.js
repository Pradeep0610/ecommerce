import Vue from 'vue'
import VueRouter from 'vue-router'
import Products from '../views/Products.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/products',
    name: 'Products',
    component: Products,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/products/:id',
    name: 'Product',
    component: () => import('../views/Product/Info.vue')
  },
  {
    path: '/products/product-edit/:id',
    name: 'Product-Edit',
    component: () => import('../views/Product/Edit.vue')
  },
  {
    path: '/shop',
    name: 'Shop',
    component: () => import('../views/eCommerce/Shop.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
