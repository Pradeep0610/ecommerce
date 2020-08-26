<template>
<b-container>
    <vs-card>
        <div class="product-edit container mt-4">
            <vs-row vs-type="flex" vs-w="12">
                <vs-col vs-type="flex" vs-w="8" vs-justify="flex-start">
                    <img :src="'http://localhost:3000/'+product.photo" alt="Product images" />
                </vs-col>
                <vs-col vs-type="flex" vs-w="4" vs-align="flex-start" vs-justify="flex-start">
                    <div class="text-left">
                        <h3>{{ product.title }}</h3>
                        <h6>{{ product.description }}</h6>
                        <h6>Rs {{ product.price }}</h6>
                        <div class="image-buttons">
                            <vs-button class="mt-2 mb-2 mr-2">
                                <span class="m-4 text-uppercase">Add Image</span>
                            </vs-button>
                            <vs-button color="danger">
                                <span class="m-3 text-uppercase">Remove Image</span>
                            </vs-button>
                        </div>
                    </div>
                </vs-col>
            </vs-row>

            <ValidationObserver v-slot="{handleSubmit}">
                <b-form ref="form" @submit.prevent="handleSubmit(onSubmit)">
                    <vs-row class="my-5" vs-w="12">
                        <vs-col vs-w="6" vs-type="flex">
                            <div class="text-left mr-2 w-full">
                                <validation-provider name="Title" rules="required" v-slot="{ valid, errors }">
                                    <vs-input type="text" label="Title" v-model="product.title" size="large" class="mt-4 w-full"></vs-input>
                                </validation-provider>
                                <validation-provider name="Description" rules="required" v-slot="{ valid, errors }">
                                    <vs-input type="text" label="Description" v-model="product.description" size="large" class="mt-4 w-full"></vs-input>
                                </validation-provider>
                                <validation-provider name="Price" rules="required" v-slot="{ valid, errors }">
                                    <vs-input type="number" label="Price" v-model="product.price" size="large" class="mt-4 w-full"></vs-input>
                                </validation-provider>
                            </div>
                        </vs-col>

                        <vs-col vs-w="6" vs-type="flex">
                            <div class="text-left ml-2 w-full mt-4">
                                <validation-provider name="Category" rules="required" v-slot="{ valid, errors }">
                                    <vs-select label="Category" class="w-full" size="large"></vs-select>
                                </validation-provider>
                                <validation-provider name="Title" rules="required" v-slot="{ valid, errors }">
                                    <vs-input label="Title" v-model="product.title" size="large" class="mt-4 w-full"></vs-input>
                                </validation-provider>
                                <validation-provider name="Title" rules="required" v-slot="{ valid, errors }">
                                    <vs-input label="Title" v-model="product.title" size="large" class="mt-4 w-full"></vs-input>
                                </validation-provider>
                            </div>
                        </vs-col>
                    </vs-row>
                </b-form>
            </ValidationObserver>
        </div>
    </vs-card>
</b-container>
</template>

<script>
import axios from "axios";
import {
    ValidationProvider,
    ValidationObserver,
    extend
} from "vee-validate";

extend("required", {
    validate(value) {
        return {
            required: true,
            valid: ["", null, undefined].indexOf(value) === -1
        };
    }
});
export default {
    components: {
        ValidationObserver,
        ValidationProvider
    },
    data() {
        return {
            product: {}
        };
    },
    mounted() {
        axios
            .get(`http://localhost:3000/api/products/${this.$route.params.id}`)
            .then(response => {
                this.product = response.data.product;
            })
            .catch(err => {
                console.log(err.message);
            });
    }
};
</script>

<style scoped>
.w-full {
    width: 100% !important;
}
</style>
