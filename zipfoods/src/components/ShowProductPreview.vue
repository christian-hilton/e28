<template>
  <div class="product">
    <div class="product-name">
      <a href="/products/1">
        {{ product.name }}
      </a>
    </div>
    <img
      class="product-thumb"
      v-bind:src="require('@/assets/images/products/' + product.id + '.jpg')"
    />
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
};
</script>

<style scoped>
</style>