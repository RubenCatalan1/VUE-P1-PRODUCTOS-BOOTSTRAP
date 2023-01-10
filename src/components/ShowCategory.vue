<script>
import { store } from '../store.js';

export default {
    props: {
        category: Object,
    },
    methods: {
        deleteCategory() {
            store.deleteCategory(this.category.id)
        },
    }
}
</script>
<template>
    <tr class="text-center">
        <th scope="row">{{category.id}}</th>
        <td>{{category.name}}</td>
        <td>{{category.description}}</td>
        <td>
            <button class="btn btn-secondary m-2" @click="deleteCategory()"><i class="bi bi-trash-fill"></i></button>
            <!--
            <router-link class="btn btn-warning m-1" :to="{ name: 'editCategory', params:{id: category.id}}"><i class="bi bi-pencil"></i></router-link>        
            -->
        
        </td>
    </tr>
    
</template>