<template>
  <div>
    <show-upcoming
      :upcomingPlaces="upcomingPlaces"
      :upcomingRestaurants="upcomingRestaurants"
    ></show-upcoming>
  </div>
</template>

<script>
import ShowUpcoming from "@/components/ShowUpcoming.vue";

export default {
  name: "",
  components: {
    "show-upcoming": ShowUpcoming,
  },
  data: function () {
    return {};
  },
  computed: {
   restaurants() {
            return this.$store.state.restaurants;
        },
    places() {
            return this.$store.state.places;
        },
    upcomingRestaurants() {
      return this.restaurants.filter((restaurant) => {
        return restaurant.date != null;
      });
    },
    upcomingPlaces() {
      return this.places.filter((place) => {
        return place.date != null;
      });
    },
    numberUpcoming() {
      return this.upcomingPlaces.length + this.upcomingRestaurants.length;
    },
  },
};
</script>


<style scoped>
</style>
