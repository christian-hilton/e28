<template>
  <div class="place">
    <div class="place-name">
      <h2>{{ place.name }}</h2>
    </div>
    <img width="800" v-bind:src="place.image_URL" />
    <p>{{ place.description }}</p>
    <p></p>
  </div>
</template>

<script>
export default {
  name: "show-place-detail",
  props: ["place"],
  data: function () {
    return {};
  },
};
</script>

<style scoped>
</style>