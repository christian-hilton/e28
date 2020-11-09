<template>
  <div id="product-page">
    <div v-if="product">
      <show-product :product="product" :includeDetails="true"></show-product>
    </div>
  </div>
</template>

<script>
// import { products } from "@/products.js";
import ShowProduct from "@/components/ShowProduct.vue";

export default {
  name: "",
  props: ["id", "products"], // comes from our dynamic segment
  data() {
    return {
      // product: null,
      // products: products,
    };
  },
  components: {
    "show-product": ShowProduct,
  },
  computed: {
    product() {
      return this.products.filter((product) => {
        return product.id == this.id;
      }, this.id)[0];
    },
  },
};
</script>