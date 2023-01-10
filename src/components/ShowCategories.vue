<script>
    import { store } from '../store.js';
    import ShowCategory from './ShowCategory.vue';
    export default {
        components: {
            ShowCategory,
        },
        data(){
            return {
                categories: store.state.categories
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
                        <th scope="col">Descripción</th>   
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <show-category v-for="elem in categories" :key="elem.id" v-bind:category="elem"></show-category>     
                </tbody>
            </table>
        </div>
    </div>

</template>