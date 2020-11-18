<template>
  <div>
    <p></p>
    <h2>You have {{ numberUpcoming }} upcoming events.</h2>

    <div v-if="upcomingRestaurants"><h3>Restaurants</h3></div>
    <div v-for="restaurant in upcomingRestaurants" :key="restaurant.id">
      <b>{{ restaurant.date }}</b>
      <show-restaurant :key="restaurant.id" :restaurant="restaurant">
      </show-restaurant>
    </div>
    <div v-if="upcomingPlaces"><h3>Places</h3></div>
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
    return {
      //   restaurantdata: restaurantdata,
    };
  },
  props: ["places", "restaurants"],
  computed: {
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
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
