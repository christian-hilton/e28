<template>
  <div>
    <!-- <h1>{{ msg }}</h1> -->
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
// import { restaurantdata } from "@/restaurantdata.js";
import ShowRestaurant from "@/components/ShowRestaurant.vue";

export default {
  name: "",
  components: {
    "show-restaurant": ShowRestaurant,
  },
  data: function () {
    return {
      // restaurantdata: restaurantdata,
    };
  },
  props: ["restaurants"],
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
