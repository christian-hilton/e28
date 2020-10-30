<template>
  <div id="product-page">
    <h1>{{ product.name }}</h1>
    <show-product :key="product.id" :product="product"></show-product>
  </div>
</template>

<script>
import { products } from "@/products.js";
import ShowProduct from "@/components/ShowProduct.vue";

export default {
  props: ["id"], // comes from our dynamic segment
  data() {
    return {
      products: products,
    };
  },
  components: {
    "show-product": ShowProduct,
  },
  computed: {
    product() {
      return this.products.find((x) => x.id == this.id);
    },
  },
};
</script>