<template>
  <div>
    <!-- <h1>{{ msg }}</h1> -->
    <p>Places</p>
    <show-place v-for="place in places" :key="place.id" :place="place">
    </show-place>
  </div>
</template>

<script>
// import { tripdata } from "@/tripdata.js";
import ShowPlace from "@/components/ShowPlace.vue";

export default {
  name: "",
  components: {
    "show-place": ShowPlace,
  },
  data: function () {
    return {
      // tripdata: tripdata,
    };
  },
  props: ["places"],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
