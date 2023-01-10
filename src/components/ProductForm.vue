<script>
import { reactive } from 'vue';
import { store } from '../store.js';

export default {
    data() {
        return {
            product: {
                id: this.$route.params.id
            }, 
            categories: store.state.categories 
        }
    },
    mounted() {
        if(this.product.id) {
            this.product = store.state.products.find(elem => elem.id === parseInt(this.product.id))
        }

    },
    methods: {
        addProduct() {
            if(this.product.name, this.product.uds, this.product.price) {
                if(this.product.id) {
                    store.editProduct({
                        id: parseInt(this.product.id),
                        name: this.product.name,
                        uds: this.product.uds,
                        price: this.product.price,
                        category_id: this.product.category_id
                    })
                    
                } else {
                    store.addProduct({
                        name: this.product.name,
                        uds: this.product.uds,
                        price: this.product.price,
                        category_id: this.product.category_id
                    })
                } 
                this.product = {}
                this.$router.push('/')              
            } 
                    
        }
    }
}


</script>

<template>
    <div class="row">
    <form id="new-prod" class="col-6" @submit.prevent="addProduct">
        <fieldset>
            <legend id="prod-form-tittle" class="bg-dark text-white text-center"> {{this.$route.params.id ? 'Editar' : 'Nuevo'}} producto</legend>
            <div class="form-group">
                <label for="newprod-id">ID:</label>
                <input type="text" class="form-control" id="newprod-id" v-model="product.id" disabled>
            </div>
            <div class="form-group">
                <label for="newprod-name">Nombre:</label>
                <input type="text" id="newprod-name" class="form-control" maxlength="50" minlength="5" v-model="product.name" required>
            </div>
            <div class="form-group">
                <label for="newprod-cat">Categoría:</label>
                <select type="text" id="newprod-cat" class="form-control" v-model="product.category_id" required>
                    <option v-for="elem in categories" :key="elem.id" :value="elem.id">{{ elem.name }}</option>
                </select>
            </div>
            <div class="form-group">
                <label for="newprod-units">Unidades.:</label>
                <input type="number" id="newprod-units" class="form-control" min="0" max="100" v-model="product.uds">
                <spam class="error"></spam>
            </div>
            <div class="form-group">
                <label for="newprod-price">Precio/u.:</label>
                <input type="text" inputmode="numeric" id="newprod-price" class="form-control" min="0" pattern="([0-9]{1,10}(\.[0-9]{1,2})?)" placeholder="Ej: 3.33" v-model="product.price" required>
                <spam class="error"></spam>
            </div>
            <br>
            <button type="submit" class="btn btn-default btn-dark">{{this.$route.params.id ? 'Editar' : 'Añadir'}}</button>
            <button type="reset" class="btn btn-danger">Reset</button>
        </fieldset>
    </form>
    </div>
</template>