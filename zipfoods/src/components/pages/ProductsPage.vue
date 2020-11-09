<template>
  <div id="products">
    <h2>Products</h2>
    <show-preview
      v-for="product in products"
      :key="product.id"
      :product="product"
    ></show-preview>
  </div>
</template>

<script>
// import ShowProduct from "@/components/ShowProduct.vue";
import ShowProductPreview from "@/components/ShowProductPreview.vue";
//import { products } from "@/products.js";
//import { axios } from "@/app.js";

export default {
  name: "",
  components: {
    // "show-product": ShowProduct,
    "show-preview": ShowProductPreview,
  },
  props: ["products"],
};
</script>

<style scoped>
</style>