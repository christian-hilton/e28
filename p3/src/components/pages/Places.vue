<template>
  <div>
    <p>Places</p>
    <show-place v-for="place in places" :key="place.id" :place="place">
    </show-place>
  </div>
</template>

<script>
import ShowPlace from "@/components/ShowPlace.vue";

export default {
  name: "",
  components: {
    "show-place": ShowPlace,
  },
  data: function () {
    return {};
  },
  computed: {
    places() {
       return this.$store.state.places;
        },
  }
};
</script>

<style scoped>
</style>
