<template>
  <b-modal
    id="add-product-modal"
    ref="modal"
    :title="title"
    @show="resetModal"
    @hidden="resetModal"
    @ok="handleOk"
  >
    <form ref="form" @submit.stop.prevent="handleSubmit">
      <!-- Category Dropdown -->
      <b-form-group
        label="Category"
        label-for="category-input"
        invalid-feedback="Category is required"
      >
        <b-form-select v-model="selected" :options="categoryOptions" id="category-input"></b-form-select>
      </b-form-group>

      <!-- Owner Dropdown -->
      <b-form-group label="Owner" label-for="owner-input" invalid-feedback="Owner is required">
        <b-form-select v-model="selected" :options="ownerOptions" id="owner-input"></b-form-select>
      </b-form-group>

      <!-- Title input -->
      <b-form-group label="Title" label-for="title-input" invalid-feedback="Title is required">
        <b-form-input id="title-input"></b-form-input>
      </b-form-group>

      <!-- Price input -->
      <b-form-group label="Price" label-for="price-input" invalid-feedback="Price is required">
        <b-form-input id="price-input"></b-form-input>
      </b-form-group>

      <!-- Description textarea -->
      <b-form-group
        label="Description"
        label-for="description-input"
        invalid-feedback="Description is required"
      >
        <b-form-textarea id="description-input" size="default" placeholder="Describe the product"></b-form-textarea>
      </b-form-group>

      <!-- Photo file -->
      <b-form-group label="Photo" label-for="photo-input" invalid-feedback="Photo is required">
        <b-form-file
          v-model="file"
          placeholder="Choose a file or drop it here..."
          drop-placeholder="Drop file here..."
        ></b-form-file>
      </b-form-group>
    </form>
  </b-modal>
</template>
<script>
export default {
  name: "AddProduct",
  data() {
    return {
      selected: null,
      categoryOptions: [
        { value: null, text: "Please select an option" },
        { value: "1", text: "category-1" },
        { value: "2", text: "category-2" },
        { value: "3", text: "category-3" }
      ],
      ownerOptions: [
        { value: null, text: "Please select an option" },
        { value: "1", text: "owner-1" },
        { value: "2", text: "owner-2" },
        { value: "3", text: "owner-3" }
      ]
    };
  },
  props: {
    title: {
      type: String,
      default: "Add a new Product"
    }
  },
  methods: {
    checkFormValidity() {
      const valid = this.$refs.form.checkValidity();
    }
  }
};
</script>