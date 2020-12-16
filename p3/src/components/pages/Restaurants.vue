<template>
  <div>
    <p>restaurants</p>
    <show-restaurant
      v-for="restaurant in restaurants"
      :key="restaurant.id"
      :restaurant="restaurant"
    >
    </show-restaurant>
  </div>
</template>

<script>
import ShowRestaurant from "@/components/ShowRestaurant.vue";

export default {
  name: "",
  components: {
    "show-restaurant": ShowRestaurant,
  },
  data: function () {
    return {};
  },
  // props: ["restaurants"],
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

<style scoped>
</style>
