<script>
import { store } from '../store.js';

export default {
    props: {
        product: Object,
    },
    data(){
        return {
           category: store.state.categories.find(elem => elem.id === this.product.category_id)
        }
    },
    methods: {
        totalPrice() {
            return this.product.price * this.product.uds
        },
        increaseProduct() {
            store.increaseProduct(this.product.id)
        },
        decreaseProduct() {
            store.decreaseProduct(this.product.id)
        },
        deleteProduct() {
            store.deleteProduct(this.product.id)
        },
    }
}
</script>
<template>
    <tr class="text-center">
        <th scope="row">{{product.id}}</th>
        <td>{{product.name}}</td>
        <td>{{this.category.name}}</td>
        <td>{{product.uds}}</td>
        <td>{{product.price}}€</td>
        <td>{{totalPrice()}}€</td>
        <td>
            <button class="btn btn-secondary m-2" @click="increaseProduct()" ><i class="bi bi-arrow-up-circle"></i></button>
            <button class="btn btn-secondary" @click="decreaseProduct()" :disabled="product.uds <= 0"><i class="bi bi-arrow-down-circle"></i></button>
            <button class="btn btn-secondary m-2" @click="deleteProduct()"><i class="bi bi-trash-fill"></i></button>
            <router-link class="btn btn-warning m-1" :to="{ name: 'editProduct', params:{id: product.id}}"><i class="bi bi-pencil"></i></router-link>        </td>
    </tr>
    
</template>