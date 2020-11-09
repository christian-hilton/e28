<template>
  <div id="app">
    <!-- Added to the App.vue template -->
    <nav>
      <ul>
        <li>
          <router-link
            v-for="link in links"
            v-bind:key="link"
            v-bind:to="paths[link]"
            exact
            >{{ link }}</router-link
          >
        </li>
      </ul>
    </nav>

    <router-view
      v-bind:products="products"
      v-on:update-products="updateProducts()"
    ></router-view>

    <!-- <home-page v-if="page == 'home'"></home-page>
    <products-page v-if="page == 'products'"></products-page>
    <categories-page v-else-if="page == 'categories'"></categories-page> -->
  </div>
</template>

<script>
// import HomePage from "@/components/pages/HomePage.vue";
// import ProductsPage from "@/components/pages/ProductsPage.vue";
// import CategoriesPage from "@/components/pages/CategoriesPage.vue";
import { axios } from "@/app.js";

export default {
  name: "App",
  data() {
    return {
      /* Store links in an array to maintain order */
      products: [],

      links: ["home", "products", "categories", "create"],

      /* Map links to the appropriate component */
      paths: {
        home: "/",
        products: "/products",
        categories: "/categories",
        create: "products/new",
      },
    };
  },
  methods: {
    updateProducts() {
      axios.get("/product").then((response) => {
        this.products = response.data.product;
        console.log(response);
      });
    },
  },
  mounted() {
    this.updateProducts();
  },
};
</script>

<style lang='scss'>
/* @import "@/assets/css/zipfoods.css"; */
@import "@/assets/scss/zipfoods.scss";
</style>
