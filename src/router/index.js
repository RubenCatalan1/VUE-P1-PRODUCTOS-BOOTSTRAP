import { createRouter, createWebHistory } from 'vue-router'
import ShowProducts from '../components/ShowProducts.vue'
import ProductForm from '../components/ProductForm.vue'
import AppAbout from '../components/AppAbout.vue'
import ShowCategories from '../components/ShowCategories.vue'
import CategoryForm from '../components/CategoryForm.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: ShowProducts
  },
  {
    path: '/about',
    name: 'About',
    component: AppAbout
  },
  {
    path: '/productForm',
    name: 'Product-Form',
    component: ProductForm
  },
  {
    path: '/editProduct/:id',
    name: 'editProduct',
    component: ProductForm
  },
  {
    path: '/categories',
    name: 'categories',
    component: ShowCategories
  },
  {
    path: '/categoryForm',
    name: 'Category-Form',
    component: CategoryForm
  }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
  })

export default router