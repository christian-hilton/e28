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

    <router-view v-bind:restaurants="restaurants"></router-view>
  </div>
</template>

<script>

export default {
  name: "App",
  data() {
    return {

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
  mounted() {
    this.$store.dispatch('fetchRestaurants');
    this.$store.dispatch('fetchPlaces');
  },
    computed: {
        restaurants() {
            return this.$store.state.restaurants;
        },
        places() {
            return this.$store.state.places;
        }
    }
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
