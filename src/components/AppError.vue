<script>
import { store } from '../store.js';

export default {
    data(){
        return {
            errors: store.state.errors,
        }
    }
}
</script>
<template>
    <div class="alert alert-danger alert-dismissible" v-for="error, index in errors" :key="index">{{error}}</div>
</template>