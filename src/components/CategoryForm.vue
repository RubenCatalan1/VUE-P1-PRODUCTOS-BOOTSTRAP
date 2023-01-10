<script>
import { reactive } from 'vue';
import { store } from '../store.js';

export default {
    data() {
        return { 
            category: {
                name: "",
                description: ""
            }
        }
    },
    mounted() {
        if(this.product.id) {
            this.product = store.state.products.find(elem => elem.id === parseInt(this.product.id))
        }

    },
    methods: {
        addCategory() {
            if(this.category.name) {
                store.addCategory({
                        name: this.category.name,
                        description: this.category.description,
                    })
                } 
                this.category = {}
                this.$router.push('/categories')              
        }                
    }
}


</script>

<template>
    <div class="row">
    <form id="new-cat" class="col-6" @submit.prevent="addCategory">
        <fieldset>
            <legend id="cat-form-tittle" class="bg-dark text-white text-center"> {{this.$route.params.id ? 'Editar' : 'Nuevo'}} producto</legend>
            <div class="form-group">
                <label for="newcat-id">ID:</label>
                <input type="text" class="form-control" id="newcat-id" v-model="category.id" disabled>
            </div>
            <div class="form-group">
                <label for="newcat-name">Nombre:</label>
                <input type="text" id="newcat-name" class="form-control" maxlength="50" minlength="5" v-model="category.name" required>
            </div>
            <div class="form-group">
                <label for="newcat-description">Descripción:</label>
                <input type="text" id="newcat-description" class="form-control" minlength="0" maxlength="300" v-model="category.description">
                <spam class="error"></spam>
            </div>
            <br>
            <button type="submit" class="btn btn-default btn-dark">Añadir</button>
            <button type="reset" class="btn btn-danger">Reset</button>
        </fieldset>
    </form>
    </div>
</template>