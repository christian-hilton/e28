<template>
  <div class="restaurant">
    <div class="restaurant-name">
      <h2>{{ restaurant.name }} - {{ restaurant.location }}</h2>
    </div>
    <div>
      <img
        class="restaurant-thumb"
        width="500"
        v-bind:src="restaurant.image_URL"
      />
    </div>
    <div class="restaurant-description">
      {{ restaurant.description }}
    </div>
  </div>
</template>

<script>
export default {
  name: "show-restaurant",
  props: ["restaurant"],
  data: function () {
    return {};
  },
};
</script>

<style scoped>
</style>