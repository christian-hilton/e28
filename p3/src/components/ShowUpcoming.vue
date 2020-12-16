<template>
  <div>
    <p></p>
    <h2>You have {{ numberUpcoming }} upcoming events.</h2>

    <div v-if="upcomingRestaurants"><h3>Restaurants:</h3></div>
    <div v-for="restaurant in upcomingRestaurants" :key="restaurant.id">
      <b>{{ restaurant.date }}</b>
      <show-restaurant :key="restaurant.id" :restaurant="restaurant">
      </show-restaurant>
    </div>
    <div v-if="upcomingPlaces"><h3>Places:</h3></div>
    <div v-for="place in upcomingPlaces" :key="place.id">
      <b>{{ place.date }}</b>
      <show-place :key="place.id" :place="place"> </show-place>
    </div>
  </div>
</template>

<script>
import ShowRestaurant from "@/components/ShowRestaurant.vue";
import ShowPlace from "@/components/ShowPlace.vue";

export default {
  name: "",
  components: {
    "show-restaurant": ShowRestaurant,
    "show-place": ShowPlace,
  },
  data: function () {
    return {};
  },
  props: ["upcomingRestaurants", "upcomingPlaces"],
  computed: {
    numberUpcoming() {
      return this.upcomingPlaces.length + this.upcomingRestaurants.length;
    },
  },
};
</script>


<style scoped>
</style>