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
  props: ["restaurants"],
};
</script>

<style scoped>
</style>
