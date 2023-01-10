<script>
  import AppTitle from './components/AppTitle.vue';
  import AppError from './components/AppError.vue';
  import ShowProducts from './components/ShowProducts.vue';
  import ProductForm from './components/ProductForm.vue';
  import AppMenu from './components/AppMenu.vue'
  import {store} from './store';
  export default {
    components: {
      AppTitle,
      AppError,
      ShowProducts,
      ProductForm,
      AppMenu
    },
    mounted() {
        store.loadData()     
    }
  }

</script>

<template>
  <app-menu></app-menu>
  <app-title title="Almacén central de productos - ACME SL"></app-title>
  <app-error></app-error>
  <router-view :key="$route.fullPath"></router-view>
  <!-- 
    <div class="container">
    <app-menu></app-menu>
    <app-title title="Almacén central de productos - ACME SL"></app-title>
    <app-error></app-error>
    <show-products></show-products>
    <product-form></product-form>
  </div>
-->
 
</template>

<style>

</style>
