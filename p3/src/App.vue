<template>
  <div id="app" v-cloak>
    <h1>Detour</h1>
    <nav>
      <router-link
        v-for="link in links"
        v-bind:key="link"
        v-bind:to="paths[link]"
        exact
      >
        {{ link }} /
      </router-link>
    </nav>

    <router-view
      v-bind:restaurants="restaurants"
      v-bind:places="places"
      v-on:update-restaurants="updateData()"
    ></router-view>
  </div>
</template>

<script>
import { axios } from "@/common/app.js";

export default {
  name: "App",
  data() {
    return {
      restaurants: [],
      places: [],

      /* Store links in an array to maintain order */
      links: ["home", "restaurants", "destinations", "account", "new"],

      /* Map links to the appropriate component */
      paths: {
        home: "/",
        restaurants: "/restaurants",
        destinations: "/places",
        explore: "/explore",
        account: "/account",
        new: "/restaurant/new",
      },
    };
  },
  methods: {
    updateData() {
      axios.get("restaurant").then((response) => {
        this.restaurants = response.data.restaurant;
        console.log(this.restaurants);
      });
      axios.get("place").then((response) => {
        this.places = response.data.place;
        console.log(this.places);
      });
    },
  },
  mounted() {
    this.updateData();
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
