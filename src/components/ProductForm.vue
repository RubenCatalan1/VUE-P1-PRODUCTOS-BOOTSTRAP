<script>
import { reactive } from 'vue';
import { store } from '../store.js';

export default {
    data() {
        return {
            elem: store.state.productToEdit,
            id: "",
            name: "",
            uds: "",
            price: ""   
        }
    },
    methods: {
        addProduct() {
            if(this.name, this.uds, this.price) {
                if(this.id) {
                    store.editProduct({
                    id: this.id,
                    name: this.name,
                    uds: this.uds,
                    price: this.price
                    })
                    
                } else {
                    store.addProduct({
                    name: this.name,
                    uds: this.uds,
                    price: this.price
                    })
                    this.name = ""
                    this.uds = ""
                    this.price = ""
                }              
            }           
        }
    }
}


</script>

<template>
    <div class="row">
    <form id="new-prod" class="col-6" @submit.prevent="addProduct">
        <fieldset>
            <legend id="prod-form-tittle" class="bg-dark text-white text-center">Añadir producto</legend>
            <div class="form-group">
                <label for="newprod-id">ID:</label>
                <input type="text" class="form-control" id="newprod-id" v-model="id" disabled>
            </div>
            <div class="form-group">
                <label for="newprod-name">Nombre:</label>
                <input type="text" id="newprod-name" class="form-control" maxlength="50" minlength="5" v-model="name" required>
            </div>
            <div class="form-group">
                <label for="newprod-units">Unidades.:</label>
                <input type="number" id="newprod-units" class="form-control" min="0" max="100" v-model="uds">
                <spam class="error"></spam>
            </div>
            <div class="form-group">
                <label for="newprod-price">Precio/u.:</label>
                <input type="text" inputmode="numeric" id="newprod-price" class="form-control" min="0" pattern="([0-9]{1,10}(\.[0-9]{1,2})?)" placeholder="Ej: 3.33" v-model="price" required>
                <spam class="error"></spam>
            </div>
            <br>
            <button type="submit" class="btn btn-default btn-dark">Añadir</button>
            <button type="reset" class="btn btn-danger">Reset</button>
        </fieldset>
    </form>
    </div>
</template>