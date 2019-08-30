<template>
    <div class="main">
        <nav class="top-bar topbar-responsive">
            <div class="columns medium-2">
                <strong><b>Products</b></strong>
            </div>
            <div id="topbar-responsive" class="topbar-responsive-links">
                <div class="top-bar-right">
                    <ul class="menu simple vertical medium-horizontal">
                        <li><router-link to="/Canteen/CanteenHome">Home</router-link></li>
                        <li><router-link to="/Canteen/CanteenProducts"  class="active">View Adds</router-link></li>
                        <li><router-link to="/Canteen/CanteenAdds">Post add</router-link></li>
                        <li><router-link to="/Canteen/CanteenDashboard">Dashboard</router-link></li>
                        <li>
                            <router-link to="/"><button type="button" class="button hollow topbar-responsive-button">Log Out</button></router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <products-grid
                :items="items"
                :options="options"
                @widgetSelected="set_preview"
                @widgetClick="add_to_cart"
                @widgetRating="set_rating"
                @widgetFavorite="set_favorite"
        />
    <Footer/>
    </div>

</template>

<script>
    import ProductsGrid from 'vue-products-grid'
    import Footer from "../Footer";
    export default {
        name: "CanteenProducts",
        components:{
            Footer,
            ProductsGrid
        },
        data: () => ({
            //sample data
            items: [
                { _id: "1", product: "Margherita", fullprice: 22, sale: 0 , category: "Sliced Pizza" , description: "<span style='color:#ccc'>my description width a style injected</span>" ,image: "https://storage.googleapis.com/ghostfood-539ae.appspot.com/images/pizza_2.jpg" , fav: false},
                { _id: "2", product: "Capricciosa", fullprice: 25, sale: 22 , category: "Sliced Pizza" , description: "my description" , image: "https://storage.googleapis.com/ghostfood-539ae.appspot.com/images/pizza_3.jpg" , fav: false , stars: 3.5},
                { _id: "3", product: "Napoli", fullprice: 20, sale: 0 , category: "Sliced Pizza" , description: "my description" , image: "https://storage.googleapis.com/ghostfood-539ae.appspot.com/images/pizza_4.jpg" , fav: false },
                { _id: "4", product: "Salame Piccante", fullprice: 19, sale: 0 , category: "Sliced Pizza" , description: "my description" ,image: "https://storage.googleapis.com/ghostfood-539ae.appspot.com/images/pizza_5.jpg" , fav: false },
                { _id: "5", product: "Salame Piccante", fullprice: 19, sale: 0 , category: "Sliced Pizza" , description: "my description" ,image: "https://storage.googleapis.com/ghostfood-539ae.appspot.com/images/pizza_5.jpg" , fav: false },

            ],
            //mapping fields
            mapping: {
                id:   '_id',
                name: 'product',
                label: 'category',
                abstract: 'description',
                price: 'fullprice',
                sale_price: 'sale',
                image: 'image',
                isfavorite: 'fav',
                rating: 'stars'
            },
            //sample configuration
            options: {
                color: "#fff",
                title_color: "#555",
                text_color: "#ccc",
                price_color: "#555",
                sale_color: "#ff0000",
                icons_color: "#888",
                rating_color: "#ff0000",
                elevation: "1",
                rating: true,
                favorite: true,
                currency: "€",
                salebox: true,
                elevation: '1',
                btn_1: '<i class="material-icons">favorite_border</i>',
                btn_1_on: '<i class="material-icons">favorite</i>',
                btn_2: '<i class="material-icons">shopping_cart</i>',
            },
        }),
        methods: {
            set_preview(product) {
                //.. do your logic ...
                console.log("clicked product=>", product);
            },
            add_to_cart(product) {
                //.. do your logic ...
                console.log("add_to_cart product=>", product);
            },
            set_rating(rating, product) {
                //.. do your logic ...
                console.log("rating=>", rating, "product=>", product);
            },
            set_favorite(product, status, index) {
                //.. do your logic ...
                this.items[index].isfavorite = status;
                console.log("favorite product=>", product, "status=>", status);
            }
        }
    }
</script>

