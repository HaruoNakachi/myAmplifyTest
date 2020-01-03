import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Todos from '../views/Todos.vue'
import Customer from '../views/Customer.vue'
import EditCustomer from '../views/EditCustomer.vue'
import CreateCustomer from '../views/CreateCustomer.vue'
import Customers from '../views/Customers.vue'
import Vuejs from '../views/Vuejs.vue'
import Vuetify from '../views/Vuetify.vue'
import CreateBillingItem from '../views/CreateBillingItem.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/todos',
    name: 'todos',
    component: Todos
  },
  {
    path: '/customer/:id',
    component: Customer
  },
  {
    path: '/edit_customer/:id',
    component: EditCustomer
  },
  {
    path: '/create_customer',
    name: 'createCustomer',
    component: CreateCustomer
  },
  {
    path: '/customers/:customerId/create_billing_item',
    name: 'createBillingItem',
    component: CreateBillingItem
  },
  {
    path: '/customers',
    name: 'customers',
    component: Customers
  },
  {
    path: '/vuejs',
    name: 'vuejs',
    component: Vuejs
  },
  {
    path: '/vuetify',
    name: 'vuetify',
    component: Vuetify
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
