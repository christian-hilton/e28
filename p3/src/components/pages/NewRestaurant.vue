<template>
  <div>
    <h2>Add a Restaurant</h2>
    <p v-if="showConfirmation">success</p>
    <div id="inputs">
      <label for="name">Name</label>
      <input type="text" v-model="restaurant.name" id="name" />
      <label for="sku">SKU:</label>
      <input type="text" v-model="restaurant.sku" id="sku" />
      <label for="date">Date:</label>
      <input type="text" v-model="restaurant.date" id="date" />
      <label for="location">Location:</label>
      <input type="text" v-model="restaurant.location" id="location" />
      <label for="description">Description</label>
      <textarea v-model="restaurant.description" id="description"></textarea>
    </div>
    <button @click="addRestaurant">Add Restaurant</button>
    {{ errors }}
  </div>
</template>

<script>
import { axios } from "@/common/app.js";

export default {
  data() {
    return {
      errors: null,
      showConfirmation: false,
      restaurant: {
        name: "Flour + Water",
        sku: "flour-water" + new Date().valueOf(),
        date: "12/10/20",
        location: "San Francisco, CA",
        description: "best neighborhood italian!",
      },
    };
  },
  methods: {
    addRestaurant() {
      axios.post("/restaurant", this.restaurant).then((response) => {
        console.log(response.data);
        if (response.data.errors != null) {
          this.errors = response.data.errors;
        } else {
          this.showConfirmation = true;
          this.$emit("update-restaurants");
        }
      });
    },
  },
};
</script>
<style scoped>
</style>