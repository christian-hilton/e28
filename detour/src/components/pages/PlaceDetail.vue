<template>
  <div>
    <div v-if="place">
      <show-place-detail :key="place.id" :place="place" :includeDetails="true">
      </show-place-detail>
    </div>
  </div>
</template>

<script>
import ShowPlaceDetail from "@/components/ShowPlaceDetail.vue";

export default {
  name: "",
  components: {
    "show-place-detail": ShowPlaceDetail,
  },
  data: function () {
    return {};
  },
  props: ["id", "places"],
  computed: {
    place() {
      return this.places.filter((place) => {
        return place.id == this.id;
      }, this.id)[0];
    },
  },
};
</script>

<style scoped>
</style>
