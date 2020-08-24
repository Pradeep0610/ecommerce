<template>
<b-container>
    <h1>All Products</h1>
    <b-row>
        <b-col class="pb-2">
            <b-button pill class="pb-2" @click="$bvModal.show('add-product-modal')" variant="dark">Add a new product</b-button>
        </b-col>
        <b-col class="pb-2">
            <b-button pill class="pb-2" @click="$bvModal.show('add-category-modal')" variant="dark">Add a new category</b-button>
        </b-col>
        <b-col class="pb-2">
            <b-button pill class="pb-2" @click="$bvModal.show('add-owner-modal')" variant="dark">Add a new owner</b-button>
        </b-col>
    </b-row>

    <AddProduct></AddProduct>
    <AddCategory></AddCategory>
    <AddOwner></AddOwner>

    <div class="mt-4">
        <b-row>
            <b-col xl="2" lg="2" md="3" sm="6" v-for="product in products" :key="product._id">
                <div>
                    <b-img :src="'http://localhost:3000/'+product.photo" fluid rounded></b-img>
                </div>
                <div>
                    <span class="font-weight-bold">{{ product.title }}</span>
                </div>
                <div class="a-row">
                    <a href="#">
                        <b-icon icon="star"></b-icon>
                        <b-icon icon="star"></b-icon>
                        <b-icon icon="star"></b-icon>
                        <b-icon icon="star"></b-icon>
                        <b-icon icon="star"></b-icon>
                    </a>
                    <span>
                        &nbsp;
                        <b-icon icon="chevron-down" scale="0.5"></b-icon>1732
                    </span>
                </div>
                <div>
                    <span>Rs. {{ product.price }}</span>
                </div>
            </b-col>
        </b-row>
    </div>
</b-container>
</template>

<script>
import axios from "axios";
import AddProduct from "../components/AddNewProductModal";
import AddCategory from "../components/AddNewCategory";
import AddOwner from "../components/AddNewOwnerModal";
export default {
    name: "Product",
    data() {
        return {
            products: []
        };
    },
    components: {
        AddProduct,
        AddCategory,
        AddOwner
    },
    mounted() {
        axios
            .get("http://localhost:3000/api/products")
            .then(res => {
                this.products = res.data.products;
            })
            .catch(err => console.log(err));
    }
};
</script>
