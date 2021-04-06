import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: () => import('../views/Inicio.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/signin',
    name: 'Signin',
    component: () => import('../views/Signin.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/perfil',
    name: 'Perfil',
    component: () => import('../views/Perfil.vue')
  },
  {
    path: '/cartera',
    name: 'Cartera',
    component: () => import('../views/Cartera.vue')
  },
  {
    path: '/pagos',
    name: 'Pagos',
    component: () => import('../views/Pagos.vue')
  },
  {
    path: '/renovacion',
    name: 'Renovacion',
    component: () => import('../views/Renovacion.vue')
  },
  {
    path: '/cliente_renovacion',
    name: 'ClienteRenovacion',
    component: () => import('../views/ClienteRenovacion.vue')
  },
  {
    path: '/poliza_renovacion',
    name: 'PolizaRenovacion',
    component: () => import('../views/PolizaRenovacion.vue')
  },
  {
    path: '/facturacion',
    name: 'Facturacion',
    component: () => import('../views/Facturacion.vue')
  },
  {
    path: '/cliente_facturacion',
    name: 'ClienteFacturacion',
    component: () => import('../views/ClienteFacturacion.vue')
  },
  {
    path: '/poliza_facturacion',
    name: 'PolizaFacturacion',
    component: () => import('../views/PolizaFacturacion.vue')
  },
  {
    path: '/clientes',
    name: 'Clientes',
    component: () => import('../views/Clientes.vue')
  },
  {
    path: '/clientes_detalles',
    name: 'ClientesDetalles',
    component: () => import('../views/ClientesDetalles.vue')
  },
  {
    path: '/solicitudes',
    name: 'Solicitudes',
    component: () => import('../views/Solicitudes.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
