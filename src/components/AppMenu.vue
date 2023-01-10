<script>
export default {
    
}
</script>

<template>
    <div class="row">
    <nav class="navbar navbar-dark bg-dark">
        <div class="col-2 display-6 text-white">Almacén ACME</div>
        <router-link class="col-2 display-9 text-white" to='/'>Productos</router-link>
        <router-link class="col-2 display-9 text-white" to='/categories'>Categorías</router-link>
        <router-link class="col-2 display-9 text-white" to="/productForm">Añadir Producto</router-link>
        <router-link class="col-2 display-9 text-white" to="/categoryForm">Añadir Categoría</router-link>
        <router-link class="col-2 display-9 text-white" to="/about">About</router-link>
    </nav>
    </div>
</template>