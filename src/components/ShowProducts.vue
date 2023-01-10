<script>
    import { store } from '../store.js';
    import ShowProduct from './ShowProduct.vue';
    export default {
        components: {
            ShowProduct,
        },
        data(){
            return {
                products: store.state.products
            }
        },
        computed: {
            totalImport() {
                return parseFloat(this.products.reduce((total, product) => total + product.uds * product.price, 0)).toFixed(2)
            },
            totalProducts() {
                return this.products.length
            }
        }   
    }
</script>

<template>
    <div class="row">
        <div class="col-sm-12 col-md-12 col-lg-12">
            <table class="table table-striped table-hover table-responsive">
                <thead class="bg-dark">
                    <tr class="text-white text-center">
                        <th scope="col">Id</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Categoría</th>
                        <th scope="col">Uds.</th>
                        <th scope="col">Precio/u</th>
                        <th scope="col">Importe</th>     
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <show-product v-for="elem in products" :key="elem.id" v-bind:product="elem"></show-product>     
                </tbody>
                <tfoot>
                    <th class="text-center">Productos:</th>
                    <th class="text-center">{{totalProducts}}</th>
                    <th></th>
                    <th></th>
                    <th class="text-center">Importe total del almacén:</th>
                    <th class="text-center">{{totalImport}}€</th>
                    
                </tfoot>
            </table>
        </div>
    </div>

</template>