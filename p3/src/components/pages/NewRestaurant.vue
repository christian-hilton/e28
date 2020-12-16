<template>
  <div>
    <h2>Add a Restaurant</h2>
    <p v-if="showConfirmation">success</p>
    <div id="inputs">
      <label for="name">Name</label>
      <error-field v-if="errors && 'name' in errors" :errors="errors.name"></error-field>
      <input 
      type="text" 
      v-model="restaurant.name" 
      id="name" 
      v-on:blur="validate()"/>
      <br>
      <br>
      <label for="sku">SKU:</label>
      <error-field v-if="errors && 'sku' in errors" :errors="errors.sku"></error-field>
      <input type="text" v-model="restaurant.sku" id="sku" 
      v-on:blur="validate()"
      />
      <br>
      <br>
      <label for="date">Date:</label>
      <error-field v-if="errors && 'date' in errors" :errors="errors.date"></error-field>
      <input type="text" v-model="restaurant.date" id="date" 
      v-on:blur="validate()"
      />
      <br>
      <br>
      <label for="location">Location:</label>
      <error-field v-if="errors && 'location' in errors" :errors="errors.location"></error-field>
      <input type="text" v-model="restaurant.location" id="location" 
      v-on:blur="validate()"
      />
      <br>
      <br>
      <label for="description">Description</label>
      <error-field v-if="errors && 'description' in errors" :errors="errors.description"></error-field>
      <textarea v-model="restaurant.description" id="description"
      v-on:blur="validate()"></textarea>
      <br>
    </div>
    <button @click="addRestaurant">Add Restaurant</button>
    <!-- {{ errors }} -->
  </div>
</template>

<script>
import { axios } from "@/common/app.js";
import Validator from 'validatorjs';
import ErrorField from '@/components/ErrorField.vue';

export default {
  components: {
      'error-field': ErrorField
    },
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
    validate() {
            let validator = new Validator(this.restaurant, {
                name: 'required|between:3,100',
                sku: 'required|between:3,100|alpha_dash',
                location: 'required|min:5',
                description: 'required|min:10'
            });
            if (validator.fails()) {
                this.errors = validator.errors.all();
            } else {
                this.errors = null;
            }
            return validator.passes();
        },
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