<template>
  <b-modal
    id="add-product-modal"
    ref="modal"
    title="Add a new product"
    @show="resetModal"
    @hidden="resetModal"
    hide-footer
  >
    <ValidationObserver v-slot="{ handleSubmit }">
      <b-form ref="form" @submit.prevent="handleSubmit(onSubmit)">
        <!-- Category Dropdown -->
        <validation-provider name="Category" rules="required" v-slot="{ valid, errors }">
          <b-form-group
            label="Category"
            label-for="category-input"
            invalid-feedback="Category is required"
          >
            <b-form-select
              v-model="category"
              :state="errors[0] ? false : (valid ? true : null)"
              :options="categoryOptions"
              id="category-input"
            ></b-form-select>
          </b-form-group>
        </validation-provider>

        <!-- Owner Dropdown -->
        <validation-provider name="Owner" rules="required" v-slot="{ valid, errors }">
          <b-form-group label="Owner" label-for="owner-input" invalid-feedback="Owner is required">
            <b-form-select
              v-model="owner"
              :state="errors[0] ? false : (valid ? true : null)"
              :options="ownerOptions"
              id="owner-input"
            ></b-form-select>
          </b-form-group>
        </validation-provider>

        <!-- Title input -->
        <validation-provider name="Title" rules="required" v-slot="{ valid, errors }">
          <b-form-group label="Title" label-for="title-input" invalid-feedback="Title is required">
            <b-form-input
              id="title-input"
              :state="errors[0] ? false : (valid ? true : null)"
              v-model="title"
            ></b-form-input>
          </b-form-group>
        </validation-provider>

        <!-- Price input -->
        <validation-provider name="Price" rules="required" v-slot="{ valid, errors }">
          <b-form-group label="Price" label-for="price-input" invalid-feedback="Price is required">
            <b-form-input
              id="price-input"
              :state="errors[0] ? false : (valid ? true : null)"
              v-model="price"
            ></b-form-input>
          </b-form-group>
        </validation-provider>

        <!-- Description textarea -->
        <validation-provider name="Description" rules="required" v-slot="{ valid, errors }">
          <b-form-group
            label="Description"
            label-for="description-input"
            invalid-feedback="Description is required"
          >
            <b-form-textarea
              id="description-input"
              size="default"
              placeholder="Describe the product"
              :state="errors[0] ? false : (valid ? true : null)"
              v-model="description"
            ></b-form-textarea>
          </b-form-group>
        </validation-provider>

        <!--TODO validate file -->
        <!-- Photo file -->
        <validation-provider name="Photo" rules="required|image" v-slot="{ valid, errors }">
          <b-form-group label="Photo" label-for="photo-input" invalid-feedback="Photo is required">
            <b-form-file
              placeholder="Choose a file or drop it here..."
              drop-placeholder="Drop file here..."
              :state="errors[0] ? false : (valid ? true : null)"
              v-model="photo"
            ></b-form-file>
          </b-form-group>
        </validation-provider>

        <b-button type="submit" variant="success">Add Product</b-button>
        <b-button variant="light" @click="closeModal">Cancel</b-button>
      </b-form>
    </ValidationObserver>
  </b-modal>
</template>
<script>
import axios from "axios";
import { ValidationProvider, ValidationObserver, extend } from "vee-validate";
extend("required", {
  validate(value) {
    return {
      required: true,
      valid: ["", null, undefined].indexOf(value) === -1
    };
  },
  computesRequired: true
});
extend("image", {
  validate(value) {
    return {
      required: true,
      valid: ["", null, undefined].indexOf(value) === -1
    };
  },
  computesRequired: true
});
export default {
  name: "AddProduct",
  data() {
    return {
      category: null,
      owner: null,
      title: "",
      price: "",
      description: "",
      photo: null,
      categoryOptions: [],
      ownerOptions: []
    };
  },
  methods: {
    onSubmit() {
      this.closeModal();
    },
    resetModal() {
      this.category = null;
      this.owner = null;
      this.title = "";
      this.price = "";
      this.description = "";
      this.photo = [];
    },
    closeModal() {
      this.$nextTick(() => {
        this.$bvModal.hide("add-product-modal");
      });
    }
  },
  components: {
    ValidationProvider,
    ValidationObserver
  },
  mounted() {
    axios
      .get("http://localhost:3000/api/categories")
      .then(response => {
        this.categoryOptions = response.data.categories;
      })
      .catch(err => {
        console.log(err.message);
      });

    axios
      .get("http://localhost:3000/api/owners")
      .then(response => {
        this.ownerOptions = response.data.owners;
      })
      .catch(err => {
        console.log(err.message);
      });
  }
};
</script>