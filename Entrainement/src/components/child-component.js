app.component('product-details', {
    template:
    `<div>
        <h1> {{ brand + product }} </h1>

        <img :src="image" width=120 height="120" />

        <p> Prix TTC : {{ price * 1.08 }} </p>
        
        <button @click="addToCart">
            Ajouter au panier
        </button>

        <ul>
            <li v-for="detail in details"> {{ detail }} </li>
        </ul>
    </div>`,
    data(){
        return {
            details: ["léger", "résistant", "respirant"]
        }
    },
    
    props: {
        product: String,
        price: Number,
        brand: String,
        premium: Boolean,
        image: String,
    },
    methods: {
        addToCart(){
            this.$emit('add-to-cart')
        }
    },
    computed: {
        stockStatus() {
            return this.premium ? 'VIP Stock' : 'standard stock'
        }
    }

})