<style scoped>

    .main{
        margin-top: -60px;
    }

    .topbar-responsive {
        background: #2c3840;
        padding: 1rem 1.5rem;
    }

    .topbar-responsive .topbar-responsive-logo {
        color: #fefefe;
        vertical-align: middle;
    }

    .topbar-responsive .menu {
        background: #2c3840;
    }

    .topbar-responsive .menu li:last-of-type {
        margin-right: 0;
    }

    .topbar-responsive .menu a {
        color: #fefefe;
        transition: color 0.15s ease-in;
    }

    .topbar-responsive .menu a:hover {
        color: #c6d1d8;
    }

    @media screen and (max-width: 39.9375em) {
        .topbar-responsive .menu a {
            padding: 0.875rem 0;
        }
    }

    .topbar-responsive .menu .topbar-responsive-button {
        color: #fefefe;
        border-color: #fefefe;
        border-radius: 5000px;
        transition: color 0.15s ease-in, border-color 0.15s ease-in;
    }

    .topbar-responsive .menu .topbar-responsive-button:hover {
        color: #c6d1d8;
        border-color: #c6d1d8;
    }

    @media screen and (max-width: 39.9375em) {
        .topbar-responsive .menu .topbar-responsive-button {
            width: 100%;
            margin: 0.875rem 0;
        }
    }

    @media screen and (max-width: 39.9375em) {
        .topbar-responsive {
            padding: 0.75rem;
        }
        .topbar-responsive .top-bar-title {
            position: relative;
            width: 100%;
        }
        .topbar-responsive .top-bar-title span {
            position: absolute;
            right: 0;
            border: 1px solid #fefefe;
            border-radius: 5px;
            padding: 0.25rem 0.45rem;
            top: 50%;
            -webkit-transform: translateY(-50%);
            -ms-transform: translateY(-50%);
            transform: translateY(-50%);
        }
        .topbar-responsive .top-bar-title span .menu-icon {
            margin-bottom: 4px;
        }
    }

    @-webkit-keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    @-webkit-keyframes slideDown {
        0% {
            -webkit-transform: translateY(-100%);
            transform: translateY(-100%);
        }
        100% {
            -webkit-transform: translateY(0%);
            transform: translateY(0%);
        }
    }

    @keyframes slideDown {
        0% {
            -webkit-transform: translateY(-100%);
            transform: translateY(-100%);
        }
        100% {
            -webkit-transform: translateY(0%);
            transform: translateY(0%);
        }
    }

    @media screen and (max-width: 39.9375em) {
        .topbar-responsive-links {
            -webkit-animation-fill-mode: both;
            animation-fill-mode: both;
            -webkit-animation-duration: 0.5s;
            animation-duration: 0.5s;
            width: 100%;
            -webkit-animation: fadeIn 1s ease-in;
            animation: fadeIn 1s ease-in;
        }
    }

    b{
        color: #fefefe;
        margin-left: 20px;
        font-family: 'Proxima Nova', 'Helvetica Neue', Helvetica, Arial, sans-serif;
        font-size: 24px;
    }

    .active{
        font-weight: bolder;
        text-decoration: none;
    }


    .product-card {
        background-color: #fefefe;
        border: 1px solid #e6e6e6;
        padding: 1rem;
        margin-bottom: 1.5rem;
        margin-left: 40px;
        margin-top: 100px;

    }

    .product-card-thumbnail {
        display: block;
        position: relative;
    }

    .product-card-title {
        font-family: 'Open sans', sans-serif;
        font-size: 0.9rem;
        font-weight: 600;
        line-height: 1.45rem;
        margin-top: 1rem;
        margin-bottom: 0;
    }

    .product-card-desc {
        color: #8a8a8a;
        display: block;
        font-family: 'Open sans', sans-serif;
        font-size: 0.85rem;
    }

    .product-card-price {
        color: #3e3e3e;
        display: inline-block;
        font-size: 0.85rem;
        font-weight: 600;
        margin-top: 0.8rem;
    }

    .product-card-sale {
        color: #cacaca;
        display: inline-block;
        font-size: 0.85rem;
        margin-left: 0.3rem;
        text-decoration: line-through;
    }

    .product-card-colors {
        display: block;
        margin-top: 0.8rem;
    }

    .product-card-color-option {
        display: inline-block;
        height: 25px;
        width: 25px;
    }


    .input-number-group {
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
    }

    .input-number-group input[type=number]::-webkit-inner-spin-button,
    .input-number-group input[type=number]::-webkit-outer-spin-button {
        -webkit-appearance: none;
        appearance: none;
    }

    .input-number-group .input-group-button {
        line-height: calc(80px/2 - 5px);
    }

    .input-number-group .input-number {
        width: 80px;
        padding: 0 12px;
        vertical-align: top;
        text-align: center;
        outline: none;
        display: block;
        margin: 0;
    }

    .input-number-group .input-number,
    .input-number-group .input-number-decrement,
    .input-number-group .input-number-increment {
        border: 1px solid #cacaca;
        height: 40px;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        border-radius: 0;
    }

    .input-number-group .input-number-decrement,
    .input-number-group .input-number-increment {
        display: inline-block;
        width: 40px;
        background: #e6e6e6;
        color: #0a0a0a;
        text-align: center;
        font-weight: bold;
        cursor: pointer;
        font-size: 2rem;
        font-weight: 400;
    }

    .input-number-group .input-number-decrement {
        margin-right: 0.3rem;
    }

    .input-number-group .input-number-increment {
        margin-left: 0.3rem;
    }

    .ecommerce-product-slider .orbit-previous,
    .ecommerce-product-slider .orbit-next {
        color: #cacaca;
        margin-top: 200px;
    }

    .ecommerce-product-slider .orbit-bullets button {
        height: 0.65rem;
        width: 0.65rem;
    }

</style>