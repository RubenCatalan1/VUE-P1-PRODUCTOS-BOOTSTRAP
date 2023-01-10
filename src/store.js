import { reactive } from 'vue'
import axios from "axios"

const url= "http://localhost:3000"

export const store = {
    state: reactive({
        products: [],
        errors: [],
        categories: []
    }),
    async loadData() {
        
        try {
            var respCategories = await axios.get(url + "/categories")
            var respProducts = await axios.get(url + "/products")
            respProducts.data.forEach(element => this.state.products.push(element))
            respCategories.data.forEach(element => this.state.categories.push(element));

        } catch (error) {
            this.state.errors.push("Error: " + error.message)
            setTimeout(()=> this.state.errors.splice(0,this.state.errors.length) ,5000)  
        }
        
    },
    async deleteProduct(id) {
        try {
            var response = await axios.delete(url + "/products/" + id)
            let index = this.state.products.findIndex(item => item.id === id)
            this.state.products.splice(index, 1)

        } catch (error) {
            this.state.errors.push("Error al borrar producto: " + error.message)
            setTimeout(()=> this.state.errors.splice(0,1) ,5000) 
        }
    },
    async increaseProduct(id) {
        try{
            let product = this.state.products.find(elem => elem.id === id)
            var response = await axios.patch(url + "/products/" + id, {
                uds: product.uds + 1
            })
            product.uds++
        } catch (error) {
            this.state.errors.push("Error al incrementar uds en producto: " + error.message)
            setTimeout(()=> this.state.errors.splice(0,1) ,5000) 
        }
    },
    async decreaseProduct(id) {
        try{
            let product = this.state.products.find(elem => elem.id === id)
            var response = await axios.patch(url + "/products/" + id, {
                uds: product.uds - 1
            })
            product.uds--
        } catch (error) {
            this.state.errors.push("Error al decrementar uds en producto: " + error.message)
            setTimeout(()=> this.state.errors.splice(0,1) ,5000) 
        }
    },
    async editProduct(product) {
        try{
            let oldProduct = this.state.products.find(elem => elem.id === product.id)
            const response = await axios.put(url + "/products/" + product.id, {
                name: product.name,
                uds: product.uds,
                price: product.price,
                category_id: product.category_id
            })
            oldProduct = response.data;
        } catch (error) {
            this.state.errors.push("Error al editar el producto" + oldProduct.name + ": " + error.message)
            setTimeout(()=> this.state.errors.splice(0,1) ,5000)
        }
    },
    async addProduct(product) {
        try {
            let response = await axios.post(url + "/products", product)
            this.state.products.push(response.data)
            
        } catch (error) {
            this.state.errors.push("Error al añadir el producto: " + error.message)
            setTimeout(()=> this.state.errors.splice(0,1) ,5000) 
        }
    },
    async deleteCategory(id) {
        try {
            var productsOfCategory = this.state.products.find(elem => elem.category_id === parseInt(id))
            if(productsOfCategory) {
                this.state.errors.push("Error al borrar categoría: La categoría tiene productos asociados")
                setTimeout(()=> this.state.errors.splice(0,1) ,5000)
                return
            }
            var response = await axios.delete(url + "/categories/" + id)
            let index = this.state.categories.findIndex(item => item.id === id)
            this.state.categories.splice(index, 1)

        } catch (error) {
            this.state.errors.push("Error al borrar categoría: " + error.message)
            setTimeout(()=> this.state.errors.splice(0,1) ,5000) 
        }
    },
    async addCategory(category) {
        try {
            let response = await axios.post(url + "/categories", category)
            this.state.categories.push(response.data)
            
        } catch (error) {
            this.state.errors.push("Error al añadir la categoría: " + error.message)
            setTimeout(()=> this.state.errors.splice(0,1) ,5000) 
        }
    }
    
}