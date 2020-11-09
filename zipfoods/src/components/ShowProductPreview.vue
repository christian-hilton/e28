<template>
  <div class="product">
    <div class="product-name">
      <a href="/products/1">
        {{ product.name }}
      </a>
    </div>
    <img class="product-thumb" v-bind:src="imageSource" />
    <!-- <p class="product-description">{{ product.description }}</p>
    <div class="product-price">${{ product.price }}</div> -->
  </div>
</template>

<script>
export default {
  name: "show-product-preview",
  props: ["product"],
  data: function () {
    return {};
  },
  computed: {
    imageSource() {
      try {
        return require("@/assets/images/products/" + this.product.id + ".jpg");
      } catch {
        return require("@/assets/images/products/image-not-available.jpg");
      }
    },
  },
};
</script>

<style scoped>
</style>