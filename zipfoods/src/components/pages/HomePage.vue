<template>
  <div id="app">
    <img alt="Vue logo" id="logo" src="@/assets/images/zipfoods-logo.png" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <p>
      ZipFoods is your one-stop-shop for convenient online grocery shopping in
      the greater Boston area.
    </p>
    <show-featured :category="'snacks'"></show-featured>
  </div>
</template>

<script>
// import ShowProduct from "@/components/ShowProduct.vue";
import ShowFeatured from "@/components/ShowFeatured.vue";

export default {
  name: "App",
  components: {
    "show-featured": ShowFeatured,
  },
};
</script>

<style scoped>
</style>
