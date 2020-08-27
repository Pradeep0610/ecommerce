<template>
<div class="container-fluid">
    <h1>All Products</h1>
    <b-row>
        <b-col class="pb-2 mt-3" v-for="modal in modalProps" :key="modal.modalID">
            <b-button pill class="pb-2" @click="$bvModal.show(modal.modalID)" variant="dark">{{ modal.buttonName }}</b-button>
        </b-col>
    </b-row>

    <AddProduct title="Add a new Product" submitButtonName="Add Product"></AddProduct>
    <AddCategory></AddCategory>
    <AddOwner></AddOwner>

    <div>
        <vs-row class="match-height" vs-w="12">
            <vs-col v-for="product in products" :key="product._id" vs-lg="4" vs-md="6" vs-sm="12">
                <vs-card fixed-height></vs-card>
            </vs-col>
        </vs-row>
    </div>
</div>

<!-- <b-link :to="`/products/${product._id}`">
                        <b-img :src="'http://localhost:3000/'+product.photo" fluid rounded></b-img>
                        <div>
                            <span class="font-weight-bold">{{ product.title }}</span>
                        </div>
                        <b-row align-h="center">
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
                        </b-row>
                        <div>
                            <span>Rs. {{ product.price }}</span>
                        </div>
                        <b-row>
                            <b-col class="pb-2">
                                <b-button :to="`/products/product-edit/${product._id}`" size="sm" variant="success">Update</b-button>
                            </b-col>
                            <b-col class="pb-2">
                                <b-button size="sm" variant="danger">Delete</b-button>
                            </b-col>
                        </b-row>
  </b-link>-->
</template>

<script>
import axios from "axios";
import AddProduct from "../components/AddNewProductModal";
import AddCategory from "../components/AddNewCategory";
import AddOwner from "../components/AddNewOwnerModal";
import UpdateProduct from "../components/UpdateProduct";
export default {
    name: "Product",
    data() {
        return {
            products: [],
            modalProps: [{
                    modalID: "add-product-modal",
                    buttonName: "Add a new Product"
                },
                {
                    modalID: "add-category-modal",
                    buttonName: "Add a new Category"
                },
                {
                    modalID: "add-owner-modal",
                    buttonName: "Add a new owner"
                }
            ]
        };
    },
    components: {
        AddProduct,
        AddCategory,
        AddOwner,
        UpdateProduct
    },
    methods: {
        showProductInfo(productID) {
            this.$router.push(`/products/${productID}`);
        }
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

<style scoped>
.container-fluid {
    position: relative !important;
}
</style>
