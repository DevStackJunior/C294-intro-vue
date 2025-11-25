const app = Vue.createApp({
    data() {
        return {
            product: 'Chaussures',
            price: 89,
            brand: 'Nike',
            cart: [],
            image: './assets/chaussures.png',
            premium: True
        }
    },
    method: {
        addToCart(id){
            this.Cart.push[id]
        }
    },
    props: {

    },
    computed: {
        fullTitle() {
            return this.brand + ' ' + this.product
        },
    }
})

app.mount('#app')