<template>
  <div class="place">
    <div class="place-name">
      <h2>{{ place.name }}</h2>
    </div>
    <img class="restaurant-thumb" width="500" v-bind:src="place.image_URL" />
    <p class="restaurant-description">{{ place.description }}</p>
  </div>
</template> 

<script>
export default {
  name: "show-place",
  props: ["place"],
  data: function () {
    return {};
  },
};
</script>

<style scoped>
</style>