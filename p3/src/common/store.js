import Vue from 'vue'
import Vuex from 'vuex'
import { axios } from '@/common/app.js';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        cartCount: 0,
        restaurants: [],
        places: [],
        user: null
    },
    mutations: {
        setUser(state, payload) {
            state.user = payload;
        },
        setRestuarants(state, payload) {
            state.restaurants = payload;
        },
        setPlaces(state, payload) {
            state.places = payload;
        },
    },
    actions: {
        fetchRestaurants(context) {
            axios.get('restaurant').then((response) => {
                context.commit('setRestuarants', response.data.restaurant);
            });
        },
        fetchPlaces(context) {
            axios.get('place').then((response) => {
                context.commit('setPlaces', response.data.place);
            });
        },
        authUser(context) {
            axios.post('auth').then((response) => {
                if (response.data.authenticated) {
                    context.commit('setUser', response.data.user);
                }
            });
        },
    },
    getters: {
        getRestaurantById(state) {
            return function (id) {
                return state.restaurants.filter((restaurant) => {
                    return restaurant.id == id;
                }, this.id)[0];
            }
        }
    }
})